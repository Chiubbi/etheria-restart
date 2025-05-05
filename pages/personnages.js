import Layout from '../components/layout';
import styles from '../styles/Personnages.module.css'; // Ajoute un fichier CSS pour les styles

const Personnages = () => {
  return (
    <Layout>
      <h1>Les Personnages d'Etheria Restart</h1>
      <p>Découvrez les personnages disponibles dans Etheria Restart :</p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/images/dokidoki.jpg" alt="Dokidoki" className={styles.cardImage} />
          <h3>Dokidoki</h3>
          <p>Meilleur soigneur du jeu, essentiel pour maintenir vos alliés en vie pendant les combats.</p>
        </div>
        <div className={styles.card}>
          <img src="/images/lily.jpg" alt="Lily" className={styles.cardImage} />
          <h3>Lily</h3>
          <p>Puissante en soutien, Lily peut améliorer les capacités de vos autres personnages.</p>
        </div>
        <div className={styles.card}>
          <img src="/images/heinrich.jpg" alt="Heinrich" className={styles.cardImage} />
          <h3>Heinrich</h3>
          <p>Fort en PVE, Heinrich est un excellent tank pour prendre des coups et protéger l'équipe.</p>
        </div>
        <div className={styles.card}>
          <img src="/images/lingluo.jpg" alt="Lingluo" className={styles.cardImage} />
          <h3>Lingluo</h3>
          <p>Soigneur et débuffeur, Lingluo est idéal pour affaiblir l'ennemi tout en soignant ses alliés.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Personnages;
