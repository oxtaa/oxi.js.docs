import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function CopyToClipboardButton() {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = () => {
    const text = "npm install oxi.js";
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        return;
      }
    );
  };

  return (
    <div className={styles.copyButtonWrapper}>
      <div
        className={styles.copyContent}
        variant="contained"
        color="primary"
        size="large"
      >
        npm install oxi.js
        <button
          className={`${styles.copyIconButton}`}
          onClick={copyTextToClipboard}
          type="button"
        >
        </button>
      </div>
    </div>
  );
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
        </div>
        <div className={styles.copyButtonWrapper}>
              <CopyToClipboardButton />
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
