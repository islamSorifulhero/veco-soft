import { Package, Truck, MapPin, CheckCircle2 } from "lucide-react";
import { STAGES } from "../mockData";

const stageIcons = {
  processing: Package,
  shipped: Truck,
  out_for_delivery: MapPin,
  delivered: CheckCircle2,
};

const stageLabels = {
  processing: "Processing",
  shipped: "Shipped",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
};

function formatTime(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function DeliveryTimeline({ order }) {
  const currentIndex = STAGES.indexOf(order.status);
  const byStage = Object.fromEntries(order.timeline.map((t) => [t.stage, t]));

  return (
    <ol>
      {STAGES.map((stage, i) => {
        const Icon = stageIcons[stage];
        const entry = byStage[stage];
        const isDone = i <= currentIndex;
        const isCurrent = i === currentIndex;
        const isLast = i === STAGES.length - 1;

        return (
          <li key={stage} className="relative pb-8 last:pb-0">
            {!isLast && (
              <span
                className={`absolute left-[15px] top-8 bottom-0 w-0.5 ${
                  i < currentIndex ? "bg-indigo-500" : "bg-gray-200"
                }`}
                aria-hidden="true"
              />
            )}
            <div className="relative flex items-start gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-4 ring-white ${
                  isDone
                    ? isCurrent && order.isDelayed
                      ? "bg-amber-500 text-white"
                      : "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <Icon size={16} strokeWidth={2.25} />
              </span>
              <div className="min-w-0 pt-1">
                <p className={`text-sm font-medium ${isDone ? "text-gray-900" : "text-gray-400"}`}>
                  {entry?.label || stageLabels[stage]}
                </p>
                {entry?.timestamp && (
                  <p className="mt-0.5 text-xs text-gray-500">{formatTime(entry.timestamp)}</p>
                )}
                {isCurrent && !entry?.timestamp && stage !== "delivered" && (
                  <p className="mt-0.5 text-xs text-gray-400">In progress</p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
