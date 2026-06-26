# 🧠 AI Resume Analyzer

> Upload your resume. Get an ATS score. Let AI rewrite your weak bullets. Track every improvement.

A full-stack MERN application powered by Google Gemini AI that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) — with structured parsing, version history, side-by-side diffs, and intelligent bullet rewrites.

---

## ✨ Features

### 🔐 Authentication
- Secure register & login with JWT stored in httpOnly cookies
- Password hashing with bcrypt

### 📄 Resume Upload & Parsing
- PDF upload with multer (memory storage), 5MB limit, PDF-only validation
- Clean text extraction via pdf-parse with scanned/image-only PDF detection
- AI-powered structured parsing — Gemini converts raw text into clean JSON sections (basics, experience, education, skills, projects, certifications)

### 🤖 AI Analysis (Google Gemini)
- **ATS Score** — 0–100 with breakdown across keywords, formatting, impact, and clarity
- **Issues** — 5 prioritized issues with severity levels and actionable fixes
- **Strengths** — 5 evidence-based standout strengths
- **Bullet Rewrites** — 5–10 weak bullets rewritten to be stronger, quantified, and ATS-friendly, each with a rationale
- **Keyword Analysis** — Detects keywords present and notable keywords missing for the target role

### 📁 Version Control
- Every upload and rewrite saved as an immutable version (V1, V2, V3…)
- Apply selected (or all) AI rewrites to create a new version in one click
- Word-level and line-level diff to compare any two versions side by side

### 📊 Dashboard & Insights
- KPI cards with sparklines, score evolution chart, latest resume overview
- Activity feed and version stack
- Average & best scores, score trends, top recurring issues
- Top missing/present keywords and per-resume performance breakdown

### 🛡️ Security & Validation
- Per-user AI rate limiting
- Zod request validation across every route

### 🎨 UI/UX
- Soft-minimal responsive design with Tailwind CSS + shadcn/ui
- Light & Dark mode with theme persistence

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS, shadcn/ui |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| AI | Google Gemini API |
| Auth | JWT, bcrypt, httpOnly cookies |
| File Upload | Multer (memory storage) |
| PDF Parsing | pdf-parse |
| Validation | Zod |
| State Management | TanStack Query (React Query) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Google Gemini API key

### 1. Clone the repository
```bash
git clone https://github.com/GauriSingh23/AI-Resume-Analyzer.git
cd AI-Resume-Analyzer
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-1.5-flash
NODE_ENV=development
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend/AIResumeAnalyzer
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`  
Backend runs on `http://localhost:5000`

---

## 📁 Project Structure

```
ai-resume-analyzer/
├── backend/
│   └── src/
│       ├── config/          # DB and env config
│       ├── middleware/       # Auth, upload, validation, rate limiting
│       ├── models/          # Mongoose models (User, Resume, ResumeVersion, Analysis)
│       ├── routes/          # Express routes
│       ├── services/        # Gemini AI, PDF parsing, diff, structured parser
│       └── utils/           # Error handling, async wrapper, JWT
├── frontend/
│   └── AIResumeAnalyzer/
│       └── src/
│           ├── api/         # API client and endpoint functions
│           ├── components/  # Reusable UI components
│           ├── hooks/       # React Query hooks
│           ├── pages/       # Route-level pages
│           └── context/     # Auth and UI context
```

---

## 📸 Pages Overview

| Page | Description |
|------|-------------|
| `/` | Dashboard with score chart, KPI cards, activity feed |
| `/resumes` | Upload new resume or manage existing ones |
| `/resumes/:id` | Resume detail — versions, analysis, rewrites |
| `/insights` | Score trends, keyword gaps, issue patterns |
| `/versions` | All versions across all resumes with filters |
| `/history` | Chronological event feed of all account activity |

---

## ⚙️ Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `GEMINI_API_KEY` | Google Gemini API key |
| `GEMINI_MODEL` | Gemini model to use (e.g. `gemini-1.5-flash`) |
| `NODE_ENV` | `development` or `production` |

