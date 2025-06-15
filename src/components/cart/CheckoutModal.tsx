import React from 'react';
import styles from './CheckoutModal.module.scss';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; city: string; address: string; fullname: string; card: string }) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [card, setCard] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !city || !address || !fullname || !card) {
      setError('Будь ласка, заповніть всі поля');
      return;
    }
    setError('');
    onSubmit({ email, city, address, fullname, card });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2 className={styles.checkoutTitle}>Оформлення замовлення</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Email
            <input type="email" className={styles.formInput} value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label className={styles.formLabel}>
            Місто
            <input type="text" className={styles.formInput} value={city} onChange={e => setCity(e.target.value)} required />
          </label>
          <label className={styles.formLabel}>
            Адреса доставки
            <input type="text" className={styles.formInput} value={address} onChange={e => setAddress(e.target.value)} required placeholder="Ваша адреса" />
          </label>
          <label className={styles.formLabel}>
            ПІБ отримувача
            <input type="text" className={styles.formInput} value={fullname} onChange={e => setFullname(e.target.value)} required placeholder="Прізвище Ім'я По батькові" />
          </label>
          <label className={styles.formLabel}>
            Дані картки
            <input type="text" className={styles.formInput} value={card} onChange={e => setCard(e.target.value)} required placeholder="0000 0000 0000 0000" maxLength={19} />
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitButton}>Підтвердити</button>
        </form>
      </div>
    </div>
  );
};
