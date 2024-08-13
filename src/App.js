import React, { useState } from 'react';
import AuthForm from './AuthForm';
import styles from './App.module.css';

const App = () => {
  const [formType, setFormType] = useState('login');

  const toggleForm = () => {
    setFormType((prev) => (prev === 'login' ? 'signup' : 'login'));
  };

  return (
    <div className={styles.container}>
      <div className={styles.toggleButton} onClick={toggleForm}>
        {formType === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}
      </div>
      <AuthForm type={formType} />
    </div>
  );
};

export default App;

