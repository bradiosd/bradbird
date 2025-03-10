import React, { useState, useEffect } from 'react';
import { Div } from './ui/moving-border';

// MailerLite API configuration
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api/subscribers';
const MAILERLITE_API_KEY = process.env.REACT_APP_MAILERLITE_API_KEY || 'YOUR_API_KEY'; // Use environment variable

const SubscribeWidget: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [modalAnimation, setModalAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: 'Coming Soon!',
    message: 'Thank you for your interest! The newsletter subscription feature is not available yet, but it\'s coming soon.'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setModalContent({
        title: 'Invalid Email',
        message: 'Please enter a valid email address.'
      });
      showModalWithAnimation();
      return;
    }

    setIsSubmitting(true);

    try {
      // Call MailerLite API to add subscriber
      const response = await fetch(MAILERLITE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email: email,
          // You can add more fields if needed
          // fields: {
          //   name: 'Subscriber Name',
          // },
          // groups: ['group_id_here'] // Add to specific group
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show checkmark and success message
        setSubscriptionSuccess(true);
        setModalContent({
          title: 'Thank You!',
          message: 'You have been successfully subscribed to our newsletter.'
        });
        showModalWithAnimation();
      } else {
        // API returned an error
        setModalContent({
          title: 'Subscription Error',
          message: data.message || 'There was an error subscribing to the newsletter. Please try again later.'
        });
        showModalWithAnimation();
      }
    } catch (error) {
      // Network or other error
      setModalContent({
        title: 'Coming Soon!',
        message: 'Thank you for your interest! The newsletter subscription feature is not available yet, but it\'s coming soon.'
      });
      showModalWithAnimation();
    } finally {
      setIsSubmitting(false);
    }
  };

  const showModalWithAnimation = () => {
    setShowModal(true);
    // Trigger animation after a tiny delay to ensure DOM is ready
    setTimeout(() => setModalAnimation(true), 50);
  };

  const closeModal = () => {
    setModalAnimation(false);
    // Wait for animation to complete before hiding modal
    setTimeout(() => setShowModal(false), 300);
  };

  // Reset animation state when modal is closed
  useEffect(() => {
    if (!showModal) {
      setModalAnimation(false);
    }
  }, [showModal]);

  // Test function to manually trigger the modal (for debugging)
  const testModal = () => {
    setModalContent({
      title: 'Test Modal',
      message: 'This is a test of the modal functionality.'
    });
    showModalWithAnimation();
  };

  return (
    <div className='m-5'>
      <Div
        borderRadius="10px"
        className="dark:bg-slate-900 bg-white"
        duration={2000}
        hoverable={true}
      >
        <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg">
          {subscriptionSuccess ? (
            <div className="flex flex-col items-center justify-center py-4">
              {/* Success Checkmark */}
              <div className="w-16 h-16 mb-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                Successfully Subscribed
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Thank you for subscribing to my newsletter!
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                <img src="/newsletter.png" alt="Brad's Weekly Newsletter" className="w-24 h-24 mx-auto" />
              </h3>
              <div className="text-center mb-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <p className="text-gray-700 dark:text-gray-300">
                    Subscribe to our newsletter for technology related insights!
                  </p>
                </p>
              </div>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white text-center focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </>
          )}
        </div>
      </Div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop with fade effect */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${modalAnimation ? 'opacity-70' : 'opacity-0'
              }`}
            onClick={closeModal}
          ></div>

          {/* Modal content with fade-in and slide-up effect */}
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl relative transition-all duration-300 ease-in-out ${modalAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {modalContent.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {modalContent.message}
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeWidget; 