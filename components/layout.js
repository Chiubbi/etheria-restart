import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', padding: '10px', borderRight: '2px solid #e8e8e8' }}>
        <h2>Catégories</h2>
        <ul>
          <li>
            <Link href="/">Page principale</Link>
          </li>
          <li>
            <Link href="/characters/Tiamat">Tiamat</Link>
          </li>
          {/* Ajouter d'autres personnages ici */}
        </ul>
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
