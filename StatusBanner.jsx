import { AlertTriangle, PackageSearch, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function StatusBanner({ order, onReportIssue }) {
  if (order.status === "tracking_unavailable") {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-100 p-4">
        <PackageSearch className="mt-0.5 shrink-0 text-slate-500" size={20} />
        <div>
          <p className="text-sm font-semibold text-slate-800">Tracking isn't available yet</p>
          <p className="mt-1 text-sm text-slate-600">
            We've received your order and will show live tracking as soon as the carrier
            updates it — usually within 24 hours of shipping.
          </p>
        </div>
      </div>
    );
  }

  if (order.status === "delivered" && order.deliveredConfirmedByCustomer === false) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4">
        <ShieldAlert className="mt-0.5 shrink-0 text-red-500" size={20} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-red-800">Marked delivered, but you reported it missing</p>
          <p className="mt-1 text-sm text-red-700">
            We're sorry about this. Check nearby entrances or with neighbors first — if
            it's still missing, report it and we'll investigate right away.
          </p>
          <button
            onClick={onReportIssue}
            className="mt-3 text-sm font-semibold text-red-700 underline underline-offset-2"
          >
            Report missing package
          </button>
        </div>
      </div>
    );
  }

  if (order.isDelayed) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <AlertTriangle className="mt-0.5 shrink-0 text-amber-500" size={20} />
        <div>
          <p className="text-sm font-semibold text-amber-800">Your delivery is running late</p>
          <p className="mt-1 text-sm text-amber-700">
            It's past the original estimate. The carrier hasn't reported an issue yet —
            we'll notify you the moment it moves. Thanks for your patience.
          </p>
        </div>
      </div>
    );
  }

  if (order.status === "delivered") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <CheckCircle2 className="shrink-0 text-emerald-500" size={20} />
        <p className="text-sm font-semibold text-emerald-800">Delivered — enjoy your order!</p>
      </div>
    );
  }

  return null;
}
