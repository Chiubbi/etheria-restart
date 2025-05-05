// pages/personnages/tiamat.js
import Link from 'next/link';

const Tiamat = () => {
  return (
    <div>
      <h1>Tiamat</h1>
      <img
        src="https://www.prydwen.gg/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp"
        alt="Tiamat"
        style={{ width: '150px', height: 'auto', borderRadius: '8px' }}
      />
      <p>
        Introduction<br />
        Tiamat is a SSR character from the Odd Odd element who is part of the Leiboz Life faction. The character is also known by the Abyssal Nightmare title.<br />
        To learn more about Tiamat check the sections below. Use the tabs to quickly switch to the kind of information you're looking for.
      </p>
      <h2>Profile</h2>
      <p>Some profile information about Tiamat...</p>
      <Link href="/personnages">
        <a>Retour à la liste des personnages</a>
      </Link>
    </div>
  );
};

export default Tiamat;
