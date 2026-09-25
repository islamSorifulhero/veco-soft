import { PackageSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <PackageSearch size={22} />
      </span>
      <p className="text-sm font-medium text-gray-900">No tracking updates yet</p>
      <p className="mt-1 max-w-[220px] text-xs text-gray-500">
        Your order is confirmed. We'll show step-by-step tracking here once it ships.
      </p>
    </div>
  );
}
