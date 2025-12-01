# EmailJS Templates for Sondr Studios

Copy these templates into your EmailJS dashboard. You'll need to create two separate email templates.

---

## Template 1: Contact Form Submission

**Template Name:** Contact Form Submission  
**Subject:** New Contact Form Submission from {{from_name}}

### HTML Template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px; background-color: #0A0A0A; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                You have received a new message through the Sondr Studios contact form.
              </p>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">From Name:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; text-align: right;">
                    <span style="color: #0A0A0A; font-size: 16px; font-weight: 500;">{{from_name}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; text-align: right;">
                    <a href="mailto:{{from_email}}" style="color: #1A374D; font-size: 16px; text-decoration: none;">{{from_email}}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">To:</strong>
                  </td>
                  <td style="padding: 12px 0; text-align: right;">
                    <span style="color: #0A0A0A; font-size: 16px;">{{to_name}}</span>
                  </td>
                </tr>
              </table>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #1A374D; border-radius: 4px;">
                <h3 style="margin: 0 0 15px 0; color: #0A0A0A; font-size: 18px; font-weight: 600;">Message:</h3>
                <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">{{message}}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                <p style="margin: 0; color: #999999; font-size: 12px; text-align: center;">
                  This email was sent from the Sondr Studios contact form.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Plain Text Template (for email clients that don't support HTML):

```
New Contact Form Submission

You have received a new message through the Sondr Studios contact form.

From Name: {{from_name}}
Email: {{from_email}}
To: {{to_name}}

Message:
{{message}}

---
This email was sent from the Sondr Studios contact form.
```

---

## Template 2: Newsletter Subscription

**Template Name:** Newsletter Subscription  
**Subject:** New Newsletter Subscription: {{email}}

### HTML Template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Newsletter Subscription</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px; background-color: #1A374D; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Newsletter Subscription</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                Someone has subscribed to the Sondr Studios newsletter.
              </p>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; text-align: right;">
                    <a href="mailto:{{email}}" style="color: #1A374D; font-size: 16px; text-decoration: none; font-weight: 500;">{{email}}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Source:</strong>
                  </td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; text-align: right;">
                    <span style="color: #0A0A0A; font-size: 16px;">{{source}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #666666; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Subscription Date:</strong>
                  </td>
                  <td style="padding: 12px 0; text-align: right;">
                    <span style="color: #0A0A0A; font-size: 16px;">{{subscription_date}}</span>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #E9B824; border-radius: 4px; text-align: center;">
                <p style="margin: 0; color: #0A0A0A; font-size: 14px; font-weight: 600;">
                  ✨ New subscriber added to your list!
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
                <p style="margin: 0; color: #999999; font-size: 12px; text-align: center;">
                  This email was sent from the Sondr Studios newsletter subscription form.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Plain Text Template (for email clients that don't support HTML):

```
New Newsletter Subscription

Someone has subscribed to the Sondr Studios newsletter.

Email Address: {{email}}
Source: {{source}}
Subscription Date: {{subscription_date}}

✨ New subscriber added to your list!

---
This email was sent from the Sondr Studios newsletter subscription form.
```

---

## Setup Instructions:

1. **Log into your EmailJS dashboard** at https://dashboard.emailjs.com

2. **Create the Contact Form Template:**
   - Go to "Email Templates" → "Create New Template"
   - Name it: "Contact Form Submission"
   - Set the Subject to: `New Contact Form Submission from {{from_name}}`
   - Copy the HTML template above into the HTML editor
   - Copy the plain text template into the Plain Text editor (optional but recommended)
   - Save the template and **copy the Template ID** (you'll need this for your .env file)

3. **Create the Newsletter Template:**
   - Go to "Email Templates" → "Create New Template"
   - Name it: "Newsletter Subscription"
   - Set the Subject to: `New Newsletter Subscription: {{email}}`
   - Copy the HTML template above into the HTML editor
   - Copy the plain text template into the Plain Text editor (optional but recommended)
   - Save the template and **copy the Template ID** (you'll need this for your .env file)

4. **Set the "To Email" field:**
   - In each template, set the "To Email" field to the email address where you want to receive notifications (e.g., `team@sondrstudios.com`)

5. **Update your .env file:**
   - Add the Template IDs you just copied:
     ```
     VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id_here
     VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id_here
     ```

## Template Variables Reference:

### Contact Form Template Variables:
- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{message}}` - The message content
- `{{to_name}}` - Always "Sondr Studios"

### Newsletter Template Variables:
- `{{email}}` - The subscriber's email address
- `{{source}}` - Where the subscription came from (e.g., "homepage")
- `{{subscription_date}}` - ISO timestamp of when they subscribed

---

**Note:** Make sure your EmailJS service is properly configured and the "To Email" field is set in each template to receive the notifications at your desired email address.

