import { Phone, Mail, MessageCircle, ChevronRight, AlertOctagon } from "lucide-react";

export default function SupportContact({ order, showReportIssue, onReportIssue }) {
  const options = [
    { icon: MessageCircle, label: "Chat with us", sub: "Fastest response", href: order.support.chatUrl },
    { icon: Phone, label: "Call support", sub: order.support.phone, href: `tel:${order.support.phone}` },
    { icon: Mail, label: "Email us", sub: order.support.email, href: `mailto:${order.support.email}` },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <h2 className="mb-3 text-sm font-semibold text-gray-900">Need help?</h2>
      <div className="space-y-1">
        {options.map(({ icon: Icon, label, sub, href }) => (
          <a
            key={label}
            href={href}
            className="-mx-2 flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-gray-50 active:bg-gray-100"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <Icon size={16} />
            </span>
            <span className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{label}</p>
              <p className="truncate text-xs text-gray-500">{sub}</p>
            </span>
            <ChevronRight size={16} className="shrink-0 text-gray-300" />
          </a>
        ))}

        {showReportIssue && (
          <button
            onClick={onReportIssue}
            className="-mx-2 flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-red-50 active:bg-red-100"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
              <AlertOctagon size={16} />
            </span>
            <span className="min-w-0 flex-1">
              <p className="text-sm font-medium text-red-700">Report a delivery issue</p>
              <p className="text-xs text-gray-500">Missing, damaged, or wrong item</p>
            </span>
            <ChevronRight size={16} className="shrink-0 text-gray-300" />
          </button>
        )}
      </div>
    </div>
  );
}
