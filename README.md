# O3Gen AI Realty - Frontend Internship Assignment

![O3Gen AI Realty](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)

> A modern, responsive single-page real estate application built with React + Vite and Tailwind CSS.

## 🔗 Live Demo
**[View Live Deployment](https://o3gen.vercel.app/)**

---

## 📋 Assignment Overview
This project was developed as part of the frontend internship selection process for **O3Gen AI**. [cite_start]The goal was to build a visually clean, modern, and interactive single-page website for a real estate company[cite: 6, 9].

### Key Features Implemented:
* [cite_start]**Single Page Architecture (SPA):** All content exists on one page with smooth section-based navigation[cite: 47].
* [cite_start]**Responsive Design:** Fully optimized layouts for Desktop, Tablet, and Mobile devices[cite: 49].
* [cite_start]**Hero Section:** Immersive background with a clear headline and Call-to-Action (CTA)[cite: 25, 28].
* [cite_start]**Service Showcase:** Displaying 9 key real estate services using a grid layout[cite: 30].
* [cite_start]**Property Listings:** A responsive grid featuring 6 property cards with high-quality imagery[cite: 31].
* **Interactive Elements:**
    * [cite_start]Smooth scrolling navigation[cite: 24].
    * [cite_start]Marquee animation for announcements[cite: 39].
    * [cite_start]Fade-in scroll animations for a polished user experience[cite: 36].
    * Glassmorphism effects on the Navbar.
* **Lead Generation:** A functional "Request Consultation" form integrated before the footer.

---

## 🛠️ Tech Stack
* **Framework:** React + Vite (for high performance and fast HMR).
* **Styling:** Tailwind CSS (for responsive, utility-first design).
* **Icons:** Lucide React (lightweight, consistent SVG icons).
* **State Management:** React Hooks (`useState`, `useEffect`).
* **Deployment:** Vercel.


---

## 🚀 How to Run Locally

If you wish to run this project on your local machine, follow these steps:

1.  **Clone the repository** (or download source):
    ```bash
    git clone (https://github.com/mandaldhruv/o3gen.git)
    cd o3gen-realty
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173`.

---

## 📂 Project Structure

src/ ├── components/ │ ├── Navbar.jsx # Sticky, responsive navigation with glass effect │ ├── Hero.jsx # Hero section with parallax-style background │ ├── Services.jsx # Grid of 9 services with hover effects │ ├── Properties.jsx # Property listing grid │ └── Contact.jsx # Lead generation form ├── App.jsx # Main layout assembler ├── index.css # Global styles & Tailwind directives └── main.jsx # Entry point


---

## 💡 Implementation Details (For Reviewer)

* **Performance:** Uses Vite for lightning-fast bundling. Images are sourced from Unsplash via CDN for optimization.
* **Smooth Scroll:** implemented via CSS `scroll-behavior: smooth` for native performance rather than heavy JavaScript libraries[cite: 37].
* **Animations:** Custom Tailwind configurations were added for the `marquee` and `fade-in-up` effects to keep the bundle size small[cite: 51].

---

**Author - Dhruv Mandal**
*Focused on clean code, component modularity, and pixel-perfect design.*
