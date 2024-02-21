import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";


const page = async () => {
  await new Promise(resolve=>setTimeout(resolve,2000))
  const url = process.env.Rapid_key;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d95ebbc835mshf0e63ed83513e45p18dc89jsnd4b76f017221",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and Movies </h1>
          <div className={styles.card_section}>
            {main_data.map((curr) => {
              return <MovieCard KEY={curr.id} {...curr} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
