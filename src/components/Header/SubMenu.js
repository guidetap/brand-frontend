import React from 'react';

export default () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
    <div className="rounded-lg shadow-lg">
      <div className="rounded-lg shadow-xs overflow-hidden">
        <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <a
            href="https://google.com"
            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
          >
            {/* Heroicon name: support  */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="space-y-1">
              <p className="text-base leading-6 font-medium text-gray-900">
                Help Center
              </p>
              <p className="text-sm leading-5 text-gray-500">
                Get all of your questions answered in our forums or
                contact support.
              </p>
            </div>
          </a>
          <a
            href="https://google.com"
            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
          >
            {/* Heroicon name: bookmark-alt  */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="space-y-1">
              <p className="text-base leading-6 font-medium text-gray-900">
                Guides
              </p>
              <p className="text-sm leading-5 text-gray-500">
                Learn how to maximize our platform to get the most out
                of it.
              </p>
            </div>
          </a>
          <a
            href="https://google.com"
            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
          >
            {/* Heroicon name: calendar  */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div className="space-y-1">
              <p className="text-base leading-6 font-medium text-gray-900">
                Events
              </p>
              <p className="text-sm leading-5 text-gray-500">
                See what meet-ups and other events we might be planning
                near you.
              </p>
            </div>
          </a>
          <a
            href="https://google.com"
            className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
          >
            {/* Heroicon name: shield-check  */}
            <svg
              className="flex-shrink-0 h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div className="space-y-1">
              <p className="text-base leading-6 font-medium text-gray-900">
                Security
              </p>
              <p className="text-sm leading-5 text-gray-500">
                Understand how we take your privacy seriously.
              </p>
            </div>
          </a>
        </div>
        <div className="px-5 py-5 bg-gray-50 space-y-5 sm:px-8 sm:py-8">
          <div className="space-y-4">
            <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              <li className="text-base leading-6 truncate">
                <a
                  href="https://google.com"
                  className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Boost your conversion rate
                </a>
              </li>
              <li className="text-base leading-6 truncate">
                <a
                  href="https://google.com"
                  className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  How to use search engine optimization to drive traffic
                  to your site
                </a>
              </li>
              <li className="text-base leading-6 truncate">
                <a
                  href="https://google.com"
                  className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                >
                  Improve your customer experience
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm leading-5">
            <a
              href="https://google.com"
              className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
            >
              View all posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
