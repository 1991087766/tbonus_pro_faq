import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import HomePageListFAQ from "../components/HomePageAnnouncement";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
              <h1 className="hero__title">
                  <Translate
                      id="Welcome to TbonusPro"
                  >Welcome to TbonusPro!</Translate>
              </h1>
              <p className="hero__subtitle">
                  <Translate
                      id="My Slogan"
                  >My Slogan</Translate>
              </p>
          </div>
      </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`TbonusPro FAQ`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
          <HomePageListFAQ />
      </main>
    </Layout>
  );
}
