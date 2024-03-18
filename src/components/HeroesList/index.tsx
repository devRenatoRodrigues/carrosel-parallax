"use client";
import { spiderManFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./heroesList.module.scss"
import HeroPicture from "../HeroPicture";
import { motion } from "framer-motion"
import Link from "next/link";

interface IProps {
  heroes: IHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <motion.h1
        className={`${spiderManFont.className} ${styles.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Personagens
      </motion.h1>
      <motion.section
        className={styles.heroes}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {
          heroes.map((hero: IHeroData) => (
            <motion.div
              key={hero.id}
              className={styles.imageContainer}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/hero/${hero.id}`}>
                <HeroPicture hero={hero} />
              </Link>
            </motion.div>
          ))
        }
      </motion.section>
    </>
  );
}