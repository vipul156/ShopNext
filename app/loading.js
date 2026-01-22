export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-gray-200"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
            </div>
        </div>
    );
}
