# 🔐 Clerk Authentication Setup - Quick Reference

## ✅ Installation Complete!

Your app now uses **Clerk** for authentication instead of Firebase. All features working:
- ✅ Email/Password Sign Up
- ✅ Email/Password Sign In
- ✅ Google OAuth
- ✅ User Profile Management
- ✅ Session Management

---

## 🧪 Testing Guide

### **Step 1: Test Sign Up**
1. Go to: `http://localhost:5173/auth`
2. Click **"Sign Up"** tab
3. Enter email and password
4. Click **"Continue"** → Confirm email (if needed)
5. You're now logged in! ✅

### **Step 2: Test Sign In with Google**
1. Go to: `http://localhost:5173/auth`
2. Click **"Sign in with Google"** button
3. You're logged in! ✅

### **Step 3: Test Protected Routes**
- Go to: `http://localhost:5173/dashboard`
- If logged out → Redirected to `/auth`
- If logged in → Shows your dashboard ✅

### **Step 4: Test Sign Out**
- Click **"Sign Out"** button in navbar or dashboard
- You're signed out ✅

---

## 📚 Using Clerk in Your Components

### **Get Current User**
```javascript
import { useUser } from '@clerk/clerk-react'

function MyComponent() {
  const { user, isLoaded } = useUser()

  if (!isLoaded) return <div>Loading...</div>
  if (!user) return <div>Not signed in</div>

  return <h1>Welcome, {user.firstName}!</h1>
}
```

### **Sign Out**
```javascript
import { useClerk } from '@clerk/clerk-react'

function SignOutButton() {
  const { signOut } = useClerk()
  return <button onClick={() => signOut()}>Sign Out</button>
}
```

### **Get Auth Token (for API calls)**
```javascript
import { useAuth } from '@clerk/clerk-react'

async function callMyAPI() {
  const { getToken } = useAuth()
  const token = await getToken()
  
  const response = await fetch('/api/protected', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
```

### **Protect Routes**
```javascript
import ProtectedRoute from './components/ProtectedRoute'

<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

---

## 🔧 Environment Setup

Your `.env` file should have:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...your_key...
```

**Never commit the `.env` file!** It's already in `.gitignore`.

---

## 🚀 Available Routes

| Route | Purpose | Protected? |
|-------|---------|-----------|
| `/` | Home page | ❌ No |
| `/auth` | Sign In / Sign Up | ❌ No |
| `/dashboard` | User Dashboard | ✅ Yes |
| `/profile` | Edit Profile | ✅ Yes |
| `/course-list` | View Courses | ❌ No |
| `/educator/*` | Educator Panel | ❌ No (add protection if needed) |

---

## 🎨 Customizing Clerk UI

All Clerk components accept an `appearance` prop:

```javascript
<SignIn 
  appearance={{
    elements: {
      card: 'shadow-xl rounded-lg',
      formButtonPrimary: 'bg-blue-600 hover:bg-blue-700'
    }
  }}
/>
```

See: https://clerk.com/docs/components/customization/overview

---

## 🐛 Common Issues & Fixes

### **Issue: "Missing Clerk publishable key"**
**Fix:** Make sure `.env` has `VITE_CLERK_PUBLISHABLE_KEY=...`

### **Issue: Clerk UI not loading**
**Fix:** Hard refresh browser: `Ctrl+Shift+R`

### **Issue: User not staying logged in**
**Fix:** Clerk automatically handles sessions. Just refresh the page.

---

## 📖 Learn More

- **Clerk Docs:** https://clerk.com/docs
- **React Integration:** https://clerk.com/docs/references/react/overview
- **API Reference:** https://clerk.com/docs/reference/clerkjs

---

## 💡 Next Steps

1. **Customize Navbar** - Add your logo and branding
2. **Add Role-Based Access** - Educator vs Student permissions
3. **Store User Data** - Save user preferences in MongoDB
4. **API Integration** - Protect your backend routes with Clerk tokens

**Happy coding! 🚀**
