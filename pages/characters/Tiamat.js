import Link from 'next/link';
import Layout from '../layout';

const Tiamat = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src="https://www.prydwen.gg/static/386bd460ce80a8466f8f24bb457739d2/b26e2/Tiamat_card.webp" 
          alt="Tiamat" 
          style={{ width: '250px', marginBottom: '20px' }}
        />
        <h1>Tiamat</h1>
        <p><strong>Introduction</strong><br />
          Tiamat est un personnage SSR de l'élément Odd Odd et fait partie de la faction Leiboz Life. Elle est aussi connue sous le titre "Abyssal Nightmare".
        </p>

        <h2>Profil</h2>
        <p>Pour en savoir plus sur Tiamat, consultez les sections ci-dessous. Utilisez les onglets pour naviguer rapidement entre les informations.</p>

        <h3>Statistiques (Niveau 50)</h3>
        <table style={{ marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td><strong>HP</strong></td>
              <td>22815</td>
            </tr>
            <tr>
              <td><strong>DEF</strong></td>
              <td>830</td>
            </tr>
            <tr>
              <td><strong>ATK</strong></td>
              <td>943</td>
            </tr>
            <tr>
              <td><strong>SPD</strong></td>
              <td>122</td>
            </tr>
            <tr>
              <td><strong>CRIT Rate</strong></td>
              <td>18%</td>
            </tr>
            <tr>
              <td><strong>CRIT DMG</strong></td>
              <td>150%</td>
            </tr>
            <tr>
              <td><strong>Effect ACC</strong></td>
              <td>0%</td>
            </tr>
            <tr>
              <td><strong>Effect RES</strong></td>
              <td>20%</td>
            </tr>
          </tbody>
        </table>

        <h3>Compétences</h3>
        <h4>Compétence 1: Thunder Spear</h4>
        <p>Tiamat frappe l'ennemi avec sa lance, infligeant 2 frappes de dégâts égales à 10% de ses PV max. Consomme 8% de ses PV actuels à chaque frappe.</p>

        <h4>Compétence 2: Seal of Life</h4>
        <p>Établit un lien mental avec les alliés, consommant 25% de ses PV pour appliquer un bouclier et un soin sur tous les alliés.</p>

        <h4>Compétence 3: Eternity</h4>
        <p>Consomme 30% de ses PV pour infliger des dégâts à tous les ennemis et avec 50% de chances d'infliger le Taunt pendant un tour.</p>

        <Link href="/">Retour à la page principale</Link>
      </div>
    </Layout>
  );
};

export default Tiamat;
