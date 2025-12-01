# EmailJS Setup - Complete Configuration

## Your EmailJS Credentials

Add these to your `.env` file in the project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_as8dqap
VITE_EMAILJS_PUBLIC_KEY=GqL3vQDVOhyJeb49X
VITE_EMAILJS_TEMPLATE_ID=template_pvgfdu6

# Optional: Separate template for newsletter (if different from contact form)
# If not set, will use VITE_EMAILJS_TEMPLATE_ID for both
VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=template_pvgfdu6
```

## Quick Setup Steps:

1. **Create `.env` file** in the project root (same folder as `package.json`)

2. **Copy the configuration above** into your `.env` file

3. **Set up your EmailJS template** in the EmailJS dashboard:
   - Go to https://dashboard.emailjs.com
   - Open your template `template_pvgfdu6`
   - Make sure the "To Email" field is set to your notification email (e.g., `team@sondrstudios.com`)
   - Use the templates from `emailjs-templates.md` if you haven't set it up yet

4. **Restart your dev server** after creating/updating the `.env` file:
   ```bash
   npm run dev
   ```

## Template Variables Reference:

### For Contact Form (ContactPage.tsx):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - "Sondr Studios"

### For Newsletter Form (HomePage.tsx):
- `{{email}}` - Subscriber's email
- `{{source}}` - "homepage"
- `{{subscription_date}}` - ISO timestamp

## Testing:

1. Test the contact form at `/contact`
2. Test the newsletter subscription on the homepage
3. Check your email inbox for notifications
4. Check the browser console for any errors

---

**Note:** If you want separate templates for contact form and newsletter, create a second template in EmailJS and add its ID to `VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID` in your `.env` file.

