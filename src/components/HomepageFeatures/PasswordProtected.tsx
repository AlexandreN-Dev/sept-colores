import React, { useState } from 'react';
import styles from './PasswordProtected.module.css';

interface PasswordProtectedProps {
  children: React.ReactNode;
  password: string;
}

export function PasswordProtected({ children, password }: PasswordProtectedProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input === password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
      setInput('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>Accès protégé</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Entrez le mot de passe"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            autoFocus
          />
          <button type="submit" className={styles.button}>
            Accéder
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}