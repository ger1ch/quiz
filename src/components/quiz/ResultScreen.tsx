import { motion } from 'framer-motion';
import type { QuizResult } from '../../types/quiz';

export function ResultScreen({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const title =
    result.grade === 'gold'
      ? 'Ты супер!'
      : result.grade === 'silver'
      ? 'Очень хороший результат!'
      : 'Неплохо, но можно лучше!';

  const subtitle =
    result.grade === 'gold'
      ? 'Ты отлично знаешь тему майских праздников.'
      : result.grade === 'silver'
      ? 'Ты хорошо справился, ещё немного — и будет максимум.'
      : 'Попробуй ещё раз и улучши результат.';

  return (
    <motion.div
      style={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <motion.div
        style={styles.card}
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div style={styles.emoji}>🏆</div>

        <h2 style={styles.title}>{title}</h2>
        <p style={styles.subtitle}>{subtitle}</p>

        <div style={styles.scoreBox}>
          <div style={styles.scoreMain}>
            {result.correct} / {result.total}
          </div>
          <div style={styles.scoreText}>правильных ответов</div>
        </div>

        <div style={styles.metaRow}>
          <div style={styles.metaCard}>
            <div style={styles.metaLabel}>Ошибок</div>
            <div style={styles.metaValue}>{result.wrong}</div>
          </div>

          <div style={styles.metaCard}>
            <div style={styles.metaLabel}>Время</div>
            <div style={styles.metaValue}>{result.timeSeconds} c</div>
          </div>
        </div>

        <motion.button
          onClick={onRestart}
          style={styles.button}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Пройти ещё раз
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    background: 'linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 100%)',
  },
  glow1: {
    position: 'absolute',
    left: '10%',
    top: '18%',
    width: 220,
    height: 220,
    borderRadius: '50%',
    background: 'rgba(255, 217, 61, 0.22)',
    filter: 'blur(70px)',
  },
  glow2: {
    position: 'absolute',
    right: '14%',
    bottom: '18%',
    width: 260,
    height: 220,
    borderRadius: '50%',
    background: 'rgba(255, 142, 83, 0.18)',
    filter: 'blur(70px)',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: 760,
    background: 'rgba(255,255,255,0.95)',
    borderRadius: 36,
    boxShadow: '0 18px 50px rgba(0,0,0,0.08)',
    padding: '42px 34px',
    textAlign: 'center',
  },
  emoji: {
    fontSize: 72,
    marginBottom: 10,
  },
  title: {
    margin: 0,
    fontSize: 'clamp(34px, 4vw, 58px)',
    lineHeight: 1.05,
    fontWeight: 900,
    color: '#2D3436',
  },
  subtitle: {
    margin: '16px auto 0',
    maxWidth: 620,
    fontSize: 24,
    lineHeight: 1.35,
    color: '#6C7A89',
  },
  scoreBox: {
    marginTop: 28,
    padding: '24px 20px',
    borderRadius: 28,
    background: 'linear-gradient(135deg, #FFF1C9 0%, #FFF8EA 100%)',
    border: '1px solid #F7E7A4',
  },
  scoreMain: {
    fontSize: 68,
    fontWeight: 900,
    color: '#2D3436',
    lineHeight: 1,
  },
  scoreText: {
    marginTop: 10,
    fontSize: 22,
    color: '#7B8794',
    fontWeight: 600,
  },
  metaRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
    marginTop: 20,
  },
  metaCard: {
    padding: '18px 14px',
    borderRadius: 22,
    background: '#F8FAFC',
    border: '1px solid #E9EEF3',
  },
  metaLabel: {
    fontSize: 18,
    color: '#7B8794',
    marginBottom: 8,
    fontWeight: 600,
  },
  metaValue: {
    fontSize: 36,
    color: '#2D3436',
    fontWeight: 900,
  },
  button: {
    marginTop: 28,
    border: 'none',
    borderRadius: 22,
    padding: '18px 28px',
    minWidth: 260,
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    color: '#fff',
    fontSize: 28,
    fontWeight: 800,
    cursor: 'pointer',
    boxShadow: '0 12px 30px rgba(255, 120, 90, 0.32)',
  },
};