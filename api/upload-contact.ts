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
    const { name, email, message } = request.body;

    // Validate required fields
    if (!name || typeof name !== 'string') {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!email || typeof email !== 'string') {
      return response.status(400).json({ error: 'Email is required' });
    }
    if (!message || typeof message !== 'string') {
      return response.status(400).json({ error: 'Message is required' });
    }

    // Create unique filename with timestamp and sanitized name
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const nameSanitized = name.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 50);
    const filename = `contacts/${timestamp}-${nameSanitized}.json`;

    // Prepare form data as JSON
    const submissionData = {
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString(),
    };

    // Save contact form submission to Vercel Blob
    const blob = await put(filename, JSON.stringify(submissionData, null, 2), {
      access: 'public',
      contentType: 'application/json',
    });

    return response.status(200).json({ 
      success: true, 
      url: blob.url 
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    return response.status(500).json({ 
      error: 'Failed to save contact form',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

