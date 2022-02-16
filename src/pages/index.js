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
      <header className={clsx('hero hero--primary my_hero', styles.heroBanner)}>
          <div className="container">
              <h4 className="my_title">
                  <Translate
                      id="Make Digital Financing Easy!"
                  >Make Digital Financing Easy!</Translate>
              </h4>
              <h3 className="my_subtitle">
                  <Translate
                      id="Welcome to TbonusPro"
                  >Welcome to TbonusPro!</Translate>
              </h3>
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
        {/* <HomepageFeatures /> */}
          <HomePageListFAQ />
      </main>
    </Layout>
  );
}
