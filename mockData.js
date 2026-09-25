// Canonical status stages, in order
export const STAGES = ["processing", "shipped", "out_for_delivery", "delivered"];

export const mockOrders = {
  // Baseline: normal, in-progress order
  normal: {
    orderId: "ORD-10293",
    status: "out_for_delivery",
    estimatedDelivery: "2026-09-25T18:00:00Z",
    isDelayed: false,
    deliveredConfirmedByCustomer: null,
    timeline: [
      { stage: "processing", timestamp: "2026-09-23T09:12:00Z", label: "Order confirmed" },
      { stage: "shipped", timestamp: "2026-09-23T15:40:00Z", label: "Shipped from warehouse" },
      { stage: "out_for_delivery", timestamp: "2026-09-25T08:05:00Z", label: "Out for delivery" },
      { stage: "delivered", timestamp: null, label: "Delivered" },
    ],
    items: [{ name: "Wireless Earbuds Pro", image: "/mock/earbuds.jpg", qty: 1, price: 79.99 }],
    support: { phone: "+1-800-555-0134", email: "support@shop.com", chatUrl: "#chat" },
  },

  // Edge case 1: Delayed Order
  delayed: {
    orderId: "ORD-10294",
    status: "out_for_delivery",
    estimatedDelivery: "2026-09-24T18:00:00Z", // in the past relative to "now"
    isDelayed: true,
    deliveredConfirmedByCustomer: null,
    timeline: [
      { stage: "processing", timestamp: "2026-09-20T09:00:00Z", label: "Order confirmed" },
      { stage: "shipped", timestamp: "2026-09-21T14:00:00Z", label: "Shipped from warehouse" },
      { stage: "out_for_delivery", timestamp: "2026-09-22T08:00:00Z", label: "Out for delivery" },
      { stage: "delivered", timestamp: null, label: "Delivered" },
    ],
    items: [{ name: "Running Shoes — Size 9", image: "/mock/shoes.jpg", qty: 1, price: 64.5 }],
    support: { phone: "+1-800-555-0134", email: "support@shop.com", chatUrl: "#chat" },
  },

  // Edge case 2: Delivered but Not Received
  disputed: {
    orderId: "ORD-10295",
    status: "delivered",
    estimatedDelivery: "2026-09-24T18:00:00Z",
    isDelayed: false,
    deliveredConfirmedByCustomer: false, // customer disputes delivery
    timeline: [
      { stage: "processing", timestamp: "2026-09-19T09:00:00Z", label: "Order confirmed" },
      { stage: "shipped", timestamp: "2026-09-20T14:00:00Z", label: "Shipped from warehouse" },
      { stage: "out_for_delivery", timestamp: "2026-09-24T08:00:00Z", label: "Out for delivery" },
      { stage: "delivered", timestamp: "2026-09-24T17:22:00Z", label: "Delivered — left at front door" },
    ],
    items: [{ name: "Bluetooth Speaker", image: "/mock/speaker.jpg", qty: 1, price: 39.0 }],
    support: { phone: "+1-800-555-0134", email: "support@shop.com", chatUrl: "#chat" },
  },

  // Edge case 3: Tracking Not Available Yet
  unavailable: {
    orderId: "ORD-10296",
    status: "tracking_unavailable",
    estimatedDelivery: null,
    isDelayed: false,
    deliveredConfirmedByCustomer: null,
    timeline: [{ stage: "processing", timestamp: "2026-09-25T10:00:00Z", label: "Order confirmed" }],
    items: [{ name: "Ceramic Mug Set", image: "/mock/mugs.jpg", qty: 2, price: 22.0 }],
    support: { phone: "+1-800-555-0134", email: "support@shop.com", chatUrl: "#chat" },
  },
};
