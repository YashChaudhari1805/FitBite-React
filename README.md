# FitBite - Modern Fitness Platform

FitBite is a responsive, frontend-focused React application built to serve as the landing page and user portal for a modern fitness and wellness platform. It features a clean, "floating UI" aesthetic using a soothing stone and blue color palette.

## Tech Stack

* **Framework:** React 18 (Bootstrapped with Vite)
* **Styling:** Tailwind CSS + DaisyUI
* **Components:** Functional React Components
* **Icons:** SVG-based inline icons

## Key Features

* **Modern UI/UX:** A responsive, mobile-first design featuring floating containers, soft shadows, and a clean stone/blue color scheme.
* **Dynamic Pricing Grid:** Reusable `<Card />` components that dynamically render pricing, popular badges, and feature checklists using React Props.
* **Component-Driven Architecture:** Highly modular codebase separating the Header, Hero, Cards, and Footer logic for easy maintenance and scalability.

## Project Structure

All primary working files are located in the `src/` directory:

```text
src/
├── assets/            # Local images and branding (e.g., logo)
├── components/        # Reusable React components
│   ├── Card.jsx       # Dynamic pricing/feature card
│   ├── Footer.jsx     # Site footer
│   ├── Header.jsx     # Main navigation bar
│   ├── Hero.jsx       # Landing page hero section
│   └── Home.jsx       # Main landing page assembler
├── App.jsx            # Root component and layout wrapper
├── index.css          # Global Tailwind directives
└── main.jsx           # React entry point
```

## How to install on Local System
1. Clone the repository:
git clone [https://github.com/your-username/fitbite-react.git](https://github.com/YashChaudhari1805/fitbite-react.git)
2. Navigate into the repository
cd fitbite-react
3. Install dependencies
npm install
4. Start developement server
npm run dev
5. Open your browser and visit http://localhost:5173
