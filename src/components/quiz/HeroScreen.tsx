import { motion } from 'framer-motion';

export function HeroScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      style={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />
      <div style={styles.glowBottom} />

      <motion.div
        style={styles.sunWrap}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div style={styles.sun} />
      </motion.div>

      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        МИР. ТРУД. МАЙ.
        <br />
        БЛАГОДАРНОСТЬ
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Интерактивный квиз о празднике весны и труда
      </motion.p>

      <motion.button
        onClick={onStart}
        style={styles.button}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.45 }}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Начать квиз →
      </motion.button>

      <motion.p
        style={styles.meta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        5 вопросов • Яркий интерфейс • Проверь свои знания
      </motion.p>

      <div style={styles.wave} />
    </motion.div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 20px',
    background: 'linear-gradient(180deg, #FFF6DE 0%, #FFFDFC 100%)',
    textAlign: 'center',
  },
  glowLeft: {
    position: 'absolute',
    left: '10%',
    top: '18%',
    width: 220,
    height: 220,
    borderRadius: '50%',
    background: 'rgba(255, 217, 61, 0.22)',
    filter: 'blur(60px)',
  },
  glowRight: {
    position: 'absolute',
    right: '12%',
    top: '16%',
    width: 240,
    height: 240,
    borderRadius: '50%',
    background: 'rgba(255, 107, 107, 0.16)',
    filter: 'blur(70px)',
  },
  glowBottom: {
    position: 'absolute',
    bottom: '14%',
    width: 280,
    height: 180,
    borderRadius: '50%',
    background: 'rgba(0, 184, 148, 0.12)',
    filter: 'blur(70px)',
  },
  sunWrap: {
    marginBottom: 28,
    position: 'relative',
    zIndex: 1,
  },
  sun: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    background: 'linear-gradient(180deg, #FFC94D 0%, #FFB347 100%)',
    boxShadow: '0 10px 30px rgba(255, 179, 71, 0.35)',
  },
  title: {
    margin: 0,
    position: 'relative',
    zIndex: 1,
    fontSize: 'clamp(42px, 7vw, 94px)',
    lineHeight: 0.95,
    fontWeight: 900,
    color: '#2D3436',
    letterSpacing: '-0.04em',
  },
  subtitle: {
    marginTop: 28,
    marginBottom: 0,
    position: 'relative',
    zIndex: 1,
    fontSize: 'clamp(18px, 2.2vw, 28px)',
    color: '#6C7A89',
    maxWidth: 760,
  },
  button: {
    marginTop: 34,
    position: 'relative',
    zIndex: 1,
    border: 'none',
    borderRadius: 22,
    padding: '18px 34px',
    minWidth: 260,
    fontSize: 28,
    fontWeight: 800,
    color: '#fff',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    boxShadow: '0 12px 30px rgba(255, 120, 90, 0.32)',
  },
  meta: {
    marginTop: 24,
    position: 'relative',
    zIndex: 1,
    fontSize: 22,
    color: '#A7AFB7',
    fontStyle: 'italic',
  },
  wave: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    background:
      'radial-gradient(120px 28px at 10% 0, #F3E3A0 98%, transparent 100%), radial-gradient(150px 30px at 35% 0, #F3E3A0 98%, transparent 100%), radial-gradient(150px 28px at 65% 0, #F3E3A0 98%, transparent 100%), radial-gradient(130px 24px at 90% 0, #F3E3A0 98%, transparent 100%)',
    opacity: 0.8,
  },
};