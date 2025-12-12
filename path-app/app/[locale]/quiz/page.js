"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { questions } from "@/data/questions";
import { LikertScale } from "@/components/likert-scale";

export default function QuizPage() {
  const t = useTranslations("quiz");
  const locale = useLocale();
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedValue, setSelectedValue] = useState(0);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    setAnswers({ ...answers, [question.id]: selectedValue });

    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      setSelectedValue(answers[questions[nextQ]?.id] || 0);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      setSelectedValue(answers[questions[prevQ]?.id] || 0);
    }
  };

  const calculateResults = () => {
    let economicRaw = 0;
    let socialRaw = 0;

    // Max possible scores (assuming max value is 2 and division by 2 in formula makes max contribution 1)
    // Actually, formula was (val * weight) / 2.
    // val range: -2 to 2.
    // If weight 1. Max val 2 -> (2*1)/2 = 1.
    // So max contribution is 1 per question.

    // Count questions per category to normalize
    const economicCount = questions.filter(
      (q) => q.category === "economic"
    ).length;
    const socialCount = questions.filter((q) => q.category === "social").length;

    questions.forEach((q) => {
      const val = answers[q.id] || 0;
      // Use q.weight instead of q.value
      // Note: Data now has weight: 1 or -1.
      const score = (val * q.weight) / 2;

      if (q.category === "economic")
        economicRaw += score; // Use category instead of axis
      else socialRaw += score;
    });

    // Normalize to -10 to +10
    const economicScore =
      economicCount > 0 ? (economicRaw / economicCount) * 10 : 0;
    const socialScore = socialCount > 0 ? (socialRaw / socialCount) * 10 : 0;

    sessionStorage.setItem(
      "quizResults",
      JSON.stringify({
        economic: economicScore,
        social: socialScore,
        answers,
      })
    );

    router.push("/results");
  };

  const labels = {
    stronglyDisagree: t("stronglyDisagree"),
    disagree: t("disagree"),
    neutral: t("neutral"),
    agree: t("agree"),
    stronglyAgree: t("stronglyAgree"),
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* Container matching standard width */}
      <div className="relative z-10 w-full max-w-[800px] space-y-8">
        {/* Header / Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm font-bold tracking-wide uppercase text-foreground/70">
            <span>
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="text-gold-text">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#FDB913] to-[#f5a623] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(253,185,19,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Theme Aware Card */}
        <div className="theme-card relative overflow-hidden rounded-[24px] p-8 md:p-12 transition-all">
          {/* Top Highlight (Dark Mode Only usually, but gold looks good on both) */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50" />

          <h2 className="mb-12 text-center text-2xl font-bold leading-tight text-foreground md:text-3xl">
            {question.text[locale] || question.text["en"]}
          </h2>

          <div className="mb-12">
            <LikertScale
              value={selectedValue}
              onChange={setSelectedValue}
              labels={labels}
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="h-[52px] flex-1 rounded-xl border border-foreground/20 bg-transparent text-base font-semibold text-foreground transition-all hover:bg-foreground/5 hover:border-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t("previous")}
            </button>
            <button
              onClick={handleNext}
              className="h-[52px] flex-1 rounded-xl bg-gradient-to-br from-[#FDB913] to-[#f5a623] text-base font-bold text-black shadow-[0_4px_20px_rgba(253,185,19,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(253,185,19,0.5)]"
            >
              {currentQuestion === questions.length - 1
                ? t("finish")
                : t("next")}
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/")}
            className="text-sm font-medium text-foreground/40 hover:text-foreground/80 hover:underline transition-colors"
          >
            Cancel Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
