import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Question } from '../../types/quiz';

export function QuizScreen({
  questions,
  onComplete,
}: {
  questions: Question[];
  onComplete: (answers: Record<number, string>, time: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [start] = useState(Date.now());

  const q = questions[index];
  const progress = Math.round(((index + 1) / questions.length) * 100);

  const handleAnswer = (letter: string) => {
    if (selected) return;
    setSelected(letter);
    setAnswers((prev) => ({ ...prev, [q.id]: letter }));
  };

  const handleNext = () => {
    const newAnswers = { ...answers, [q.id]: selected! };

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      onComplete(newAnswers, Math.floor((Date.now() - start) / 1000));
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.topbar}>
        <span style={styles.topText}>Вопрос {index + 1} из {questions.length}</span>
        <span style={styles.topPercent}>{progress}%</span>
      </div>

      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      <div style={styles.centerWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            style={styles.card}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.32 }}
          >
            <div style={styles.badge}>ВОПРОС {index + 1}</div>

            <h2 style={styles.question}>{q.text}</h2>

            <div style={styles.optionsWrap}>
              {q.options.map((opt) => {
                const isCorrect = selected && opt.letter === q.correctAnswer;
                const isWrong = selected === opt.letter && opt.letter !== q.correctAnswer;
                const dimmed = selected && !isCorrect && !isWrong;

                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleAnswer(opt.letter)}
                    style={{
                      ...styles.option,
                      ...(isCorrect ? styles.optionCorrect : {}),
                      ...(isWrong ? styles.optionWrong : {}),
                      ...(dimmed ? styles.optionDimmed : {}),
                    }}
                  >
                    <span
                      style={{
                        ...styles.letter,
                        ...(isCorrect ? styles.letterCorrect : {}),
                        ...(isWrong ? styles.letterWrong : {}),
                      }}
                    >
                      {opt.letter}
                    </span>
                    <span style={styles.optionText}>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {selected && (
              <motion.button
                onClick={handleNext}
                style={styles.nextButton}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {index < questions.length - 1 ? 'Далее →' : 'Узнать результат →'}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #F8F4E8 0%, #FCFBF8 100%)',
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px 14px',
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #EEE7DA',
    fontSize: 24,
  },
  topText: {
    color: '#6F7B87',
    fontWeight: 600,
  },
  topPercent: {
    color: '#FF6B6B',
    fontWeight: 800,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    background: '#E8E8E8',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #FFD93D 0%, #FF6B6B 100%)',
    borderRadius: '0 999px 999px 0',
    transition: 'width 0.3s ease',
  },
  centerWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '36px 20px',
  },
  card: {
    width: '100%',
    maxWidth: 920,
    background: '#FFFFFF',
    borderRadius: 36,
    boxShadow: '0 18px 50px rgba(0,0,0,0.08)',
    padding: '38px 38px 34px',
  },
  badge: {
    fontSize: 18,
    fontWeight: 800,
    letterSpacing: '0.16em',
    color: '#FF6B6B',
    marginBottom: 18,
  },
  question: {
    margin: 0,
    fontSize: 'clamp(34px, 4vw, 54px)',
    lineHeight: 1.1,
    color: '#2D3436',
    fontWeight: 900,
    marginBottom: 30,
  },
  optionsWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  option: {
    width: '100%',
    minHeight: 82,
    borderRadius: 24,
    border: '2px solid #E8E8E8',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    padding: '16px 20px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    textAlign: 'left',
  },
  optionCorrect: {
    border: '2px solid #00B894',
    background: '#E8F8F5',
  },
  optionWrong: {
    border: '2px solid #FF6B6B',
    background: '#FFF1F1',
  },
  optionDimmed: {
    opacity: 0.55,
  },
  letter: {
    width: 52,
    height: 52,
    minWidth: 52,
    borderRadius: '50%',
    background: '#F3F5F8',
    color: '#636E72',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 800,
  },
  letterCorrect: {
    background: '#00B894',
    color: '#fff',
  },
  letterWrong: {
    background: '#FF6B6B',
    color: '#fff',
  },
  optionText: {
    fontSize: 28,
    color: '#2D3436',
    fontWeight: 700,
  },
  nextButton: {
    width: '100%',
    marginTop: 24,
    height: 68,
    border: 'none',
    borderRadius: 24,
    background: '#2D3436',
    color: '#fff',
    fontSize: 28,
    fontWeight: 800,
    cursor: 'pointer',
    boxShadow: '0 12px 28px rgba(45,52,54,0.14)',
  },
};