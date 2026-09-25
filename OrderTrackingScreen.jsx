import { Truck, Clock } from "lucide-react";
import DeliveryTimeline from "./DeliveryTimeline";
import StatusBanner from "./StatusBanner";
import OrderSummary from "./OrderSummary";
import SupportContact from "./SupportContact";
import EmptyState from "./EmptyState";

function formatEta(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export default function OrderTrackingScreen({ order, onReportIssue }) {
  const isDisputed = order.status === "delivered" && order.deliveredConfirmedByCustomer === false;
  const deliveredAt = order.timeline.find((t) => t.stage === "delivered")?.timestamp;

  return (
    <div className="mx-auto min-w-[360px] max-w-[430px] px-4 pb-10 pt-5">
      <header className="mb-5">
        <p className="mb-1 text-xs font-medium text-indigo-600">Track your order</p>
        <h1 className="text-xl font-bold text-gray-900">Order {order.orderId}</h1>

        {order.estimatedDelivery && order.status !== "delivered" ? (
          <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
            <Clock size={14} />
            {order.isDelayed ? "Originally estimated" : "Arriving"} {formatEta(order.estimatedDelivery)}
          </p>
        ) : order.status === "delivered" ? (
          <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
            <Truck size={14} />
            Delivered {formatEta(deliveredAt)}
          </p>
        ) : null}
      </header>

      <div className="space-y-4">
        <StatusBanner order={order} onReportIssue={onReportIssue} />

        {order.status === "tracking_unavailable" ? (
          <EmptyState />
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="mb-4 text-sm font-semibold text-gray-900">Delivery progress</h2>
            <DeliveryTimeline order={order} />
          </div>
        )}

        <OrderSummary order={order} />
        <SupportContact order={order} showReportIssue={isDisputed} onReportIssue={onReportIssue} />
      </div>
    </div>
  );
}
