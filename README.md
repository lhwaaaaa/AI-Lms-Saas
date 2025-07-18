📚 AI LMS SaaS

An AI-powered Learning Management System (LMS) built with Next.js 14, Clerk Auth, TailwindCSS, Supabase, ShadCN UI, and Vapi SDK. This platform helps users learn interactively by chatting with AI-driven learning companions tailored to specific subjects and topics.

🚀 Live Demo

🔗 Click here to try it out : https://ai-lms-saas-69k8-mehtaab11s-projects.vercel.app/ 

🌟 Features

🎓 AI Companions per subject and topic

💬 Real-time chat interface using Vapi SDK

🔐 Secure authentication with Clerk

🔖 Bookmark and revisit your favorite companions

📊 Track recently completed sessions

📱 Responsive and clean UI with TailwindCSS & ShadCN

🧠 Smart companion configuration with overrides

📦 Supabase database integration with row-level security

📦 Tech Stack

Framework: Next.js 14 (App Router)

Styling: TailwindCSS + ShadCN UI

Auth: Clerk

Database: Supabase

AI API: Vapi SDK

State Management: Server Components + Edge Functions

🛠️ Setup Instructions

Clone the Repository

git clone https://github.com/Mehtaab11/AI-Lms-Saas.git
cd AI-Lms-Saas

Install Dependencies

npm install
# or
yarn

Set up Environment Variables
Create a .env.local file and add your credentials:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here

NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_key

VAPI_KEY=your_api_key_here

Run the Development Server

npm run dev
# or
yarn dev

🧠 Setting Up Vapi SDK

Get Your Web API Key from Vapi Dashboard.

Create a Configuration DTO
This defines how your assistant should behave (subject, topic, style).

Use Assistant Overrides

const assistantOverrides = {
  variableValues: {
    subject, topic, style
  },
  clientMessages: ['transcript'],
  serverMessages: [],
};

Plug It In to your assistant initialization logic.

💡 How to Preview Markdown in VS Code

Install the built-in extension: Markdown: Open Preview (Ctrl+Shift+V).

Alternatively, use Markdown Preview Enhanced for advanced rendering.

🤝 Contributing

Pull requests are welcome. If you’d like to improve something, feel free to fork and PR!

Crafted with ❤️ by Mehtaab Aalam


# 📘 Vapi Assistant Setup Guide

This guide walks you through setting up and customizing your Vapi Assistant using the Web API.

---

## 🚀 Getting Started

### 1. 🔑 Get Your Web API Key

Head over to the [Vapi Dashboard](https://docs.vapi.ai) and retrieve your **Web API Key**.
You'll need this to authenticate your assistant.

---

## ⚙️ Create Configuration DTO

The Configuration DTO (Data Transfer Object) defines the assistant's core setup and personality.

```ts
const config = {
  assistantId: 'your-assistant-id',
  apiKey: 'your-api-key',
  conversationType: 'educational', // Customize: 'support', 'sales', etc.
  language: 'en',
  voice: 'default',
};
```

> 💡 This sets the tone, language, and type of conversation for your assistant.

---

## 🛠️ Provide Assistant Overrides

Use `assistantOverrides` to dynamically tailor the assistant’s responses based on user input or context.

```ts
const assistantOverrides = {
  variableValues: {
    subject: 'Math',
    topic: 'Algebra',
    style: 'friendly',
  },
  clientMessages: ['transcript'], // Messages from user
  serverMessages: [],             // Optional messages from system
};
```

> ✅ Great for adjusting tone, topic, or scope at runtime.

---

## 🧪 Use the Assistant

Pass both the configuration and the overrides when starting a conversation:

```ts
vapi.startConversation({
  config,
  assistantOverrides,
});
```

Your assistant is now set up and ready to respond contextually!

---


## 📎 Notes

* Ensure your API key is kept **private** and not exposed in public repos.
* Adjust `variableValues` to fit the assistant’s use case (e.g., customer support, educational, sales).

---

Feel free to fork, clone, and customize your assistant as needed!
