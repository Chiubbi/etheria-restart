import styles from './layout.module.css';
import Link from 'next/link';  // Import de Link pour la navigation

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoBox}>
          {/* Remplace ceci par une image si tu veux */}
          <span>Logo</span>
        </div>
        <div className={styles.separator} />
        <h2>Catégories</h2>
        <ul>
          <li><Link href="/">Page principale</Link></li>
          <li><Link href="/personnages">Personnages</Link></li> {/* Lien vers la page Personnages */}
          <li><Link href="/">Tutoriels</Link></li>
          <li><Link href="/">Événements</Link></li>
        </ul>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
