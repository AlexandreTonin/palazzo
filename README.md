# 🏛️ Palazzo - Luxury Real Estate Platform

A modern, elegant real estate platform built with Next.js, featuring property listings, authentication, and a beautiful user interface for luxury properties.

**Frontend Repository**: [palazzo](https://github.com/alexandretonin/palazzo)  
**Backend Repository**: [backend-palazzo](https://github.com/AndreiAlbrecht1/backend-palazzo)

## ✨ Features

### 🏠 Property Management
- **Property Listings**: Browse luxury properties with detailed information
- **Property Details**: Comprehensive property pages with image galleries
- **Interactive Gallery**: Full-screen image viewing with navigation
- **Property Cards**: Responsive card layouts with key property information

### 🔐 Authentication
- User Login and Registration: Due to time constraints, only the forms and backend requests for both login and registration were implemented. No authentication logic is handled within the application.

### 🎨 Design & UX
- **Modern UI**: Clean, luxury-focused design aesthetic
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Custom Components**: UI components built with DaisyUI

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15.5.3
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4.1.13 + DaisyUI 5.1.13
- **Icons**: Lucide React 0.544.0
- **Animations**: Framer Motion 12.23.22
- **HTTP Client**: Axios 1.12.2
- **Utilities**: clsx 2.1.1

### Backend
- **Repository**: [backend-palazzo](https://github.com/AndreiAlbrecht1/backend-palazzo)
- **API URL**: `http://localhost:3333`

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **PostCSS**: Tailwind CSS PostCSS plugin
- **Package Manager**: npm

## 📁 Project Structure

```
palazzo/
├── public/                     # Static assets
│   ├── hero-house.png         # Hero section image
│   ├── login-house.png        # Login page image
│   └── register-house.png     # Register page image
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (auth)/           # Authentication routes group
│   │   │   ├── login/        # Login page
│   │   │   └── register/     # Register page
│   │   ├── (main)/           # Main application routes
│   │   │   ├── imoveis/      # Properties section
│   │   │   │   └── [id]/     # Dynamic property details
│   │   │   ├── contato/      # Contact page
│   │   │   ├── sobre/        # About page
│   │   │   └── visitas/      # Visits page
│   │   ├── globals.css       # Global styles
│   │   └── layout.js         # Root layout
│   ├── components/           # React components
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.js
│   │   │   ├── HeroSection.js
│   │   │   ├── LoginForm.js
│   │   │   ├── RegisterForm.js
│   │   │   ├── PropertiesGrid.js
│   │   │   └── PropertyCard.js
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.js
│   │       ├── FormInput.js
│   │       ├── GoogleLoginButton.js
│   │       └── SocialDivider.js
│   ├── hooks/               # Custom React hooks
│   │   ├── requests/        # API request functions
│   │   ├── useProperties.js # Properties data hook
│   │   └── useProperty.js   # Single property hook
│   └── services/            # External services
│       └── api.js          # Axios API configuration
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 18.0 or higher
- **npm**: 8.0 or higher
- **Backend**: Clone and run [backend-palazzo](https://github.com/AndreiAlbrecht1/backend-palazzo)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alexandretonin/palazzo.git
   cd palazzo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the backend**
   - Clone the backend repository: [backend-palazzo](https://github.com/AndreiAlbrecht1/backend-palazzo)
   - Follow the backend setup instructions
   - Ensure the backend is running on `http://localhost:3333`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🏗️ API Integration

The application connects to the backend API at `http://localhost:3333`.

**Backend Repository**: [backend-palazzo](https://github.com/AndreiAlbrecht1/backend-palazzo)

### Main Endpoints
- `GET /listings` - Get all properties
- `GET /listings/:id` - Get property by ID
- `POST /login` - User login
- `POST /register` - User registration

## 🎨 Design System

### Color Palette
- **Primary**: Black (`#000000`)
- **Secondary**: White (`#FFFFFF`) 
- **Accent**: Gray variations

### Typography
- **Primary Font**: Jeju Myeongjo (Korean serif)
- **Secondary Font**: Against (decorative)

### Components
All components are built with:
- **DaisyUI**: Component framework for Tailwind CSS
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
