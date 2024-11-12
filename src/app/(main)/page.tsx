import Image from "next/image";
import React from "react";
import styles from "../HomePage.module.scss";

export default function Home() {
  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>VolunteerConnect</div>
          <div className={styles.authButtons}>
            <a href="/login" className={styles.link}>
              Iniciar sesión
            </a>
            <a href="/register" className={styles.registerButton}>
              Registrarse
            </a>
          </div>
        </header>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Conecta, Colabora, Cambia el Mundo
          </h1>
          <p className={styles.description}>
            Únete a nuestra comunidad de voluntarios y organizadores. Encuentra
            proyectos que te apasionen o crea los tuyos propios para hacer una
            diferencia en tu comunidad.
          </p>
          <div className={styles.buttons}>
            <a href="/explore" className={styles.primaryButton}>
              Explorar Proyectos
            </a>
            <a href="/organizer" className={styles.secondaryButton}>
              Comenzar como Organizador
            </a>
          </div>
        </main>
      </div>
  );
}
