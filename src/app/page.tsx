import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";

async function getHeroes(): Promise<{ data: IHeroData[] }> {
  const response = await fetch(`http://localhost:3000/api/heroes`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
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
