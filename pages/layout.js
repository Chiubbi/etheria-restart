import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h2>Catégories</h2>
        <ul>
          <li>Personnages</li>
          <li>Tutoriels</li>
          <li>Événements</li>
        </ul>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
