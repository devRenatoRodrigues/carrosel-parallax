import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroes(): Promise<{ data: IHeroData[] }> {
  const response = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}


export default async function Home() {
  const heroes = await getHeroes();

  if (!heroes.data) return (
    <h1>Failed!</h1>
  )

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
