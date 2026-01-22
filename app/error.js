'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
            <div className="bg-red-50 text-red-800 p-6 rounded-xl max-w-md w-full text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h2 className="text-xl font-bold mb-2">Something went wrong!</h2>
                <p className="text-sm mb-6">{error.message || "We couldn't load the requested data."}</p>
                <button
                    onClick={() => reset()}
                    className="bg-red-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
