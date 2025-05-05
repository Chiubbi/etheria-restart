// pages/personnages/tiamat.js
import Link from 'next/link';

const Tiamat = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tiamat</h1>
      <img
        src="https://www.prydwen.gg/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp"
        alt="Tiamat"
        style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
      />
      
      <h2>Introduction</h2>
      <p>
        Tiamat est un personnage SSR de l'élément Odd Odd, appartenant à la faction Leiboz Life. Ce personnage est également connu sous le titre d'Abyssal Nightmare.
      </p>

      <h3>Profil</h3>
      <p>
        Pour en savoir plus sur Tiamat, consultez les sections ci-dessous. Utilisez les onglets pour passer rapidement au type d'information que vous recherchez.
      </p>

      <h3>Statistiques (Niveau 50)</h3>
      <ul>
        <li>HP: 22815</li>
        <li>DEF: 830</li>
        <li>ATK: 943</li>
        <li>SPD: 122</li>
        <li>CRIT Rate: 18%</li>
        <li>CRIT DMG: 150%</li>
        <li>Effect ACC: 0%</li>
        <li>Effect RES: 20%</li>
      </ul>

      <h3>Compétences</h3>
      <p>Voici les compétences de Tiamat :</p>
      <ul>
        <li><strong>Compétence 1:</strong> Thunder Spear</li>
        <li><strong>Compétence 2:</strong> Seal of Life</li>
        <li><strong>Compétence 3:</strong> Eternity</li>
        <li><strong>Compétence 1 (Alt):</strong> Purge Day</li>
      </ul>

      <h3>Dupes</h3>
      <p>Les informations sur les dupes de Tiamat ne sont pas encore disponibles. Elles seront ajoutées bientôt !</p>

      {/* Lien pour revenir à la page principale des personnages */}
      <Link href="/personnages">
        <a style={{ color: 'blue' }}>Retour à la liste des personnages</a>
      </Link>
    </div>
  );
};

export default Tiamat;
