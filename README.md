# FitBite — Frontend

> A modern fitness and nutrition web application. Track your diet, log your workouts, browse healthy recipes, and manage your fitness journey — all in one place.

🔗 **Live Demo:** [ykfitbite.vercel.app](https://ykfitbite.vercel.app)  
🔗 **Backend Repo:** [github.com/YashChaudhari1805/FitBite-Backend](https://github.com/YashChaudhari1805/FitBite-Backend)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 + DaisyUI 5 |
| Routing | React Router DOM 7 |
| HTTP Client | Axios |
| Language | JavaScript (ES2020+) |

---

## Features

- **Authentication** — Register and login with JWT. Session is automatically restored on page load via a stored access token.
- **Subscription Tiers** — Three plans (Basic, Pro, Ultimate). Navigation links and routes are gated per plan. Upgrading updates the database instantly.
- **Recipes** — Browse real recipes fetched from the database. Filter by category (Breakfast, Lunch, Dinner, Snack) with pagination.
- **Workout Tracker** — Follow a structured push-day routine. Log completed exercises to your personal history. View and delete past entries.
- **Diet Tracking** — Live food search powered by the [Open Food Facts API](https://world.openfoodfacts.org/) (free, no API key needed). Tracks calories, protein, carbs and fats for the session.
- **Profile** — View real account data fetched from the backend. Edit age, height, weight and goal via a modal — updates reflect instantly without a page reload.
- **Protected Routes** — Unauthenticated users are redirected to login. Users on a lower plan see an upgrade prompt instead of locked pages.

---

## Project Structure

```
fitbite-react/
├── public/
├── src/
│   ├── api/                  # Axios functions for each resource
│   │   ├── axiosInstance.js  # Configured axios with base URL + auth interceptor
│   │   ├── auth.api.js
│   │   ├── recipe.api.js
│   │   ├── workout.api.js
│   │   └── user.api.js
│   ├── assets/               # Images — logo, hero, subscription tier images
│   ├── components/           # All page and UI components
│   │   ├── Auth.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   ├── Profile.jsx
│   │   ├── Recipes.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── Workout.jsx
│   │   ├── Diet.jsx
│   │   ├── About.jsx
│   │   ├── PriceCard.jsx
│   │   ├── Footer.jsx
│   │   ├── NotFound.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx   # Global auth state — user, login(), logout()
│   ├── utils/
│   │   └── subscriptionAccess.js  # Access control rules per plan
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── vercel.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js >= 20
- The [FitBite backend](https://github.com/YashChaudhari1805/FitBite-Backend) running locally on port 3000

### Installation
```bash
git clone https://github.com/YashChaudhari1805/FitBite-React.git
cd FitBite-React
npm install
```

### Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## Subscription Access Rules

| Page | Guest | Basic | Pro | Ultimate |
|---|---|---|---|---|
| Home | ✅ | ✅ | ✅ | ✅ |
| About | ✅ | ✅ | ✅ | ✅ |
| Recipes | 🔒 Login | ✅ | ✅ | ✅ |
| Workout | 🔒 Login | 🔒 Pro | ✅ | ✅ |
| Profile | 🔒 Login | ✅ | ✅ | ✅ |
| Diet Tracking | 🔒 Login | 🔒 Pro | ✅ | ✅ |

To change which plan unlocks which page, edit `src/utils/subscriptionAccess.js` — everything else reads from it automatically.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Base URL for all API calls. Use `/fitbite` locally, full backend URL in production. |

---

## Deployment

Deployed on **Vercel**. On every push to `main`, Vercel automatically rebuilds and redeploys.

For a new deployment:
1. Import the repo on [vercel.com](https://vercel.com)
2. Add environment variable: `VITE_API_URL` = your backend URL
3. Add `vercel.json` to the repo root (already included) so React Router works on direct URL visits

---

## Author

**Yash Chaudhari**  
Made with ❤️ in Navi Mumbai  
[GitHub](https://github.com/YashChaudhari1805)
