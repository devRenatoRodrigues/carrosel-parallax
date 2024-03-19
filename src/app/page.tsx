import { useState, useEffect } from 'react';
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

export default function Home() {
  const [heroes, setHeroes] = useState<{ data: IHeroData[] } | null>(null);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const heroesData = await getHeroes();
        setHeroes(heroesData);
      } catch (error) {
        console.error('Failed to fetch heroes:', error);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <main className={styles.main}>
      {heroes ? (
        <HeroesList heroes={heroes.data} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
