import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from "react-router-dom"

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

import React from 'react'

const ClerkProviderWithRoutes = ({children}) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>{children}</BrowserRouter>
    </ClerkProvider>
  )
}

export default ClerkProviderWithRoutes
