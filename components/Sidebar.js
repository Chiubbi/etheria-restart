// components/Sidebar.js
import Link from 'next/link';
import styles from './Sidebar.module.css'; // On va aussi créer un fichier CSS pour le style

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Catégories</h2>
      <ul>
        <li><Link href="/personnages">Personnages</Link></li>
        <li><Link href="/tutoriels">Tutoriels</Link></li>
        <li><Link href="/guide">Guide</Link></li>
        {/* Ajoute d'autres liens selon tes besoins */}
      </ul>
    </div>
  );
};

export default Sidebar;
