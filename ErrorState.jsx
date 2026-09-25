import { WifiOff, RotateCw } from "lucide-react";

export default function ErrorState({ onRetry }) {
  return (
    <div className="mx-auto flex min-w-[360px] max-w-[430px] flex-col items-center px-4 pb-10 pt-16 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
        <WifiOff size={24} />
      </span>
      <p className="text-base font-semibold text-gray-900">Couldn't load tracking</p>
      <p className="mt-1 max-w-[260px] text-sm text-gray-500">
        Something went wrong on our end. Check your connection and try again.
      </p>
      <button
        onClick={onRetry}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
      >
        <RotateCw size={15} />
        Try again
      </button>
    </div>
  );
}
