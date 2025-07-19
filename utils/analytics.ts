// Umami Analytics utility functions
declare global {
  interface Window {
    umami: {
      track: (event: string, data?: Record<string, any>) => void;
    };
  }
}

export const umami = {
  // Track custom events
  track: (event: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(event, data);
    }
  },

  // Track blog post interactions
  trackBlogPost: (action: 'open' | 'close', postSlug: string, postTitle: string) => {
    umami.track(`blog-${action}`, { 
      slug: postSlug, 
      title: postTitle 
    });
  },

  // Track navigation clicks
  trackNavigation: (section: string) => {
    umami.track('navigation-click', { target: section });
  },

  // Track contact form interactions
  trackContact: (action: string) => {
    umami.track('contact-interaction', { action });
  }
};

export default umami; 