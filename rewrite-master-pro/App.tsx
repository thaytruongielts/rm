
import React, { useState, useCallback, useMemo } from 'react';
import { questions } from './data';
import { AppState, UserAnswer } from './types';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.START);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [finalResults, setFinalResults] = useState<UserAnswer[]>([]);

  const startQuiz = () => {
    setAppState(AppState.QUIZ);
    setUserAnswers({});
    setFinalResults([]);
  };

  const handleSubmit = (answers: Record<number, string>) => {
    const results: UserAnswer[] = questions.map((q) => {
      const userAnswerStr = (answers[q.id] || '').trim().toLowerCase();
      
      // Clean up punctuation for comparison but keep logic strict
      const isCorrect = q.correctAnswers.some(correct => {
        const normalizedCorrect = correct.trim().toLowerCase();
        // Allow optional period at end
        return userAnswerStr === normalizedCorrect || 
               userAnswerStr === normalizedCorrect.replace(/\.$/, '') ||
               userAnswerStr + '.' === normalizedCorrect;
      });

      return {
        questionId: q.id,
        answer: answers[q.id] || '',
        isCorrect
      };
    });

    setFinalResults(results);
    setAppState(AppState.RESULTS);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:px-8">
      <div className="w-full max-w-3xl">
        <Header />

        <main className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          {appState === AppState.START && (
            <div className="p-8 text-center">
              <div className="mb-6 inline-flex p-4 bg-indigo-50 rounded-full">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Sẵn sàng luyện tập?</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Viết lại {questions.length} câu theo từ gợi ý. Hệ thống sẽ chấm điểm theo thang điểm 10 dựa trên độ chính xác tuyệt đối của đáp án.
              </p>
              <button
                onClick={startQuiz}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Bắt đầu làm bài
              </button>
            </div>
          )}

          {appState === AppState.QUIZ && (
            <Quiz questions={questions} onSubmit={handleSubmit} />
          )}

          {appState === AppState.RESULTS && (
            <Result results={finalResults} questions={questions} onRestart={startQuiz} />
          )}
        </main>

        <footer className="mt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Rewrite Master Pro. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
