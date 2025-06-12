import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.title}>О нас</span>
          <a href="/about" className={styles.link}>О компании</a>
          <a href="/team" className={styles.link}>Наша команда</a>
          <a href="/careers" className={styles.link}>Вакансии</a>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Поддержка</span>
          <a href="/help" className={styles.link}>Помощь</a>
          <a href="/faq" className={styles.link}>FAQ</a>
          <a href="/contact" className={styles.link}>Связаться с нами</a>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Соцсети</span>
          <a href="/Telegram" className={styles.link}>Telegram</a>
          <a href="/Instagram" className={styles.link}>Instagram</a>
          <a href="/X" className={styles.link}>X</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} HyperByte. Все права защищены.
        </div>
      </div>
    </footer>
  );
}