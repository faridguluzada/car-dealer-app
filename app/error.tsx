"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='p-6 max-w-md w-full bg-white rounded-lg shadow-md'>
        <h2 className='text-lg font-semibold text-red-600 mb-4'>
          OPS! Something went wrong!
        </h2>
        <p className='text-gray-700 mb-4'>
          We encountered an unexpected issue. Please try again.
        </p>
        <button
          onClick={reset}
          className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline'
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
