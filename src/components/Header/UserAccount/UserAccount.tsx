import Link from 'next/link';
import React from 'react';
import { UserAccountProps } from '@/types/shop';

import styles from './UserAccount.module.scss';

export default function UserAccount({ username, avatarUrl }: UserAccountProps) {
  return (
    <Link href="/profile">
      <div className={styles.userAccount}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <img
              src={avatarUrl || '/ava.jpg'}
              alt={username}
              className={styles.avatarImage}
            />
          </div>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.username}>{username}</span>
          {/* <span className={styles.emoji} title="Баланс">🧺</span> */}
        </div>
      </div>
    </Link>
  );
}


