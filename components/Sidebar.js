import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/personnages">
            <a>Personnages</a>
          </Link>
        </li>
        {/* Ajoute d'autres liens si nécessaire */}
      </ul>
    </div>
  );
};

export default Sidebar;
