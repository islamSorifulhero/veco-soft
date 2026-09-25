import React from 'react';
import { Package } from "lucide-react";

export default function OrderSummary({ order }) {
  const total = order.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Order summary</h2>
        <span className="text-xs text-gray-400">{order.orderId}</span>
      </div>
      <div className="space-y-3">
        {order.items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-300">
              <Package size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-xs text-gray-500">Qty {item.qty}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-sm text-gray-500">Total</span>
        <span className="text-sm font-semibold text-gray-900">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
