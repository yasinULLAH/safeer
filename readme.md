<div align="center">

# 🚀 AI-Powered Interactive CV Builder

**The Ultimate Client-Side, AI-Driven Resume Generation Platform**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Puter.js](https://img.shields.io/badge/Puter.js_AI-8E44AD?style=for-the-badge&logo=openai&logoColor=white)](#)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-27AE60?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](#)

</div>

---

## 🌟 Overview

Welcome to the **AI-Powered Interactive CV Builder** — a revolutionary, single-page application that transforms chaotic, unstructured text into a beautifully formatted, enterprise-grade resume in seconds. 

Built for modern professionals, developers, and job seekers, this tool eliminates the tedious process of manual resume formatting. Paste your messy notes, LinkedIn dump, or bullet points into the AI Auto-Build engine, and watch as it intelligently parses, categorizes, and injects your data into a stunning, fully editable UI. 

**Zero databases. Zero server dependencies. 100% Client-Side Privacy.**

### 🎯 What Problem It Solves
Standard CV builders are clunky, require accounts, lock you into monthly subscriptions, or butcher your formatting on export. This application provides a completely free, frictionless, and intelligent workflow that generates pristine High-Resolution Images and perfectly structured Microsoft Word documents natively from the browser.

### 💡 Why It Is Unique
It combines the cutting-edge power of LLMs (via `Puter.js`) with an elegant `contenteditable` DOM architecture. It is essentially a lightweight, AI-infused word processor disguised as a web app.

---

## ✨ Core Features

* **🤖 AI Auto-Build Engine:** Paste any unstructured text. The integrated AI models instantly extract names, contact info, experience, education, and skills into a strictly typed JSON structure, automatically populating the UI.
* **✍️ True WYSIWYG Editing:** Click anywhere on the CV to edit text directly. Add, delete, or modify sections natively without navigating complex form menus.
* **📸 Dynamic Local Image Rendering:** Instantly upload and crop profile pictures using the browser's native `FileReader` API. No server uploads required.
* **📄 High-Fidelity MS Word Export:** A custom-built rendering engine translates the web DOM into a Microsoft Word (`.doc`) compatible format, converting CSS to inline styles, embedding base64 images, and utilizing `urn:schemas-microsoft-com:office:word` namespaces for flawless offline editing.
* **🖼️ High-Res PNG Export:** Leverages `html2canvas` to capture a pixel-perfect, scaled snapshot of the DOM, ensuring text remains sharp for printing.
* **📱 Progressive Web App (PWA):** Fully equipped with a Web App Manifest and Workbox Service Worker for offline availability and native app-like installation.

---

## 🚀 Advanced Capabilities

### Technical Strengths
* **State-Driven UI without Frameworks:** Implements complex state management and UI reactivity purely using Vanilla DOM manipulation, ensuring a blazing-fast footprint.
* **Advanced DOM Cloning & Sanitization:** The MS Word export function creates an isolated clone of the DOM, recursively strips out UI controls (buttons, placeholders), converts image formats to embeddable Base64 strings, and wraps the payload in an Office-compliant XML/HTML schema.
* **Prompt Engineering:** The internal AI prompt is heavily optimized for zero-shot JSON extraction, handling edge cases, inferring missing skill levels, and synthesizing professional summaries on the fly.

### Architecture Design
The project follows a Monolithic Single-File Architecture pattern for the core logic, relying on modern CSS Variables (`:root`) for instant theming and CSS Grid/Flexbox for responsive, print-ready layouts.

---

## 🛠 Tech Stack

* **Frontend Layer:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **AI Integration:** `Puter.js` (Routing queries to `gemini-2.5-flash-lite` / `deepseek-chat`)
* **Canvas Rendering:** `html2canvas` (v1.4.1)
* **PWA Layer:** Workbox (`workbox-window.prod.mjs`)
* **Storage:** 100% Client-side Session (Volatile), File System (Exports)

---

## 📦 Installation Guide

Because this application relies entirely on client-side technologies, setup is incredibly fast.

### Requirements
* A modern web browser (Chrome, Firefox, Safari, Edge).
* A local web server (to avoid CORS issues with Canvas rendering and to enable Service Workers).

### Step-by-step Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/yourusername/interactive-cv-builder.git](https://github.com/yourusername/interactive-cv-builder.git)
    cd interactive-cv-builder
    ```

2.  **Serve Locally**
    You can use any local web server. For example, using Python:
    ```bash
    python -m http.server 8000
    ```
    Or using Node.js (`http-server`):
    ```bash
    npx http-server . -p 8000
    ```

3.  **Launch**
    Open `http://localhost:8000` in your browser.

---

## ⚙️ Configuration

The application is designed to be highly customizable right out of the box.

* **Theme Colors:** Open `index.html` and modify the CSS `:root` variables to instantly re-theme the entire application.
    ```css
    :root {
      --primary-color: #2c3e50;  /* Main Sidebar & Headings */
      --accent-color: #2980b9;   /* Highlights & Links */
      --text-color: #333;        /* Body Text */
    }
    ```
* **AI Configuration:** The AI API target is located in the `<script>` tag. By default, it uses `Puter.js`. You can swap the model (`gemini-2.5-flash-lite`, `deepseek-chat`, etc.) by modifying the `puter.ai.chat()` payload parameters.

---

## 📖 Usage Guide

1.  **Generate via AI (Recommended):**
    * Click the **🤖 AI Auto Build** button in the top right.
    * Paste your raw information, old resume, or a scattered list of achievements.
    * Click **✨ Generate CV** and watch the UI populate automatically.
2.  **Manual Editing:**
    * Hover over any section to reveal `+` (Add) and `×` (Delete) controls.
    * Click any text block to edit it inline like a word processor.
    * Click the profile photo placeholder to upload an image from your device.
3.  **Exporting:**
    * Click **Download High-Res Image** for a ready-to-print PNG file.
    * Click **Download MS Word** for a fully editable `.doc` file containing your photo and text.

---

## 🧠 How It Works (Technical Breakdown)


1.  **Data Ingestion:** User inputs unstructured text into the AI Modal.
2.  **LLM Processing:** A highly restrictive system prompt forces the LLM to return strictly formatted JSON. The app handles regex cleanup to strip markdown code blocks.
3.  **DOM Reconciliation:** The JSON object is parsed, and JS functions iterate through arrays (Experience, Education), dynamically constructing DOM nodes (`document.createElement`) and appending them to the UI, replacing the default placeholder data.
4.  **The MS Word Renderer:** * The app clones the `<div id="cvToExport">`.
    * A cleanup routine removes all functional UI elements (hover buttons, borders).
    * The live `<img src="blob:...">` is drawn to an off-screen `<canvas>`, extracted via `toDataURL("image/png")`, and injected back into the clone to ensure Word can render the image offline.
    * The raw HTML is wrapped in a Microsoft Office VML/XML namespace shell utilizing specialized `@page WordSection1` CSS rules to enforce A4/Legal page boundaries.
    * The final string is converted to a `Blob` with MIME type `application/msword` and pushed to the user.

---

## 🔐 Security Highlights

* **No Backend Storage:** User data is never saved to a database. The app operates entirely in the browser's memory.
* **Isolated Processing:** AI queries are sent over secure HTTPS directly to the API provider. 
* **XSS Mitigation:** Input parsing relies on structural text assignments (`textContent` and controlled `innerHTML` injections) to prevent malicious script execution.

---

## 📈 Performance Highlights

* **Zero Loading Spinners (Post-Load):** Because the app relies on CSS grid/flexbox and Vanilla JS, interactions are bounded only by the device's CPU, resulting in a 60FPS editing experience.
* **Lazy Resource Allocation:** File readers and Canvas contexts are generated just-in-time (JIT) during the export phase, keeping idle memory consumption near zero.

---

## 🎯 Use Cases

* **Job Seekers:** Instantly convert outdated resumes into modern, ATS-friendly formats.
* **Recruiters:** Standardize candidate profiles into a uniform, readable template before presenting to clients.
* **Freelance Writers:** Rapidly prototype CVs for clients using the AI engine to summarize experiences.

---

## 🗂 Project Structure

```text
📁 interactive-cv-builder/
├── 📄 index.html      # Main Application UI, CSS, and JS Logic
├── 📄 sw.js           # Workbox Service Worker for PWA (Implied)
├── 📄 manifest.json   # Web App Manifest for PWA installation (Implied)
└── 📄 favicon.ico     # Application Icon