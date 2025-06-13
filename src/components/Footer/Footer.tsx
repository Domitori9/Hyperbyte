import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <span className={styles.title}>Про нас</span>
          <a href="/about" className={styles.link}>Про компанію</a>
          <a href="/team" className={styles.link}>Наша команда</a>
          <a href="/careers" className={styles.link}>Вакансії</a>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Підтримка</span>
          <a href="/help" className={styles.link}>Допомога</a>
          <a href="/faq" className={styles.link}>FAQ</a>
          <a href="/contact" className={styles.link}>Зв'язатися з нами</a>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Соцмережі</span>
          <a href="/Telegram" className={styles.link}>Telegram</a>
          <a href="/Instagram" className={styles.link}>Instagram</a>
          <a href="/X" className={styles.link}>X</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} HyperByte. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}