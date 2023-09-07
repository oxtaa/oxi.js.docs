import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const copyText = () => {
  navigator.clipboard.writeText(`npm install oxi.js`);
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{'oxi.js'}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" href="https://npmjs.com/package/oxi.js">
            NPM page
          </Link>
          <Link className="button button--secondary button--lg" href="https://github.com/oxtaa/oxi.js">
            GitHub
          </Link>
        </div>
        <div className={styles.buttons}>
          <Button
            style={{border:'1px black',borderRadius:'4px',backgroundColor:'#808080'}}
            
variant="outlined"
            onClick={copyText}>
            npm install oxi.js
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="oxi.js - An aoi.js v5.5.5 fork that adds extra functions and updates important stuff">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
