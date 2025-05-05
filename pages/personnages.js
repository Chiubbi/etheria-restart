// pages/personnages.js
import Layout from '../layout'; // Assure-toi que le chemin est correct
import Link from 'next/link';
import styles from '../styles/personnages.module.css'; // Si tu utilises un CSS spécifique

const Personnages = () => {
  return (
    <Layout>
      <h1>Les Personnages</h1>
      <p>Découvrez les personnages disponibles dans Etheria Restart :</p>

      <div className={styles.characterList}>
        {/* Personnage 1 */}
        <div className={styles.characterCard}>
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
        </div>

        {/* Ajoute d'autres personnages ici de manière similaire */}
        {/* Exemple d'un autre personnage */}
        {/* <div className={styles.characterCard}>
          <Link href="/personnages/autre-personnage">
            <a style={{ textAlign: 'center', margin: '10px', display: 'block' }}>
              <img
                src="URL_DU_PERSONNAGE"
                alt="Nom Du Personnage"
                style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
              />
              <p>Nom Du Personnage</p>
            </a>
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};

export default Personnages;
