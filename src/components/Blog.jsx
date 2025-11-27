import { useState } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Verification to Vision (V2V): A Smarter Approach to Hiring",
      date: "1 October 2025",
      excerpt:
        "Discover how our V2V philosophy transforms traditional verification into strategic workforce planning.",
      category: "Verification",
      slug: "verification-to-vision-smarter-approach-hiring",
      fullContent:
        "Recruiters today face multiple challenges, including fake resumes, employment gaps, unverifiable references, and even fraudulent certifications. These issues can slow down the hiring process and create risks for employers. A structured verification process helps identify red flags early, ensuring that only genuine candidates move forward. By addressing these challenges, businesses save time, reduce risks, and hire more confidently.",
      image: "/credence-stirov/images/blog/9.webp",
    },
    {
      id: 2,
      title: "Top 5 Hiring Challenges and How Verification Solves Them",
      date: "1 October 2025",
      excerpt:
        "Learn about common hiring obstacles and how proper verification can overcome them effectively.",
      category: "Structured Hiring",
      slug: "top-5-hiring-challenges-verification-solutions",
      fullContent:
        "Recruiters today face multiple challenges, including fake resumes, employment gaps, unverifiable references, and even fraudulent certifications. These issues can slow down the hiring process and create risks for employers. A structured verification process helps identify red flags early, ensuring that only genuine candidates move forward. By addressing these challenges, businesses save time, reduce risks, and hire more confidently.",
      image: "/credence-stirov/images/blog/8.webp",
    },
    {
      id: 3,
      title: "Why Background Verification Is Essential in Modern Hiring",
      date: "1 October 2025",
      excerpt:
        "Understand the critical role of background checks in today's competitive job market.",
      category: "Verification",
      slug: "why-background-verification-essential-modern-hiring",
      fullContent:
        "In today's competitive job market, background verification has become more than just a formality—it's a necessity. Many candidates exaggerate or even falsify their qualifications, experience, or identity. Without proper screening, organizations risk hiring individuals who may compromise security, performance, or compliance. Background verification helps businesses make informed hiring decisions, protect their reputation, and build a trustworthy workforce.",
      image: "/credence-stirov/images/blog/7.webp",
    },
    {
      id: 4,
      title: "How Pre-Employment Screening Saves Time and Money",
      date: "1 October 2025",
      excerpt:
        "Explore the cost-saving benefits of implementing thorough pre-employment screening processes.",
      category: "Screening",
      slug: "pre-employment-screening-saves-time-money",
      fullContent:
        "Hiring the wrong candidate is expensive—both in time and resources. Recruitment costs, training, and onboarding all add up, and replacing an unsuitable employee can be even more costly. Pre-employment screening acts as a filter to prevent these losses by ensuring that only qualified, authentic candidates are selected. In the long run, verification saves businesses money and improves workforce quality.",
      image: null,
    },
    {
      id: 5,
      title: "Compliance in Hiring: What Every Business Should Know",
      date: "1 October 2025",
      excerpt:
        "Essential compliance guidelines for businesses to avoid legal pitfalls in hiring.",
      category: "Compliance",
      slug: "compliance-hiring-what-every-business-should-know",
      fullContent:
        "Compliance is one of the most overlooked aspects of hiring. From labor laws to data privacy regulations, businesses must ensure that their hiring practices meet legal standards. Background verification helps organizations remain compliant by validating employee information, preventing unlawful practices, and reducing risks of penalties. Staying compliant not only avoids legal trouble but also builds credibility in the market.",
      image: null,
    },
    {
      id: 6,
      title: "How Startups Can Protect Themselves with Background Checks",
      date: "1 October 2025",
      excerpt:
        "Practical verification strategies for startups to mitigate risks while scaling their teams.",
      category: "Startups",
      slug: "how-startups-protect-themselves-background-checks",
      fullContent:
        "For startups, every hire matters. A wrong hiring decision can affect productivity, culture, and even funding. Unfortunately, many startups skip background checks due to cost or time concerns. However, even simple verification checks can protect young businesses from fraud, legal issues, and reputation damage. Affordable and customized verification solutions give startups peace of mind while they scale confidently.",
      image: null,
    },
  ];

  const recentPosts = blogPosts
    .filter((post) => post.id !== selectedPost?.id)
    .slice(0, 3);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  // Debug component to check image paths
  const ImageDebug = ({ src, alt }) => {
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
      console.error(`Failed to load image: ${src}`);
      setHasError(true);
    };

    const handleLoad = () => {
      console.log(`Successfully loaded image: ${src}`);
    };

    if (hasError) {
      return (
        <div className="w-full h-48 bg-red-100 dark:bg-red-900 flex items-center justify-center rounded-2xl">
          <span className="text-red-600 dark:text-red-400 text-sm font-medium">
            Image not found: {src.split("/").pop()}
          </span>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={handleError}
        onLoad={handleLoad}
      />
    );
  };

  // If a post is selected, show the single post view
  if (selectedPost) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBackClick}
              className="flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Posts
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Blog Image - Only show if image exists */}
              {selectedPost.image && (
                <div className="mb-8">
                  <ImageDebug
                    src={selectedPost.image}
                    alt={selectedPost.title}
                  />
                </div>
              )}

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                  {selectedPost.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              {/* Date */}
              <div className="mb-8">
                <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                  {selectedPost.date}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {selectedPost.fullContent}
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this post:
                </h3>
                <div className="flex space-x-4">
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Twitter
                    </span>
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      LinkedIn
                    </span>
                  </button>
                  <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-3 transition-colors duration-300"
                      onClick={() => handlePostClick(post)}
                    >
                      {/* Recent Post Image - Only show if image exists */}
                      {post.image && (
                        <div className="mb-3">
                          <ImageDebug src={post.image} alt={post.title} />
                        </div>
                      )}
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                        {post.title}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {post.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Main blog listing view with horizontal scrolling
  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Blog
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Insights and strategies for smarter hiring and workforce
            verification
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 scrollbar-hide space-x-6 snap-x snap-mandatory">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="flex-shrink-0 w-80 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 hover:scale-105 snap-start group overflow-hidden flex flex-col min-h-[480px]" // Fixed height
              >
                {/* Blog Image - Only show if image exists */}
                {post.image ? (
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <ImageDebug src={post.image} alt={post.title} />
                  </div>
                ) : (
                  // Placeholder for cards without images to maintain same height
                  <div className="h-48 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0l2 2m-2-2l2-2"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        Blog Post
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {post.date}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight line-clamp-2 flex-1">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Continue Reading */}
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    <span>Continue Reading</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {blogPosts.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
