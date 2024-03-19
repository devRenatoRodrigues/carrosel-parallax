import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

import HeroesJson from "@/app/api/heroes/heroes.json";

async function getHeroes(): Promise<{ data: IHeroData[] | any }> {
  const response = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  if (!response.ok) {
    return { data: HeroesJson };
  }
  return response.json();
}


export default async function Home() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
