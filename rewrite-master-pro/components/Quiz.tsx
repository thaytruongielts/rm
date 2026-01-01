
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onSubmit: (answers: Record<number, string>) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleInputChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  return (
    <div className="p-6 md:p-8">
      <div className="sticky top-0 bg-white z-10 pb-4 border-b border-slate-100 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-slate-600">Tiến độ bài làm</span>
          <span className="text-sm font-bold text-indigo-600">{Object.keys(answers).length} / {questions.length}</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-10">
        {questions.map((q, index) => (
          <div key={q.id} className="group">
            <div className="flex items-start gap-4 mb-3">
              <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">
                Câu {q.id}
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">
                {q.prompt}
              </p>
            </div>
            
            <div className="ml-12">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Từ khóa:</span>
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-1.5 py-0.5 rounded tracking-wider">
                    {q.keyword}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Bắt đầu:</span>
                  <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded italic">
                    {q.hint}
                  </span>
                </div>
              </div>
              <input
                type="text"
                placeholder="Nhập toàn bộ câu hoàn chỉnh..."
                value={answers[q.id] || ''}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                className="w-full border-b-2 border-slate-200 focus:border-indigo-500 outline-none py-2 text-slate-700 transition-all text-lg placeholder:text-slate-300"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => onSubmit(answers)}
          className="px-12 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
        >
          Nộp bài và xem điểm
        </button>
      </div>
    </div>
  );
};

export default Quiz;
