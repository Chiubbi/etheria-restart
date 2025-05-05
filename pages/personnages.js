import Link from 'next/link';

const Personnages = () => {
  return (
    <div>
      <h1>Liste des personnages</h1>
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
        {/* Ajoute d'autres personnages ici */}
      </div>
    </div>
  );
};

export default Personnages;
