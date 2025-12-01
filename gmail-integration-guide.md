# Gmail Mailing List Integration Guide

This guide shows you how to connect your newsletter email capture to a Gmail sending list.

---

## Option 1: Google Sheets Integration (Recommended - Free & Easy)

This method automatically adds subscriber emails to a Google Sheet, which you can then import into Gmail contacts or use with Google Groups.

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Newsletter Subscribers"
3. Add headers in Row 1:
   - Column A: `Email`
   - Column B: `Source`
   - Column C: `Date`
   - Column D: `Status`
4. Share the sheet (you'll need the share link later)

### Step 2: Create Google Apps Script Web App

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add new row with email, source, date, and status
    sheet.appendRow([
      data.email || '',
      data.source || 'unknown',
      new Date().toISOString(),
      'Active'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Newsletter subscription endpoint is active')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Click **Deploy → New Deployment**
4. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
5. Set:
   - **Description**: Newsletter Subscription API
   - **Execute as**: Me
   - **Who has access**: Anyone
6. Click **Deploy**
7. **Copy the Web App URL** - you'll need this for your code

### Step 3: Update Your Code

The code will be updated to send to both EmailJS (for notifications) and Google Sheets (for the mailing list).

---

## Option 2: Direct Gmail Contacts API (Advanced)

This requires Google Cloud setup and OAuth, but directly adds contacts to Gmail.

### Requirements:
- Google Cloud Project
- Gmail API enabled
- OAuth 2.0 credentials

**Note:** This is more complex and requires server-side code for security.

---

## Option 3: EmailJS + Automation Service (Zapier/Make.com)

1. Use EmailJS to send subscription emails
2. Set up Zapier or Make.com automation:
   - Trigger: New email from EmailJS
   - Action: Add to Google Contacts or Google Sheet

---

## Option 4: Mailchimp/ConvertKit Integration

Use a dedicated email marketing service that integrates with Gmail:

1. Sign up for Mailchimp (free tier available) or ConvertKit
2. Get API key
3. Update code to use their API instead of/in addition to EmailJS

---

## Recommended Approach

**I recommend Option 1 (Google Sheets)** because:
- ✅ Free
- ✅ Easy to set up
- ✅ Can import to Gmail contacts anytime
- ✅ Can use with Google Groups for mass emails
- ✅ Keeps a backup list
- ✅ Can export to CSV for other services

Would you like me to update your code to integrate with Google Sheets? I'll modify the newsletter subscription handler to send data to both EmailJS (for notifications) and Google Sheets (for the mailing list).

