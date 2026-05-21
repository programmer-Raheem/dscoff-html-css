# <p align="center"><img src="./assets/images/logo-hero.svg" alt="DSCOFF Racing Logo" width="380"></p>

<p align="center">
  <strong>Where Adrenaline and Asphalt Meet</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Release--Date-Q3%202026-ffcc2a?style=for-the-badge&labelColor=0d1b21" alt="Release Date">
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-549efd?style=for-the-badge&labelColor=0d1b21" alt="Platforms">
  <img src="https://img.shields.io/badge/Token-%24DSC%20Earn-28a745?style=for-the-badge&labelColor=0d1b21" alt="Token DSC">
  <img src="https://img.shields.io/badge/Year-2026-0e4fa3?style=for-the-badge&labelColor=0d1b21" alt="Year">
</p>

---

## 🏎️ About DSCOFF Racing

**DSCOFF Racing** is a high-octane, next-generation mobile racing experience built for adrenaline junkies and gaming enthusiasts. Launching in **2026**, DSCOFF Racing combines breathtaking visuals, precise physics, and an immersive **Drive-to-Earn** ecosystem where players can compete in various thrilling racing modes and earn native **$DSC** tokens.

This repository houses the source code for the **DSCOFF Racing Official Portal**, a premium, high-performance landing page designed to capture the excitement of the track, showcase gameplay, reveal the launch roadmap, and drive player pre-registrations.

---

## ⚡ Main Features of the Portal

The DSCOFF Racing landing page is built to replicate the premium feel of major modern gaming titles, incorporating advanced animations, dynamic layouts, and complete responsiveness:

*   **Cinematic Hero Section:** Features an ambient looping background video overlayed with rich, modern styling, dynamic call-to-actions (CTAs) for Apple App Store and Google Play, and custom chevron scroll indicators.
*   **Dynamic Crossing Ribbons:** An eye-catching promotional ticker with high-contrast, dual-slanted ribbon animations. The stationary ribbon utilizes staggered CSS pulsing animations, while the scrolling marquee utilizes an optimized sliding engine.
*   **Gameplay Video Showcase:** A fully embedded, high-definition YouTube video frame styled with seamless borders and high-shadow card-depth.
*   **Game Modes Carousel:** An interactive, responsive slider showcasing diverse race styles, complete with background overlay gradients and dynamic zoom hover effects:
    *   *Circuit Racing*
    *   *Drift Racing*
    *   *Highway Racing*
    *   *Drag Racing*
    *   *Sprint Racing*
*   **Vehicle Classes Showcase:** A grid-based presentation of the core racing vehicles (Basic, Premium, Sport, and Super Sport). In mobile viewports, this grid automatically morphs into a touch-friendly carousel for an optimal user experience.
*   **Team Section:** Beautiful grid showcasing the core team members (Founder, Game Developer, Technical Artist) with rounded profile photos and styled roles.
*   **Interactive Roadmap:** A clean timeline detailing the major developmental milestones scheduled for **2026 and 2027**.
*   **Premium Footer:** Includes links to the official Wiki, Marketplace, legal/privacy pages, community social media channels (Twitter, Discord, Telegram, Instagram, YouTube, TikTok), and mobile store badges.

---

## 🛠️ Technology Stack

The project is built using modern, light-weight, and highly-optimized front-end technologies:

*   **Core Structure:** HTML5 (Semantic elements, SEO-optimized structure, unique browser test IDs).
*   **Typography:** Google Fonts Integration:
    *   `Orbitron` & `Syncopate` (For high-impact, athletic racing headers)
    *   `Inter` (For clean, highly legible body copy)
    *   `Race Sport` (A premium custom-loaded web font for the authentic racing vibe)
*   **Styling & Layout:** 
    *   Vanilla CSS3 (Responsive layouts, custom variables, layout offsets, fluid transforms, smooth transitions)
    *   Bootstrap 5 (Grid utility classes for structured columns)
*   **Interactions & Sliders:** 
    *   JavaScript (ES6+) & jQuery (DOM manipulation and utility control)
    *   Slick Carousel CDN (Lightweight, hardware-accelerated slider engine)
*   **Icons & Assets:** FontAwesome 6 (For premium UI iconography) and custom SVGs.

---

## 📂 Project Directory Structure

Below is an overview of the repository's files and directory structure:

```text
dscoff/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css       # Bootstrap 5 layout system
│   │   └── main.css                # Custom premium styles & variables
│   ├── fontawesome/                # Local FontAwesome package
│   │   ├── css/
│   │   └── webfonts/
│   ├── images/                     # Graphic resources (SVGs, logos, background artwork)
│   │   ├── logo.svg
│   │   ├── logo-hero.svg
│   │   └── ...
│   ├── js/
│   │   ├── bootstrap.min.js        # Bootstrap helper library
│   │   ├── jquery.min.js           # jQuery core framework
│   │   └── main.js                 # Custom slider & responsive initializations
│   └── web-font/                   # Local fonts (Race Sport)
│       ├── RaceSportRegular.woff
│       └── RaceSportRegular.woff2
├── index.html                      # SEO-optimized landing page structure
└── README.md                       # Repository documentation
```

---

## 🚀 Getting Started & Local Setup

To view and run this project locally, follow these simple steps:

### Prerequisites
You only need a modern web browser (e.g., Chrome, Edge, Safari, Firefox) and a lightweight local server to ensure proper resource rendering (such as local web-fonts, jQuery scripts, and the slick carousel).

### Step-by-Step Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/programmer-Raheem/dscoff-racing.git
    cd dscoff-racing
    ```

2.  **Run with a Local Server:**
    Using a local server ensures that custom fonts and local JS files load correctly without CORS policy restrictions.

    *   **Option A: Python (Recommended & Built-in)**
        ```bash
        # For Python 3.x
        python -m http.server 8000
        ```
        Open your web browser and navigate to `http://localhost:8000`.

    *   **Option B: VS Code Live Server Extension**
        Simply open the project folder in VS Code, right-click on `index.html`, and select **Open with Live Server**.

    *   **Option C: Node.js (http-server)**
        ```bash
        npm install -g http-server
        http-server -p 8000
        ```
        Navigate to `http://localhost:8000`.

---

## 📅 Project Roadmap (2026 - 2027)

*   📅 **May 2026:** Single Player Alpha Version Release.
*   📅 **September 2026:** Single Player Beta Version & Comprehensive Bug Fixing.
*   📅 **November 2026:** Official Release V1.0.0.
*   📅 **March 2027:** Career Mode Release & Multiplayer / Openmap Beta Testing.

---

## 🤝 Community & Support

Get in the driver's seat and join our rapidly growing racing community:

*   🌐 **Official Website:** [DSCOFF Racing](https://dscoffracing.com)
*   ✈️ **Telegram Community:** [@dscoffracing](https://t.me/dscoffracing)
*   🎮 **Discord server:** [DSCOFF Racing Discord](#)
*   🐦 **Twitter/X:** [@DSCOFFRacing](#)

---

<p align="center">
  © 2026 DSCOFF Inc. All rights reserved. Designed for asphalt warriors.
</p>
