// React
import React from "react";

// Third party
import Head from 'next/head'

// Local
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import styles from '../styles/pages/Home.module.scss'
import { Countdown } from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move It - Matheus Garcia</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
