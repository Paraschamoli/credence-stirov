import { useState, useEffect, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Footer from './components/Footer'
import { LazyBlog, LazyAbout, LazyContact, LazyTestimonials } from './utils/lazyComponents'

// Enhanced Loading component with better UX
const LoadingSpinner = ({ componentName = "content" }) => (
  <div className="flex flex-col justify-center items-center py-20 px-4">
    <div className="relative">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-ping"></div>
    </div>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-medium">
      Loading {componentName}...
    </p>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 text-center max-w-md">
      Please wait while we prepare the best content for you
    </p>
  </div>
)

// Error Boundary Fallback
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
      <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
      Something went wrong
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
      We're having trouble loading this section. This might be a temporary issue.
    </p>
    <button
      onClick={resetErrorBoundary}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Try Again
    </button>
  </div>
)

// Custom Suspense wrapper with error handling
const SuspenseWrapper = ({ children, componentName, fallback }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      console.error(`Error in ${componentName}:`, error);
    }
  }, [error, componentName]);

  const resetError = () => {
    setError(null);
    // Force re-render of the lazy component
    window.location.reload();
  };

  if (error) {
    return <ErrorFallback error={error} resetErrorBoundary={resetError} />;
  }

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check system preference or saved theme
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Apply dark mode class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header 
        darkMode={darkMode} 
        toggleTheme={() => setDarkMode(!darkMode)} 
      />
      
      {/* Hero Section - No suspense as it's critical above-fold content */}
      <Hero />
      
      {/* About Section */}
      <section id="about">
        <SuspenseWrapper 
          componentName="About Section"
          fallback={<LoadingSpinner componentName="about information" />}
        >
          <LazyAbout />
        </SuspenseWrapper>
      </section>
      
      {/* Services Section - Critical content, loaded eagerly */}
      <Services />
      
      {/* Process Section - Critical content, loaded eagerly */}
      <Process />
      
      {/* Testimonials Section */}
      <section id="testimonials">
        <SuspenseWrapper 
          componentName="Testimonials Section"
          fallback={<LoadingSpinner componentName="customer testimonials" />}
        >
          <LazyTestimonials />
        </SuspenseWrapper>
      </section>
      
      {/* Blog Section */}
      <section id="blog">
        <SuspenseWrapper 
          componentName="Blog Section"
          fallback={<LoadingSpinner componentName="blog posts" />}
        >
          <LazyBlog />
        </SuspenseWrapper>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <SuspenseWrapper 
          componentName="Contact Section"
          fallback={<LoadingSpinner componentName="contact form" />}
        >
          <LazyContact />
        </SuspenseWrapper>
      </section>
      
      {/* Footer - Critical content, loaded eagerly */}
      <Footer />
    </div>
  )
}

export default App