import { lazy } from 'react';

// Lazy load your largest components
export const LazyBlog = lazy(() => import('../components/Blog'));
export const LazyAbout = lazy(() => import('../components/About'));
export const LazyContact = lazy(() => import('../components/Contact'));
export const LazyTestimonials = lazy(() => import('../components/Testimonials'));