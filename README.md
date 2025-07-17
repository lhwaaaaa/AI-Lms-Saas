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
