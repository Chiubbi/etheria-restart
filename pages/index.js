import Layout from './layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <h1>Bienvenue sur Etheria Restart Guide !</h1>
      <p>Voici les personnages d'Etheria Restart traduits en français :</p>

      <ul>
        <li><Link href="/characters/Tiamat"><strong>Tiamat</strong></Link> - Meilleur soigneur</li>
        {/* Ajouter d'autres personnages ici */}
      </ul>
    </Layout>
  );
};

export default Home;
