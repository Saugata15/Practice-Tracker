# Interview Practice Tracker

A simple and responsive web application to organize interview preparation questions, track learning progress, and manage technical interview practice in one place.

## 🚀 Features

- **Add Questions** — Add interview questions with a title, category, difficulty, and status.
- **Update Questions** — Edit existing questions whenever needed.
- **Delete Questions** — Remove questions you no longer need.
- **Search Questions** — Find questions quickly by title.
- **Filter Questions** — Filter questions by category, difficulty, and completion status.
- **Progress Tracking** — View your preparation progress based on completed questions.
- **Persistent Storage** — Save questions in browser local storage so they remain available after refreshing the page.
- **Responsive UI** — Use the application across desktop, tablet, and mobile screens.
- **Form Validation** — Validate question details using React Hook Form.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Hook Form
- Context API
- Local Storage
- Lucide React
- Nano ID

## 📸 Application Overview

The application helps you organize your interview preparation through a centralized dashboard where you can add, search, filter, update, and delete questions while monitoring your completion progress.

## 💻 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Saugata15/Interview-Practice-Tracker.git
```

**2. Navigate to the project directory**

```bash
cd Interview-Practice-Tracker
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Dashboard.jsx
│   ├── QuestionForm.jsx
│   ├── QuestionList.jsx
│   ├── SearchFilter.jsx
│   └── Progress.jsx
├── context/
│   ├── MyStore.js
│   └── ContextProvider.jsx
├── hooks/
│   └── useReactForm.js
├── utils/
│   └── utils.js
├── App.jsx
└── main.jsx
```

*Note: The structure above is illustrative. Adjust filenames and folders to match your actual project.*

## 📋 Question Categories

Questions can be organized into the following categories:

- DSA
- Git
- Technical

## 🎯 Difficulty Levels

- Easy
- Medium
- Hard

## 📊 Question Status

Track your preparation using three statuses:

- Pending
- In Progress
- Completed

## 💾 Data Persistence

The application uses the browser's `localStorage` to persist question data. Your saved questions remain available after refreshing the page in the same browser.

Since the application uses local storage, data is browser-specific and is not automatically synchronized across devices.

## 🧠 What I Learned

Building this project helped me practice:

- Managing shared state using React Context API.
- Creating reusable React components.
- Building and validating forms with React Hook Form.
- Implementing search and multiple filters with JavaScript array methods.
- Using derived state to calculate progress.
- Persisting application data with `localStorage`.
- Building responsive interfaces with Tailwind CSS.
- Managing CRUD operations in a React application.

## 🔮 Future Improvements

- Add dashboard statistics for different question statuses.
- Add sorting and advanced filtering options.
- Add question notes and reference links.
- Add progress analytics by category and difficulty.
- Add import and export functionality.
- Add backend integration and user authentication.
- Add automated tests.

## 👨‍💻 Author

**Saugata Das**

- GitHub: [@Saugata15](https://github.com/Saugata15)
- Repository: [Practice Tracker](https://github.com/Saugata15/Practice-Tracker)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub!

Built with ❤️ using React.
