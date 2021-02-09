import Head from "next/head";
import HeroCard from "../components/HeroCard";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar />
      <HeroCard />

      
      <footer className={styles.footer}>
        <h3>William Palomino</h3>
      </footer>
    </div>
  );
}
