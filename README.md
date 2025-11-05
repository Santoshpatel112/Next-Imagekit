# 🎥 VideoHub - Next-Gen Video Platform

<div align="center">

![VideoHub Banner](https://img.shields.io/badge/VideoHub-Next--Gen%20Platform-blueviolet?style=for-the-badge&logo=video&logoColor=white)

**A stunning, modern video upload and management platform with glassmorphism UI, real-time features, and seamless user experience**

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![ImageKit](https://img.shields.io/badge/ImageKit-CDN-ff6b6b?style=flat-square)](https://imagekit.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

[🚀 Live Demo](https://your-demo-url.com) • [📖 Documentation](#-documentation) • [🎯 Features](#-features) • [⚡ Quick Start](#-quick-start)

</div>

---

## 🌟 What Makes VideoHub Special

VideoHub isn't just another video platform - it's a **modern, full-stack application** that showcases cutting-edge web development practices with beautiful UI/UX design. Built as a learning project to master **Next.js 15**, **ImageKit CDN**, and modern React patterns.

### 🎯 **Purpose & Learning Goals**

This project was created to:
- **Master Next.js 15** with App Router and Server Components
- **Learn ImageKit integration** for optimized media delivery
- **Implement modern authentication** with NextAuth.js
- **Practice TypeScript** in a real-world application
- **Create beautiful UI** with Tailwind CSS and glassmorphism
- **Build responsive designs** that work across all devices
- **Understand full-stack development** from frontend to database

## ✨ Features

<div align="center">

### 🎨 **Stunning Visual Design**
*Glassmorphism meets modern web aesthetics*

</div>

| Feature | Description | Tech Used |
|---------|-------------|-----------|
| 🌈 **Glassmorphism UI** | Frosted glass effects with backdrop blur | Tailwind CSS + Custom CSS |
| 🎭 **Animated Backgrounds** | Floating blob animations throughout | CSS Keyframes + React |
| ⚡ **Smooth Transitions** | Hover effects, loading states, micro-interactions | Tailwind Transitions |
| 📱 **Responsive Design** | Perfect on desktop, tablet, and mobile | Tailwind Responsive Classes |
| 🎨 **Gradient Themes** | Purple/pink/blue gradient consistency | CSS Custom Properties |

<div align="center">

### 🔐 **Secure Authentication System**
*NextAuth.js powered security*

</div>

| Feature | Description | Implementation |
|---------|-------------|----------------|
| 📝 **User Registration** | Email/password with validation | NextAuth.js + MongoDB |
| 🔑 **Secure Login** | Session-based authentication | JWT + Cookies |
| 🛡️ **Protected Routes** | Route-level access control | Middleware + Session Check |
| 👤 **Session Management** | Persistent login state | NextAuth Session Provider |
| 🚪 **Logout System** | Clean session termination | NextAuth signOut |

<div align="center">

### 📹 **Advanced Video Management**
*ImageKit powered media handling*

</div>

| Feature | Description | Technology |
|---------|-------------|------------|
| 📤 **Drag & Drop Upload** | Intuitive file upload with progress | ImageKit Upload API |
| 🖼️ **Thumbnail Support** | Custom thumbnail upload & display | ImageKit Transformation |
| 📊 **Real-time Progress** | Live upload progress tracking | ImageKit Progress Events |
| 🎬 **Video Library** | Beautiful grid layout with thumbnails | React State + MongoDB |
| 🗑️ **Video Management** | Delete, edit, and organize videos | RESTful API + MongoDB |
| 🎯 **Browse Videos** | Public video discovery page | Server-side Rendering |

<div align="center">

### 🚀 **Technical Excellence**
*Modern full-stack architecture*

</div>

| Feature | Description | Stack |
|---------|-------------|-------|
| ⚡ **Next.js 15** | App Router with Server Components | React 18 + Next.js |
| 🔷 **TypeScript** | Full type safety across the app | TypeScript 5.0 |
| 🎨 **Tailwind CSS** | Utility-first styling system | Tailwind CSS 3.4 |
| 🌐 **ImageKit CDN** | Optimized media delivery | ImageKit API |
| 🗄️ **MongoDB Atlas** | Cloud database with Mongoose | MongoDB + Mongoose |
| 🔒 **NextAuth.js** | Authentication & session management | NextAuth.js 4.24 |

## 🏗️ Tech Stack

<div align="center">

### **Frontend Architecture**

</div>

```mermaid
graph TD
    A[Next.js 15 App Router] --> B[React 18 Server Components]
    A --> C[TypeScript 5.0]
    B --> D[Tailwind CSS 3.4]
    C --> E[Custom Animations]
    D --> F[Glassmorphism UI]
    E --> G[Responsive Design]
```

| Layer | Technology | Purpose | Version |
|-------|------------|---------|---------|
| **Framework** | Next.js | Full-stack React framework | 15.0+ |
| **Language** | TypeScript | Type-safe development | 5.0+ |
| **Styling** | Tailwind CSS | Utility-first CSS framework | 3.4+ |
| **UI Components** | Custom React | Reusable component library | - |
| **Animations** | CSS + Framer Motion | Smooth transitions & effects | - |

<div align="center">

### **Backend & Services**

</div>

```mermaid
graph LR
    A[Next.js API Routes] --> B[NextAuth.js]
    A --> C[MongoDB Atlas]
    A --> D[ImageKit CDN]
    B --> E[JWT Sessions]
    C --> F[Mongoose ODM]
    D --> G[Media Optimization]
```

| Service | Technology | Purpose | Integration |
|---------|------------|---------|-------------|
| **Database** | MongoDB Atlas | Document storage | Mongoose ODM |
| **Authentication** | NextAuth.js | User auth & sessions | JWT + Cookies |
| **Media CDN** | ImageKit | Video/image optimization | Upload API |
| **API** | Next.js API Routes | RESTful endpoints | Server-side logic |
| **Deployment** | Vercel | Hosting & CI/CD | Git integration |

## 📁 Project Architecture

<div align="center">

### **Folder Structure**

</div>

```
📦 videohub/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 Components/               # Reusable UI components
│   │   ├── 🎭 AnimatedBackground.tsx # Floating blob animations
│   │   ├── 📤 Fileupload.tsx        # Drag & drop upload
│   │   ├── 🧭 Navbar.tsx            # Navigation component
│   │   └── 🔧 providers.tsx         # Context providers
│   ├── 📂 api/                      # API endpoints
│   │   ├── 📂 auth/                 # Authentication routes
│   │   │   ├── 📂 [...nextauth]/    # NextAuth.js handler
│   │   │   └── 📂 imagekit-auth/    # ImageKit auth token
│   │   ├── 📂 videos/               # Video CRUD operations
│   │   └── 📂 debug-*/              # Development utilities
│   ├── 📂 browse/                   # Public video discovery
│   │   └── 📄 page.tsx              # Browse videos page
│   ├── 📂 login/                    # Authentication pages
│   │   └── 📄 page.tsx              # Login form
│   ├── 📂 register/                 # User registration
│   │   └── 📄 page.tsx              # Signup form
│   ├── 📂 upload/                   # Video upload flow
│   │   └── 📄 page.tsx              # Upload interface
│   ├── 📂 videos/                   # User video library
│   │   └── 📄 page.tsx              # Personal videos
│   ├── 🎨 globals.css               # Global styles & animations
│   ├── 📄 layout.tsx                # Root layout component
│   └── 📄 page.tsx                  # Landing page
├── 📂 lib/                          # Utility libraries
│   └── 🔧 api-client.ts             # API client helpers
├── 📂 Models/                       # Database schemas
│   ├── 👤 User.ts                   # User model (Mongoose)
│   └── 🎬 Video.ts                  # Video model (Mongoose)
├── 📂 types/                        # TypeScript definitions
│   └── 🎬 video.ts                  # Video type interfaces
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 tsconfig.json                 # TypeScript configuration
└── 📄 .env.local                    # Environment variables
```

<div align="center">

### **Component Hierarchy**

</div>

```mermaid
graph TD
    A[RootLayout] --> B[SessionProvider]
    B --> C[ImageKitProvider]
    C --> D[Page Components]
    D --> E[Navbar]
    D --> F[AnimatedBackground]
    D --> G[Page Content]
    G --> H[FileUpload]
    G --> I[VideoCard]
    G --> J[AuthForms]
```

## 🎨 Design System

<div align="center">

### **Visual Identity**

</div>

```css
/* 🌈 Color Palette */
:root {
  --primary-gradient: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
  --secondary-gradient: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  --background-dark: #0f172a;
  --glass-light: rgba(255, 255, 255, 0.1);
  --glass-medium: rgba(255, 255, 255, 0.2);
}
```

| Element | Style | Implementation |
|---------|-------|----------------|
| 🎭 **Cards** | Glassmorphic design | `bg-white/10 backdrop-blur-xl` |
| 🔘 **Buttons** | Gradient with hover lift | `hover:scale-105 transition-all` |
| 📝 **Inputs** | Transparent with focus rings | `focus:ring-2 ring-purple-500` |
| 🎯 **Icons** | SVG with smooth transitions | `transition-all duration-300` |

<div align="center">

### **Animation Library**

</div>

```css
/* 🎭 Custom Animations */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
  50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
}
```

| Animation | Duration | Purpose | Usage |
|-----------|----------|---------|-------|
| 🌊 **Blob Float** | 7s infinite | Background ambiance | `.animate-blob` |
| ✨ **Fade In** | 0.5s ease-out | Page transitions | `.animate-fade-in` |
| 🎯 **Hover Scale** | 0.3s | Interactive feedback | `hover:scale-105` |
| 💫 **Pulse Glow** | 2s infinite | Loading states | `.animate-pulse-glow` |

## � Applincation Workflow

### User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                         Landing Page (/)                         │
│  • Hero section with animated background                        │
│  • Feature showcase                                             │
│  • CTA: "Get Started" or "Sign In"                             │
└────────────────┬────────────────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
┌──────────────┐   ┌──────────────┐
│   Register   │   │    Login     │
│  (/register) │   │   (/login)   │
└──────┬───────┘   └──────┬───────┘
       │                  │
       └────────┬─────────┘
                │
                ▼
        ┌───────────────┐
        │  Authenticated │
        │     Session    │
        └───────┬────────┘
                │
        ┌───────┴────────┬──────────────┐
        │                │              │
        ▼                ▼              ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│    Upload    │  │   My Videos  │  │     Home     │
│  (/upload)   │  │  (/videos)   │  │      (/)     │
│              │  │              │  │              │
│ • Upload     │  │ • View all   │  │ • Upload CTA │
│   video      │  │   videos     │  │ • Features   │
│ • Add title  │  │ • Play video │  │              │
│ • Add desc   │  │ • Delete     │  │              │
│ • Thumbnail  │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Detailed Workflow Steps

#### 1️⃣ **New User Registration**

```
User visits site → Clicks "Get Started" → Register Page
  ↓
Fills email, password, confirm password
  ↓
Submits form → API validates → Creates user in database
  ↓
Success → Redirects to Login Page
```

#### 2️⃣ **User Login**

```
User enters credentials → Submits form
  ↓
NextAuth validates credentials → Checks database
  ↓
Success → Creates session → Redirects to Home
  ↓
Navbar updates to show user email & "Sign Out"
```

#### 3️⃣ **Video Upload Process**

```
User clicks "Upload Video" → Navigates to /upload
  ↓
Protected Route Check → Session valid? → Proceed
  ↓
User selects video file → FileUpload component triggered
  ↓
File validation (type, size) → Upload to ImageKit
  ↓
Progress bar updates in real-time (0% → 100%)
  ↓
Upload complete → Video URL received
  ↓
User fills title & description → Optional thumbnail upload
  ↓
Clicks "Publish Video" → POST to /api/videos
  ↓
Video metadata saved to database
  ↓
Success animation → Redirects to /videos
```

#### 4️⃣ **Video Management**

```
User navigates to "My Videos" → /videos page
  ↓
Fetches user's videos from API → GET /api/videos
  ↓
Displays in responsive grid with thumbnails
  ↓
User actions:
  • Click video → Opens in modal/player
  • Click delete → Confirmation → DELETE /api/videos/:id
  • Click upload → Redirects to /upload
```

#### 5️⃣ **Session Management**

```
User clicks "Sign Out" → signOut() called
  ↓
Session destroyed → Redirects to Home
  ↓
Navbar updates → Shows "Login" & "Sign Up"
  ↓
Protected routes now redirect to /login
```

### API Endpoints Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      API Routes                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  POST /api/auth/register                                    │
│    ├─ Validates email & password                            │
│    ├─ Hashes password                                       │
│    ├─ Creates user in database                              │
│    └─ Returns success/error                                 │
│                                                              │
│  POST /api/auth/[...nextauth]                               │
│    ├─ Handles login/logout                                  │
│    ├─ Validates credentials                                 │
│    ├─ Creates/destroys session                              │
│    └─ Returns session data                                  │
│                                                              │
│  GET /api/auth/imagekit-auth                                │
│    ├─ Generates ImageKit auth token                         │
│    ├─ Returns signature, token, expire                      │
│    └─ Used for secure uploads                               │
│                                                              │
│  GET /api/videos                                            │
│    ├─ Checks user session                                   │
│    ├─ Fetches user's videos from database                   │
│    └─ Returns video array                                   │
│                                                              │
│  POST /api/videos                                           │
│    ├─ Validates session                                     │
│    ├─ Validates video data                                  │
│    ├─ Saves to database with userId                         │
│    └─ Returns created video                                 │
│                                                              │
│  DELETE /api/videos/:id                                     │
│    ├─ Validates session                                     │
│    ├─ Checks video ownership                                │
│    ├─ Deletes from database                                 │
│    └─ Returns success                                       │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Interaction Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    Component Hierarchy                        │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  RootLayout (app/layout.tsx)                                 │
│    └─ Providers (SessionProvider + ImageKitProvider)         │
│         └─ Page Components                                   │
│              │                                                │
│              ├─ Navbar (on all pages)                        │
│              │    ├─ useSession() → Gets auth state          │
│              │    ├─ Conditional rendering                   │
│              │    └─ Navigation handlers                     │
│              │                                                │
│              ├─ AnimatedBackground (reusable)                │
│              │    └─ Floating blob animations                │
│              │                                                │
│              └─ Page-specific components                     │
│                   │                                           │
│                   ├─ FileUpload (upload page)                │
│                   │    ├─ File validation                    │
│                   │    ├─ ImageKit upload                    │
│                   │    ├─ Progress tracking                  │
│                   │    └─ Success callback                   │
│                   │                                           │
│                   └─ VideoCard (videos page)                 │
│                        ├─ Thumbnail display                  │
│                        ├─ Play handler                       │
│                        └─ Delete handler                     │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    State Flow                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Authentication State (NextAuth Session)                    │
│    • Global across app via SessionProvider                  │
│    • Accessed with useSession() hook                        │
│    • Persisted in cookies                                   │
│                                                              │
│  Upload State (Local Component State)                       │
│    • title, description → Form inputs                       │
│    • videoUrl, thumbnailUrl → Upload results                │
│    • uploadProgress → Real-time tracking                    │
│    • isUploading → Loading state                            │
│    • uploadComplete → Success state                         │
│                                                              │
│  Videos State (Fetched from API)                            │
│    • videos[] → Array of user videos                        │
│    • loading → Fetch state                                  │
│    • error → Error handling                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Example: Video Upload

```
1. User Action
   └─ Selects video file in FileUpload component

2. Client-Side Processing
   ├─ Validate file type (video/*)
   ├─ Validate file size (< 100MB)
   └─ If valid, proceed

3. Authentication Request
   ├─ Fetch /api/auth/imagekit-auth
   └─ Receive: { token, signature, expire }

4. Upload to ImageKit
   ├─ Call ImageKit upload() with auth data
   ├─ Track progress → Update state (0-100%)
   └─ Receive: { url, fileId, ... }

5. Save to Database
   ├─ User fills title & description
   ├─ POST /api/videos with:
   │   { title, description, videoUrl, thumbnailUrl }
   └─ Server validates session & saves

6. UI Update
   ├─ Show success animation
   ├─ Redirect to /videos
   └─ Display new video in grid
```

## ⚡ Quick Start

<div align="center">

### **Get VideoHub running in 5 minutes!**

</div>

### 📋 Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| 🟢 **Node.js** | 18.0+ | Runtime environment |
| 📦 **npm/yarn** | Latest | Package management |
| 🌐 **ImageKit Account** | Free tier | Media CDN & optimization |
| 🗄️ **MongoDB Atlas** | Free tier | Cloud database |

### 🚀 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/videohub.git
cd videohub

# 2️⃣ Install dependencies
npm install
# or
yarn install

# 3️⃣ Set up environment variables (see below)
cp .env.example .env.local

# 4️⃣ Start development server
npm run dev
# or
yarn dev

# 🎉 Open http://localhost:3000
```

### 🔑 API Keys Setup

<div align="center">

**You'll need these free accounts:**

</div>

#### 1️⃣ **ImageKit Setup** (Free CDN)
```bash
# Visit: https://imagekit.io/
# 1. Create free account
# 2. Go to Developer Options
# 3. Copy your credentials
```

#### 2️⃣ **MongoDB Atlas Setup** (Free Database)
```bash
# Visit: https://www.mongodb.com/atlas
# 1. Create free cluster
# 2. Create database user
# 3. Get connection string
```

#### 3️⃣ **Environment Variables**

Create `.env.local` file:

```env
# 🗄️ Database Configuration
MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/videohub"

# 🔐 NextAuth Configuration
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# 📸 ImageKit Configuration (Free CDN)
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="public_your_public_key_here"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_imagekit_id"
IMAGEKIT_PRIVATE_KEY="private_your_private_key_here"

# 🚀 Optional: Production URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

<div align="center">

### **🎯 What You'll Learn**

</div>

| Concept | Implementation | Real-world Application |
|---------|----------------|------------------------|
| 🏗️ **Next.js App Router** | File-based routing, Server Components | Modern React architecture |
| 🔐 **Authentication** | NextAuth.js with sessions | Secure user management |
| 📤 **File Uploads** | ImageKit integration with progress | Media handling at scale |
| 🎨 **Modern UI/UX** | Glassmorphism, animations | Contemporary design trends |
| 📱 **Responsive Design** | Mobile-first approach | Cross-device compatibility |
| 🗄️ **Database Integration** | MongoDB with Mongoose | NoSQL data modeling |
| ⚡ **Performance** | Image optimization, lazy loading | Production-ready optimization |

### 🎬 **ImageKit Integration Deep Dive**

VideoHub uses ImageKit for:

```javascript
// 🔧 Real-time upload progress
const uploadVideo = async (file) => {
  const authResponse = await fetch('/api/auth/imagekit-auth');
  const authData = await authResponse.json();
  
  imagekit.upload({
    file: file,
    fileName: file.name,
    ...authData,
    onUploadProgress: (progress) => {
      setUploadProgress(progress.loaded / progress.total * 100);
    }
  });
};

// 🖼️ Automatic thumbnail generation
const thumbnailUrl = imagekit.url({
  path: videoPath,
  transformation: [{
    height: 300,
    width: 400,
    crop: "maintain_ratio"
  }]
});
```

**Why ImageKit?**
- ✅ **Free tier**: 20GB bandwidth/month
- ✅ **Auto optimization**: Reduces file sizes by 60%+
- ✅ **Global CDN**: Fast delivery worldwide
- ✅ **Real-time transformations**: Resize, crop, format conversion
- ✅ **Upload progress**: Built-in progress tracking

## 📱 Application Pages

<div align="center">

### **User Journey & Page Flow**

</div>

```mermaid
graph TD
    A[🏠 Landing Page] --> B{User Authenticated?}
    B -->|No| C[🔑 Login/Register]
    B -->|Yes| D[📤 Upload Videos]
    C --> E[✅ Authentication Success]
    E --> F[🎬 Personal Videos]
    D --> G[📊 Upload Progress]
    G --> H[🎉 Success Animation]
    H --> I[🌐 Browse All Videos]
    F --> J[▶️ Play/Delete Videos]
    I --> K[🔍 Video Discovery]
```

| Page | Route | Purpose | Features |
|------|-------|---------|----------|
| 🏠 **Landing** | `/` | Welcome & overview | Hero section, features, CTA |
| 🔑 **Login** | `/login` | User authentication | Form validation, loading states |
| 📝 **Register** | `/register` | Account creation | Email validation, password strength |
| 📤 **Upload** | `/upload` | Video publishing | Drag & drop, progress, metadata |
| 🎬 **My Videos** | `/videos` | Personal library | Grid layout, CRUD operations |
| 🌐 **Browse** | `/browse` | Public discovery | Thumbnail grid, play videos |

<div align="center">

### **Page Screenshots & Features**

</div>

#### 🏠 **Landing Page** (`/`)
```
┌─────────────────────────────────────────────────────────────┐
│  🎭 Animated Background + Glassmorphic Hero Section         │
│  ✨ Feature cards with hover effects                        │
│  🎯 Dynamic CTAs based on authentication state              │
│  📱 Fully responsive navigation                             │
└─────────────────────────────────────────────────────────────┘
```

#### 📤 **Upload Page** (`/upload`) - Protected Route
```
┌─────────────────────────────────────────────────────────────┐
│  🛡️ Authentication check (redirects if not logged in)       │
│  📁 Drag & drop video upload with file validation           │
│  📊 Real-time progress bar (0% → 100%)                      │
│  📝 Title, description, and thumbnail fields                │
│  🎉 Success animation → redirect to videos                  │
└─────────────────────────────────────────────────────────────┘
```

#### 🌐 **Browse Videos** (`/browse`) - Public Discovery
```
┌─────────────────────────────────────────────────────────────┐
│  🖼️ Video thumbnails in responsive grid                     │
│  ▶️ Hover play button overlay                               │
│  👤 Uploader info and upload date                           │
│  🔒 Login prompt for unauthenticated users                  │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 Development & Customization

<div align="center">

### **Extend & Customize VideoHub**

</div>

### 🎨 **Theming System**

```css
/* 🌈 Change Color Scheme */
:root {
  /* From purple/pink to blue/green */
  --primary: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
  --secondary: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
}

/* 🎭 Update component classes */
.btn-primary {
  @apply bg-gradient-to-r from-blue-600 to-green-600;
}
```

### 🧩 **Adding New Features**

```typescript
// 📁 Create new pags` and component classes:

```css
/* Change primary gradient */
.bg-gradient-to-r from-purple-600 to-pink-600
/* to */
.bg-gradient-to-r from-blue-600 to-green-600;
```

### Adding New Pages

1. Create folder in `app/`
2. Add `page.tsx`
3. Import `Navbar` and `AnimatedBackground`
4. Follow existing styling patterns

### Modifying Animations

Edit animation keyframes in `app/globals.css`:

```css
@keyframes your-animation {
  /* your keyframes */
}
```

## 📦 Dependencies

### Core

- `next`: ^14.x
- `react`: ^18.x
- `typescript`: ^5.x

### Authentication

- `next-auth`: Authentication
- `@prisma/client`: Database ORM

### Media

- `@imagekit/next`: Image/video optimization

### Styling

- `tailwindcss`: Utility-first CSS
- Custom animations in globals.css

## 🐛 Troubleshooting

### Upload not working

- Check ImageKit credentials
- Verify file size limits
- Check network connection

### Authentication issues

- Verify NEXTAUTH_SECRET is set
- Check database connection
- Clear browser cookies

### Styling issues

- Run `npm run dev` to rebuild
- Check Tailwind configuration
- Verify CSS imports

## 🚀 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Set environment variables on your platform

## 📄 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
