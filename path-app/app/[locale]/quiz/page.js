"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { economicQuestions, socialQuestions } from "@/data/questions";
import { LikertScale } from "@/components/likert-scale";

/**
 * QuizPage Component
 * Handles the main quiz flow:
 * 1. Randomly pools questions (10 Economic + 10 Social)
 * 2. Collects user responses (-2 to +2)
 * 3. Calculates final coordinates
 * 4. Persists results to sessionStorage
 */
export default function QuizPage() {
  const t = useTranslations("quiz");
  const locale = useLocale();
  const router = useRouter();

  // Quiz State
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedValue, setSelectedValue] = useState(0);

  // Initialize pool on mount
  useEffect(() => {
    // Helper to shuffle array
    const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

    // Select 10 random questions from each pool to ensure variety every session
    const selectedEco = shuffle(economicQuestions).slice(0, 10);
    const selectedSoc = shuffle(socialQuestions).slice(0, 10);

    // Combine and shuffle the final deck (20 questions total)
    const finalQuestions = shuffle([...selectedEco, ...selectedSoc]);
    setQuizQuestions(finalQuestions);
  }, []);

  // Show loading state while questions are being prepared
  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FDB913]"></div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleNext = () => {
    // Save current answer
    setAnswers({ ...answers, [question.id]: selectedValue });

    if (currentQuestion < quizQuestions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      // Reset selected value for next question (or load existing if navigating back)
      setSelectedValue(answers[quizQuestions[nextQ]?.id] || 0);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      setSelectedValue(answers[quizQuestions[prevQ]?.id] || 0);
    }
  };

  /**
   * Calculates the final X (Economic) and Y (Social) scores.
   * - Economic: Left (State) <-> Right (Market)
   * - Social: Libertarian (Down) <-> Authoritarian (Up)
   */
  const calculateResults = () => {
    let economicRaw = 0;
    let socialRaw = 0;

    // Filter based on the QUESTIONS USED for this session, not the full pool
    const economicCount = quizQuestions.filter(
      (q) => q.type === "economic"
    ).length;
    const socialCount = quizQuestions.filter((q) => q.type === "social").length;

    quizQuestions.forEach((q) => {
      const val = answers[q.id] || 0;
      // Val range: -2 (Strongly Disagree) to +2 (Strongly Agree)

      // Calculate weighted score:
      // If q.effect is positive (Agree = Right/Auth), val adds to score.
      // If q.effect is negative (Agree = Left/Lib), val subtracts from score.
      // We divide by 2 to normalize the scale contribution per question.
      const score = (val * q.effect) / 2;

      if (q.type === "economic") economicRaw += score;
      else socialRaw += score;
    });

    // Normalize final scores to -10 to +10 range
    // Formula: (Raw Score / Number of Questions) * 10
    const economicScore =
      economicCount > 0 ? (economicRaw / economicCount) * 10 : 0;
    const socialScore = socialCount > 0 ? (socialRaw / socialCount) * 10 : 0;

    // Save calculation to session storage for Results page retrieval
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
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
          {/* Container matching standard width */}
          <div className="relative z-10 w-full max-w-[800px] space-y-8">
            {/* Header / Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm font-bold tracking-wide uppercase text-foreground/70">
                <span>
                  Question {currentQuestion + 1}/{quizQuestions.length}
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
                  {currentQuestion === quizQuestions.length - 1
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
      </div>
    </div>
  );
}
