import { put } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, source = 'homepage' } = request.body;

    if (!email || typeof email !== 'string') {
      return response.status(400).json({ error: 'Email is required' });
    }

    // Create unique filename with timestamp and sanitized email
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const emailSanitized = email.replace(/[^a-zA-Z0-9]/g, '-');
    const filename = `newsletter/${timestamp}-${emailSanitized}.json`;

    // Prepare form data as JSON
    const formData = {
      email: email,
      timestamp: new Date().toISOString(),
      source: source,
    };

    // Save newsletter subscription to Vercel Blob
    const blob = await put(filename, JSON.stringify(formData, null, 2), {
      access: 'public',
      contentType: 'application/json',
    });

    return response.status(200).json({ 
      success: true, 
      url: blob.url 
    });
  } catch (error) {
    console.error('Error saving newsletter subscription:', error);
    return response.status(500).json({ 
      error: 'Failed to save subscription',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

