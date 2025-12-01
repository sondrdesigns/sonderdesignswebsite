# Vercel Environment Variables Setup

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables:

1. **VITE_EMAILJS_SERVICE_ID**
   - Value: `service_as8dqap`

2. **VITE_EMAILJS_PUBLIC_KEY**
   - Value: `GqL3vQDVOhyJeb49X`

3. **VITE_EMAILJS_TEMPLATE_ID**
   - Value: `template_pvgfdu6`

---

## How to Add Environment Variables in Vercel:

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. For each variable:
   - **Name**: Enter the variable name (e.g., `VITE_EMAILJS_SERVICE_ID`)
   - **Value**: Enter the value (e.g., `service_as8dqap`)
   - **Environment**: Select all environments (Production, Preview, Development)
   - Click **Save**

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Add each environment variable
vercel env add VITE_EMAILJS_SERVICE_ID
# Enter: service_as8dqap
# Select: Production, Preview, Development

vercel env add VITE_EMAILJS_PUBLIC_KEY
# Enter: GqL3vQDVOhyJeb49X
# Select: Production, Preview, Development

vercel env add VITE_EMAILJS_TEMPLATE_ID
# Enter: template_pvgfdu6
# Select: Production, Preview, Development
```

---

## Quick Copy-Paste List for Vercel Dashboard:

| Variable Name | Value |
|--------------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_as8dqap` |
| `VITE_EMAILJS_PUBLIC_KEY` | `GqL3vQDVOhyJeb49X` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_pvgfdu6` |

---

## Important Notes:

1. **VITE_ prefix is required**: Since you're using Vite, all environment variables that need to be accessible in the browser must start with `VITE_`

2. **Redeploy after adding variables**: After adding environment variables, you need to redeploy your project for the changes to take effect:
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on the latest deployment
   - Click **Redeploy**

3. **Environment selection**: Make sure to add the variables to all environments (Production, Preview, Development) so they work in all deployment types

4. **Security**: These are public keys that will be exposed in your client-side code. This is normal for EmailJS - the public key is meant to be public. However, never expose private keys or API secrets in client-side code.

---

## Verification:

After setting up the environment variables and redeploying:

1. Visit your deployed site
2. Open browser DevTools (F12) → Console
3. You should see: `✅ EmailJS initialized successfully`
4. Test the contact form
5. Check your email inbox for notifications

---

## Troubleshooting:

If you see errors in the console:
- Make sure all variable names start with `VITE_`
- Verify the values are correct (no extra spaces)
- Ensure you've redeployed after adding the variables
- Check that variables are added to the correct environment (Production/Preview/Development)

