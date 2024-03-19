import styles from './page.module.scss';
import HeroesList from '@/components/HeroesList';
import { IHeroData } from '@/interfaces/heroes';

async function getHeroes(): Promise<{ data: IHeroData[] }> {
  const response = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  if (!response.ok) {
    throw new Error(`Failed to request heroes list: ${process.env.DOMAIN_ORIGIN}`);
  }
  return response.json();
}

export async function getServerSideProps() {
  try {
    const heroes = await getHeroes();
    return { props: { heroes } };
  } catch (error) {
    console.error('Failed to fetch heroes:', error);
    return { props: { heroes: null } };
  }
}

export default function Home({ heroes }: { heroes: IHeroData[] | null }) {
  return (
    <main className={styles.main}>
      {heroes ? (
        <HeroesList heroes={heroes} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
