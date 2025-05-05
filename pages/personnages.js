// pages/personnages.js
import Link from 'next/link';

const Personnages = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des Personnages</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Link href="/personnages/tiamat">
          <a style={{ textAlign: 'center', margin: '10px', display: 'block' }}>
            <img
              src="https://www.prydwen.gg/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp"
              alt="Tiamat"
              style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
            />
            <p>Tiamat</p>
          </a>
        </Link>
        {/* Ajoute ici d'autres personnages de la même manière */}
      </div>
    </div>
  );
};

export default Personnages;
