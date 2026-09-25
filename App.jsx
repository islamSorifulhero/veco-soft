import React from 'react';
import { useState, useMemo } from "react";
import { mockOrders } from "./mockData";
import OrderTrackingScreen from "./OrderTrackingScreen";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

const scenarioLabels = {
  normal: "On track",
  delayed: "Delayed",
  disputed: "Not received",
  unavailable: "No tracking yet",
  loading: "Loading",
  error: "Error",
};

export default function App() {
  const [scenario, setScenario] = useState("normal");
  const order = useMemo(() => mockOrders[scenario], [scenario]);

  const handleReportIssue = () => {
    alert("This would open a 'report a delivery issue' flow.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 flex gap-2 overflow-x-auto border-b border-gray-200 bg-white px-3 py-2.5">
        {Object.entries(scenarioLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setScenario(key)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              scenario === key ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {scenario === "loading" && <LoadingState />}
      {scenario === "error" && <ErrorState onRetry={() => setScenario("normal")} />}
      {scenario !== "loading" && scenario !== "error" && (
        <OrderTrackingScreen order={order} onReportIssue={handleReportIssue} />
      )}
    </div>
  );
}
