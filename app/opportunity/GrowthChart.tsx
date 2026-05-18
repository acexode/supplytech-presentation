"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type ChartInstance = {
  destroy: () => void;
};

type ChartConstructor = new (
  context: CanvasRenderingContext2D,
  config: object,
) => ChartInstance;

declare global {
  interface Window {
    Chart?: ChartConstructor;
  }
}

export default function GrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<ChartInstance | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  const initializeChart = useCallback(() => {
    const canvas = canvasRef.current;
    const Chart = window.Chart;

    if (!canvas || !Chart) {
      return false;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return false;
    }

    chartRef.current?.destroy();
    chartRef.current = new Chart(context, {
      type: "line",
      data: {
        labels: [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027",
          "2028",
          "2029",
          "2030",
        ],
        datasets: [
          {
            label: "Logistics Market ($B)",
            data: [25, 28, 31, 34, 37.8, 41, 45, 49, 53, 57, 61],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#3b82f6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
          },
          {
            label: "E-commerce Logistics ($B)",
            data: [1.5, 1.8, 2.1, 2.4, 2.8, 3.2, 3.6, 4.0, 4.4, 4.8, 5.2],
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#8b5cf6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 12,
                family: "Inter",
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: 12,
            titleFont: {
              size: 14,
              weight: "bold",
            },
            bodyFont: {
              size: 13,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
          x: {
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
            ticks: {
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });

    return true;
  }, []);

  useEffect(() => {
    let retryHandle: number | undefined;
    let cancelled = false;

    const initializeWhenReady = () => {
      if (cancelled || initializeChart()) {
        return;
      }

      retryHandle = window.setTimeout(initializeWhenReady, 100);
    };

    initializeWhenReady();

    return () => {
      cancelled = true;

      if (retryHandle) {
        window.clearTimeout(retryHandle);
      }

      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [initializeChart, scriptReady]);

  return (
    <>
      <canvas ref={canvasRef} />
      <Script
        src="https://cdn.jsdelivr.net/npm/chart.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />
    </>
  );
}
