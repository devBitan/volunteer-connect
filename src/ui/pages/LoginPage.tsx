"use client";

import React from "react";
import styles from "../../app/LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <a href="/" className={styles.backLink}>
        Volver al inicio
      </a>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <p className={styles.subtitle}>
          Ingresa tus credenciales para acceder a tu cuenta
        </p>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            placeholder="tú@ejemplo.com"
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Iniciar Sesión
          </button>
        </form>
        <div className={styles.footer}>
          <a href="/forgot-password" className={styles.link}>
            ¿Olvidaste tu contraseña?
          </a>
          <p>
            <a href="/register" className={styles.link}>
              ¿No tienes una cuenta?{" "} Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
