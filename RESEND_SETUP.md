# Resend Email Setup Guide
## Contact Form → Real Email Delivery

---

## How It Works (The Big Picture)

```
Visitor fills form
        ↓
Clicks "Send Message"
        ↓
Browser sends data to Next.js API Route
        ↓
API Route calls Resend API (server-side, key is secret)
        ↓
Resend connects to its SMTP servers
        ↓
Email lands in contact@softwaveinnovation.com
```

**No separate backend. No extra server. Everything runs inside Next.js on Vercel.**

---

## Step-by-Step Plan

---

### STEP 1 — Create Resend Account
> 🙋 **You do this**

1. Go to **https://resend.com**
2. Click **"Sign Up"**
3. Sign up with any Gmail (personal is fine)
4. Verify your email address
5. You're in the dashboard

---

### STEP 2 — Get Your API Key
> 🙋 **You do this**

1. In Resend dashboard → click **"API Keys"** in the left sidebar
2. Click **"Create API Key"**
3. Give it a name: `softwave-production`
4. Permission: **Full Access**
5. Click **"Add"**
6. **Copy the key immediately** — it starts with `re_` and looks like:
   ```
   re_ABC123xxxxxxxxxxxxxxxxxxx
   ```
   ⚠️ You only see it once. Save it somewhere safe (Notepad, password manager).

---

### STEP 3 — Verify Your Domain
> 🙋 **You do this**

This lets emails send FROM `contact@softwaveinnovation.com`
instead of a random Resend address.

1. In Resend dashboard → click **"Domains"** in sidebar
2. Click **"Add Domain"**
3. Type: `softwaveinnovation.com`
4. Resend will show you **3 DNS records** to add (TXT and MX records)
5. Go to wherever your domain is registered (GoDaddy / Namecheap / etc.)
6. Add those DNS records exactly as shown
7. Come back to Resend and click **"Verify"**
8. ✅ Domain verified — usually takes 5–30 minutes

> **Don't have the domain yet?**
> Skip this step for now. During development Resend gives you
> `onboarding@resend.dev` as a temporary from-address. It still works.

---

### STEP 4 — Add API Key to the Project
> 🙋 **You do this** (I'll tell you exactly what to type)

1. In your project folder `E:/softwave website/`
2. Create a file called **`.env.local`** (if it doesn't exist)
3. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
4. Save the file
5. Make sure `.env.local` is in `.gitignore` (it already is by default in Next.js)

⚠️ **Never paste your API key in chat, code files, or anywhere public.**

---

### STEP 5 — I Implement the Code
> 🤖 **Claude does this**

Once you confirm your API key is in `.env.local`, I will:

- [ ] Install the `resend` npm package
- [ ] Create `src/app/api/contact/route.ts` — the API route that calls Resend
- [ ] Update the contact form to POST data to the API route
- [ ] Add loading state while email is sending
- [ ] Add proper error handling if sending fails
- [ ] Test that the build passes

---

### STEP 6 — Test Locally
> 🙋 **You do this** (with my guidance)

1. Run `npm run dev`
2. Open `http://localhost:3000/contact`
3. Fill in the form with your own email
4. Click Send
5. Check `contact@softwaveinnovation.com` inbox
6. ✅ Email received = working perfectly

---

### STEP 7 — Add API Key to Vercel (For Production)
> 🙋 **You do this**

`.env.local` only works locally. For the live site on Vercel:

1. Go to your project on **vercel.com**
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Key: `RESEND_API_KEY`
5. Value: `re_your_actual_key_here`
6. Environment: ✅ Production ✅ Preview ✅ Development
7. Click **Save**
8. **Redeploy** your project (Vercel → Deployments → Redeploy)

---

### STEP 8 — Done ✅
> Live contact form sending real emails.

---

## Full Working Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    VISITOR'S BROWSER                     │
│                                                          │
│   Fills form: Name, Email, Company, Service, Message    │
│                        ↓                                 │
│              Clicks "Send Message"                       │
│                        ↓                                 │
│        fetch POST → /api/contact                         │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│              NEXT.JS SERVER (Vercel Serverless)          │
│                                                          │
│   src/app/api/contact/route.ts                          │
│                                                          │
│   1. Receives form data                                  │
│   2. Validates fields (name, email, message required)   │
│   3. Reads RESEND_API_KEY from environment              │
│   4. Calls resend.emails.send(...)                      │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│                   RESEND SERVERS                         │
│                                                          │
│   Receives the email request                             │
│   Authenticates using your API key                       │
│   Sends email via their SMTP infrastructure              │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│            contact@softwaveinnovation.com                │
│                                                          │
│   📧 New email arrives with:                            │
│      - Sender name & email                              │
│      - Company name                                      │
│      - Service they're interested in                     │
│      - Their message                                     │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│                 BACK TO VISITOR'S BROWSER                │
│                                                          │
│   ✅ "Message Sent!" success screen shown               │
└─────────────────────────────────────────────────────────┘
```

---

## Who Does What — Summary

| Step | Who | What |
|------|-----|-------|
| 1. Create Resend account | 🙋 You | resend.com signup |
| 2. Get API key | 🙋 You | Copy `re_...` key |
| 3. Verify domain | 🙋 You | Add DNS records |
| 4. Add key to `.env.local` | 🙋 You | One line in a file |
| 5. Write the code | 🤖 Claude | API route + form update |
| 6. Test locally | 🙋 You | Send a test email |
| 7. Add key to Vercel | 🙋 You | Vercel dashboard |
| 8. Go live | ✅ Done | Real emails working |

---

## Your Checklist

- [ ] Step 1 — Created Resend account
- [ ] Step 2 — Got API key (saved safely)
- [ ] Step 3 — Domain verified (or skipped for now)
- [ ] Step 4 — Added key to `.env.local`
- [ ] Step 5 — Tell Claude: "API key is ready, implement it"
- [ ] Step 6 — Tested locally
- [ ] Step 7 — Added key to Vercel
- [ ] Step 8 — Live ✅
