# NextGenVA React Portfolio: Automation Specialist

A production-ready, professionally designed portfolio for an Automation Virtual Assistant, built with React, Vite, and Tailwind CSS. This project features a futuristic, minimalist aesthetic with interactive elements and is configured for seamless deployment.

## Features

- **Modern Frontend:** React (Hooks), Vite, and Tailwind CSS.
- **Futuristic UI/UX:** A consistent design language featuring a dot-grid background, "glassmorphism" cards, and professional typography.
- **Performance Optimized:** Lazy-loaded images and an optimized build process.
- **Accessible & Interactive:** Semantic HTML, ARIA roles, scroll animations, and an immersive gallery modal.
- **Integrated CTA:** Seamless Calendly pop-up widget integration.
- **Secure Backend:** A pre-configured Node.js/Express server with API rate-limiting to handle contact form submissions securely.

## Local Setup

1.  **Clone & Install:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/your-repo-name.git
    cd your-repo-name
    npm install
    ```

2.  **Environment Variables:**
    - Create a `.env` file in the root directory.
    - Copy the contents of `.env.example` into it and add your personal Calendly URL.

3.  **Run Locally:**
    ```bash
    npm run dev
    ```

## Deployment (Vercel/Render)

1.  Push your code to a GitHub repository.
2.  Connect your repository to Vercel or Render.
3.  Configure the build settings:
    - **Build Command:** `npm run build`
    - **Publish Directory:** `dist`
4.  Add your environment variables (e.g., `VITE_CALENDLY_URL`) in the project's dashboard settings.
