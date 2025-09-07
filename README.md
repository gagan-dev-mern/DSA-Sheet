# DSA Sheet - MERN Stack Learning Platform

A comprehensive Data Structures and Algorithms learning platform built with the MERN stack. This web application helps students systematically track their coding practice journey through structured topics and problems.

![DSA Sheet Dashboard](https://img.shields.io/badge/MERN-Stack-blue) ![Version](https://img.shields.io/badge/version-1.0.0-green) ![License](https://img.shields.io/badge/license-MIT-orange)

## 🚀 Features

- **🔐 User Authentication**: Secure login/register system with JWT tokens
- **📚 Topic Management**: Organized DSA topics (Algorithms, Data Structures, Databases, ML, OS, Networks)
- **✅ Progress Tracking**: Checkbox system to mark completed problems with persistent storage
- **🔗 Resource Links**: Direct access to LeetCode practice, YouTube tutorials, and reference articles
- **📊 Difficulty Levels**: Problems categorized as Easy, Medium, and Hard
- **📈 Dashboard Analytics**: Real-time progress statistics showing completion percentages
- **📱 Responsive Design**: Clean, modern UI optimized for learning
- **💾 Auto-Save**: Progress automatically saved and restored on login

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI Library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Custom styling with gradients

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended)

## 🏁 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/gagan-work-dev/DSA-Sheet-MERN-Application.git
cd DSA-Sheet-MERN-Application
```

### 2. Project Structure Setup

Create the following folder structure:

```
DSA-Sheet-MERN-Application/
├── backend/
├── frontend/
└── README.md
```

## Installation Guide

### Prerequisites
- Node.js
- MongoDB

### Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend  
```bash
cd frontend
npm install
```

### Setup Environment
Create `.env` file in backend folder:
```
MONGODB_URI=mongodb://localhost:27017/dsasheet
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Application

Start MongoDB, then:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```

### Access
Open `http://localhost:3000`