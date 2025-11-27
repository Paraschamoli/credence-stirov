import { useState, useEffect, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Footer from './components/Footer'
import { LazyBlog, LazyAbout, LazyContact, LazyTestimonials } from './utils/lazyComponents'

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <LazyAbout />
      </Suspense>
      
      <Services />
      <Process />
      
      <Suspense fallback={<LoadingSpinner />}>
        <LazyTestimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <LazyBlog />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <LazyContact />
      </Suspense>
      
      <Footer />
    </div>
  )
}

export default App