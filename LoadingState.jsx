export default function LoadingState() {
  return (
    <div className="mx-auto min-w-[360px] max-w-[430px] animate-pulse px-4 pb-10 pt-5">
      <div className="mb-2 h-3 w-24 rounded bg-gray-200" />
      <div className="mb-1 h-6 w-40 rounded bg-gray-200" />
      <div className="mb-6 h-3 w-32 rounded bg-gray-200" />
      <div className="space-y-4">
        <div className="h-16 rounded-2xl bg-gray-100" />
        <div className="h-48 rounded-2xl bg-gray-100" />
        <div className="h-24 rounded-2xl bg-gray-100" />
        <div className="h-32 rounded-2xl bg-gray-100" />
      </div>
    </div>
  );
}
