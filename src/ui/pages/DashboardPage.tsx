"use client";
import React, { useState } from "react";
import styles from "../../app/DashboardPage.module.scss";
import Modal from "../common/Modal";

const DashboardPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenModal = (data = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>VolunteerConnect</h2>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/projects" className={styles.active}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="/login">Cerrar Sesión</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Dashboard de Proyectos</h1>
          <div className={styles.headerActions}>
            <button className={styles.primaryButton}>Descargar Reportes</button>
            <button className={styles.secondaryButton} onClick={() => handleOpenModal()} >Nuevo Proyecto</button>
            <span className={styles.user}>María García</span>
          </div>
        </header>

        <section className={styles.stats}>
          <div className={styles.statCard}>
            <p>Total Proyectos</p>
            <h2>3</h2>
          </div>
          <div className={styles.statCard}>
            <p>Proyectos Activos</p>
            <h2>3</h2>
          </div>
          <div className={styles.statCard}>
            <p>Organizadores</p>
            <h2>2</h2>
          </div>
          <div className={styles.statCard}>
            <p>Próximo Proyecto</p>
            <h2>Invalid Date</h2>
          </div>
        </section>

        <section className={styles.projectList}>
          <h2>Lista de Proyectos</h2>
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className={styles.searchInput}
          />
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
                <th>Estado</th>
                <th>Organizador</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Limpieza de Playa</td>
                <td>Jornada de limpieza en la playa local</td>
                <td>14/8/2023</td>
                <td>16/8/2023</td>
                <td className={styles.activeStatus}>Activo</td>
                <td>Juan Pérez</td>
                <td>
                  <button className={styles.editButton} onClick={() => handleOpenModal({ title: "Proyecto 1", description: "Descripción", startDate: "2023-01-01", endDate: "2023-01-10" })}>Editar</button>
                  <button className={styles.deleteButton}>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Taller de Reciclaje</td>
                <td>Enseñar técnicas de reciclaje a la comunidad</td>
                <td>3/11/2023</td>
                <td>N/A</td>
                <td className={styles.activeStatus}>Activo</td>
                <td>Ana García</td>
                <td>
                  <button className={styles.editButton}>Editar</button>
                  <button className={styles.deleteButton}>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Reforestación Urbana</td>
                <td>Plantar árboles en zonas urbanas</td>
                <td>4/10/2023</td>
                <td>6/10/2023</td>
                <td className={styles.activeStatus}>Activo</td>
                <td>Juan Pérez</td>
                <td>
                  <button className={styles.editButton}>Editar</button>
                  <button className={styles.deleteButton}>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={(data) => console.log(data)}
        initialData={editData}
      />
    </div>
  );
};

export default DashboardPage;
