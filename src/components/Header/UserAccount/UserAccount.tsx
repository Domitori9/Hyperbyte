import Link from 'next/link';
import React, { Component } from 'react';
import styles from './UserAccount.module.scss';

interface UserAccountProps {
  username: string;
  avatarUrl?: string;
}

export default function UserAccount({ username, avatarUrl }: UserAccountProps) {
  return (
    <Link href="/profile">
      <div className={styles.userAccount}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={username}
                className={styles.avatarImage}
              />
            ) : (
              <div className={styles.avatarFallback}>
                {username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.username}>{username}</span>
          <span className={styles.emoji}>💸</span>
        </div>
      </div>
    </Link>
  );
}


