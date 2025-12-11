"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { politicians, findClosestPolitician } from "@/data/politicians";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

export default function ResultsPage() {
  const t = useTranslations("results");
  const locale = useLocale();
  const router = useRouter();

  const [results, setResults] = useState(null);
  const [closestMatch, setClosestMatch] = useState(null);

  useEffect(() => {
    const storedResults = sessionStorage.getItem("quizResults");
    if (!storedResults) {
      router.push("/");
      return;
    }

    const parsedResults = JSON.parse(storedResults);
    setResults(parsedResults);

    const match = findClosestPolitician(
      parsedResults.economic,
      parsedResults.social
    );
    setClosestMatch(match);
  }, [locale, router]);

  if (!results || !closestMatch) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg font-medium text-muted-foreground">
          Calculating results...
        </div>
      </div>
    );
  }

  const chartData = {
    datasets: [
      {
        label: t("yourPosition"),
        data: [{ x: results.economic, y: results.social }],
        backgroundColor: "#ef4444",
        borderColor: "#ef4444",
        pointRadius: 12,
        pointHoverRadius: 14,
      },
      ...politicians.map((politician) => ({
        label: politician.name[locale],
        data: [{ x: politician.x, y: politician.y }],
        backgroundColor: politician.color + "80",
        borderColor: politician.color,
        pointRadius: 8,
        pointHoverRadius: 10,
      })),
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      x: {
        type: "linear",
        position: "center",
        min: -10,
        max: 10,
        title: {
          display: true,
          text: t("economicAxis"),
          color: "hsl(var(--muted-foreground))",
          font: { weight: "bold" },
        },
        grid: { color: "hsl(var(--border))" },
        ticks: { color: "hsl(var(--muted-foreground))" },
      },
      y: {
        type: "linear",
        position: "center",
        min: -10,
        max: 10,
        title: {
          display: true,
          text: t("socialAxis"),
          color: "hsl(var(--muted-foreground))",
          font: { weight: "bold" },
        },
        grid: { color: "hsl(var(--border))" },
        ticks: { color: "hsl(var(--muted-foreground))" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "hsl(var(--popover))",
        titleColor: "hsl(var(--popover-foreground))",
        bodyColor: "hsl(var(--popover-foreground))",
        borderColor: "hsl(var(--border))",
        borderWidth: 1,
        padding: 12,
      },
    },
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-muted-foreground">
          Here is where you stand on the political spectrum.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Stats & Match */}
        <div className="space-y-6 lg:col-span-5">
          {/* Match Card */}
          <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="border-b bg-muted/50 px-6 py-4">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("closestMatch")}
              </h2>
            </div>
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-foreground">
                {closestMatch.politician.name[locale]}
              </div>
              <div className="mt-1 font-medium text-primary">
                {closestMatch.politician.party}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                {t("distance")}: {closestMatch.distance.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Scores Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-medium text-muted-foreground">
                {t("economicAxis")}
              </div>
              <div className="mt-2 text-2xl font-bold">
                {results.economic.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">
                {results.economic < 0 ? t("left") : t("right")}
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="text-sm font-medium text-muted-foreground">
                {t("socialAxis")}
              </div>
              <div className="mt-2 text-2xl font-bold">
                {results.social.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">
                {results.social < 0 ? t("liberal") : t("authoritarian")}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/")}
              className="flex-1 rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
            >
              {t("retakeQuiz")}
            </button>
            <button
              onClick={() => {
                if (navigator.share)
                  navigator.share({
                    title: "The P.A.T.H. Results",
                    url: window.location.href,
                  });
              }}
              className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              {t("shareResults")}
            </button>
          </div>
        </div>

        {/* Right Column: Chart */}
        <div className="rounded-xl border bg-card p-6 shadow-sm lg:col-span-7">
          <div className="aspect-square w-full">
            <Scatter data={chartData} options={chartOptions} />
          </div>
          <div className="mt-6 border-t pt-6">
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">
              Reference Map
            </h3>
            <div className="flex flex-wrap gap-3">
              {politicians.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1 text-xs"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <span>{p.name[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
