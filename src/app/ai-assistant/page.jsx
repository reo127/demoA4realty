'use client';

import { useRouter } from 'next/navigation';

/**
 * AI Property Assistant Page - Coming Soon
 */
export default function AIAssistantPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#D7242A] to-[#ff3d43] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Assistant Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          We're building an intelligent AI-powered assistant to help you find the perfect properties faster and more efficiently.
        </p>

        {/* Features Preview */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
            What to Expect:
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D7242A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Natural language property search</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D7242A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Personalized property recommendations</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D7242A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Instant answers to property queries</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#D7242A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">24/7 availability</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <button
            onClick={() => router.push('/')}
            className="w-full px-6 py-3 bg-[#D7242A] text-white rounded-lg hover:bg-[#D7242A]/90 font-semibold transition-colors"
          >
            Browse Properties
          </button>
          <button
            onClick={() => router.back()}
            className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-8">
          We're working hard to make this feature available soon. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
