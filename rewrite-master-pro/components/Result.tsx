
import React, { useMemo } from 'react';
import { UserAnswer, Question } from '../types';

interface ResultProps {
  results: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ results, questions, onRestart }) => {
  const scoreData = useMemo(() => {
    const correctCount = results.filter((r) => r.isCorrect).length;
    const rawScore = (10 * correctCount) / questions.length;
    return {
      correctCount,
      totalCount: questions.length,
      finalScore: rawScore.toFixed(1)
    };
  }, [results, questions]);

  const getScoreColor = (score: string) => {
    const num = parseFloat(score);
    if (num >= 8) return 'text-emerald-600';
    if (num >= 5) return 'text-amber-600';
    return 'text-rose-600';
  };

  return (
    <div className="p-6 md:p-8">
      <div className="text-center mb-10 pb-8 border-b border-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Kết quả bài làm</h2>
        <div className="flex flex-col items-center">
          <div className={`text-6xl font-black mb-2 ${getScoreColor(scoreData.finalScore)}`}>
            {scoreData.finalScore} <span className="text-2xl text-slate-300">/ 10</span>
          </div>
          <p className="text-slate-500 font-medium">
            Bạn đã trả lời đúng {scoreData.correctCount} trên {scoreData.totalCount} câu.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {questions.map((q) => {
          const userRes = results.find((r) => r.questionId === q.id);
          const isCorrect = userRes?.isCorrect;

          return (
            <div key={q.id} className={`rounded-xl border-l-4 p-5 ${isCorrect ? 'border-emerald-500 bg-emerald-50/30' : 'border-rose-500 bg-rose-50/30'}`}>
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                  {isCorrect ? 'Đúng' : 'Sai'}
                </span>
                <span className="text-slate-400 font-mono text-xs">#Câu {q.id}</span>
              </div>

              <div className="mb-4">
                <p className="text-slate-400 text-xs mb-1 font-bold uppercase">Đề bài:</p>
                <p className="text-slate-700 font-medium">{q.prompt}</p>
              </div>

              <div className="mb-4">
                <p className="text-slate-400 text-xs mb-1 font-bold uppercase">Câu của bạn:</p>
                <p className={`font-semibold ${isCorrect ? 'text-emerald-800' : 'text-rose-800 italic'}`}>
                  {userRes?.answer || '(Bỏ trống)'}
                </p>
              </div>

              {!isCorrect && (
                <div className="mb-4 p-3 bg-white/60 rounded-lg border border-rose-100">
                  <p className="text-rose-400 text-[10px] mb-1 font-black uppercase tracking-tighter">Đáp án mẫu:</p>
                  <ul className="list-disc list-inside text-rose-900 font-bold">
                    {q.correctAnswers.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-slate-200/50">
                <p className="text-slate-500 text-xs italic">
                  <span className="font-bold text-slate-600 not-italic mr-1">Giải thích:</span>
                  {q.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={onRestart}
          className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          Làm lại bài thi
        </button>
      </div>
    </div>
  );
};

export default Result;
