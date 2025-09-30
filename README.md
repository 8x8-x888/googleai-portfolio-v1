# NextGenVA React Portfolio: Automation Specialist

A production-ready, professionally designed portfolio for an Automation Virtual Assistant, built with **React**, **Vite**, and **Tailwind CSS**. This project features a futuristic, minimalist aesthetic with interactive elements and is configured for seamless deployment from GitHub to Render.

## 🚀 Features

*   **Modern Frontend:** React (Hooks), Vite, and Tailwind CSS.
*   **Futuristic UI/UX:** A consistent design language featuring a dot-grid background, "glassmorphism" cards with interactive glowing borders, and professional typography.
*   **Performance Optimized:** Lazy-loaded images and optimized build process via Vite.
*   **Accessible:** Semantic HTML, ARIA roles, and keyboard-navigable components.
*   **Integrated CTA:** Seamless Calendly pop-up widget integration for booking calls.
*   **Optional Secure Backend:** A pre-configured Node.js/Express server for handling contact form submissions securely.
*   **Deployment Ready:** Step-by-step instructions for deploying to Render as a Static Site.

## 🛠️ Prerequisites

*   **Node.js LTS** (v18 or higher)
*   **npm** or **yarn**
*   **Git**

## ⚙️ Local Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/nextgenva-react-portfolio.git
    cd nextgenva-react-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    *   Create a `.env` file in the root directory.
    *   Copy the contents of `.env.example` into it and add your Calendly URL.
        ```
        VITE_CALENDLY_URL="https://calendly.com/YOUR_USERNAME/15min?hide_gdpr_banner=1"
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## ☁️ Deployment to Render (Static Site)

1.  Push your code to a GitHub repository.
2.  Log in to **Render** and click **New → Static Site**.
3.  Connect your GitHub repository.
4.  Configure the settings:
    *   **Name:** `your-portfolio-name`
    *   **Branch:** `main`
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `dist`
5.  Go to the **Environment** tab and add your environment variable:
    *   **Key:** `VITE_CALENDLY_URL`
    *   **Value:** `https://calendly.com/YOUR_USERNAME/15min?hide_gdpr_banner=1`
6.  Click **Create Static Site**.