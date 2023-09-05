import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';

const FeatureList = [
  {
    title: 'Latest version',
    description: 'Indev',
  },
  {
    title: 'Focus on What Matters',
    description: 'indev',
  },
  {
    title: 'Powered by React',
    description: 'indev',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

async function getVersion() {
  try {
    let data = await axios.get('https://registry.npmjs.com/oxi.js');
    return data.data['dist-tags'].latest
  } catch (e) {
    return e.message;
  }
}

export default function HomepageFeatures() {
  const [latestVersion, setLatestVersion] = useState('');

  useEffect(() => {
    getVersion().then((version) => {
      setLatestVersion(version);
    });
  }, []);

  FeatureList[0].description = latestVersion || 'N/A';
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
