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
        Tiamat is a SSR character from the Odd Odd element who is part of the Leiboz Life faction. The character is also known by the Abyssal Nightmare title.
      </p>

      <h3>Profile</h3>
      <p>
        To learn more about Tiamat check the sections below. Use the tabs to quickly switch to the kind of information you're looking for.
      </p>

      <h3>Stats (Lvl 50)</h3>
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

      <h3>Skills</h3>
      <p>Here are Tiamat's skills:</p>
      <ul>
        <li><strong>Skill 1:</strong> Thunder Spear</li>
        <li><strong>Skill 2:</strong> Seal of Life</li>
        <li><strong>Skill 3:</strong> Eternity</li>
        <li><strong>Skill 1 (Alt):</strong> Purge Day</li>
      </ul>

      <h3>Dupes</h3>
      <p>Tiamat dupes information aren't available yet. They will be added soon!</p>

      {/* Ajoute un lien pour revenir à la page principale des personnages */}
      <Link href="/personnages">
        <a style={{ color: 'blue' }}>Retour à la liste des personnages</a>
      </Link>
    </div>
  );
};

export default Tiamat;
