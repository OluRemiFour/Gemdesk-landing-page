# GemDesk Landing Page

This repository contains the source code for the official GemDesk landing page. GemDesk is a high-performance, interactive AI assistant and remote collaboration tool that transforms how you interact with your computer.

## 🚀 How GemDesk Works

GemDesk facilitates secure, low-latency remote collaboration and AI-driven automation in three simple steps:

1.  **Share**: Generate a temporary, secure session code with a single click from the GemDesk desktop app.
2.  **Connect**: Your collaborator or support agent enters the session code on their device to request an encrypted peer-to-peer connection.
3.  **Control**: The host maintains absolute authority—you must manually approve all connection requests and can toggle between **Read-Only** and **Full Control** permissions at any time.

---

## ✨ Key Features

### 🔐 Security-First Remote Control
*   **Direct P2P**: Powered by WebRTC for direct machine-to-machine communication. Your data never touches our servers.
*   **Explicit Permissions**: No hidden access. Every action requires host approval.
*   **Session Isolation**: Session codes are temporary and auto-expire to prevent persistent background access.

### 📺 Visual Clarity for Developers
*   **Low-Latency Video**: Optimized with specialized codecs for crisp text in terminals and code editors.
*   **High Fidelity**: Maintains visual integrity even on low-bandwidth connections.

### 🎙️ Integrated Collaboration
*   **Live Voice**: Built-in microphone support for real-time discussion during pair programming sessions.
*   **Visual Indicators**: Clear status indicators always show when remote control or audio sharing is active.

### 🤖 AI Integration (Alpha)
*   **Screen Analysis**: GemDesk can "see" what is on your screen to help debug code or automate filesystem tasks.
*   **Natural Language**: Execute complex commands like "Open my desktop" or "Create a new React project" via voice or text.

---

## 🛠️ Tech Stack (Landing Page)

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Email Service**: [EmailJS](https://www.emailjs.com/) for bug reporting.

---

## 💻 Local Development

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/OluRemiFour/Gemdesk-landing-page.git
    cd gemdesk-landing
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file with your EmailJS credentials:
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the result.

---
*Built for developers. No marketing fluff. © 2026 GemDesk*
