import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import axios from 'axios';

const FeatureList = [
  {
    title: 'Latest Version',
	subtitle: undefined,
    description: 'Indev',
  },
  {
    title: 'Downloads',
	subtitle: '(last week)',
    description: 'indev',
  },
  {
    title: 'Downloads',
	subtitle: '(all time)',
    description: 'indev',
  },
];

function Feature({title, description, subtitle}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h1>{title}</h1>
		<h3>{subtitle}</h3>
        <p style="font-size:20px">{description}</p>
      </div>
    </div>
  );
}

async function getVersion() {
  try {
    const version = await axios.get('https://registry.npmjs.com/oxi.js');
	const downloadsA = await axios.get('https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/oxi.js');
	const downloadsLW = await axios.get('https://api.npmjs.org/downloads/point/last-week/oxi.js');
    return {
		version: version.data['dist-tags'].latest,
		downloadsA = downloadsA.downloads.reduce((accumulator, currentValue) => accumulator + currentValue.downloads, 0),
		downloadsLW = downloadsLW.downloads
	}
  } catch (e) {
    return {
		version: 'N/A',
		downloadsA: 'N/A',
		downloadsLW: 'N/A'
	}
  }
}

export default async function HomepageFeatures() {
  const [latestVersion, setLatestVersion] = useState('N/A');
  const [downloadsAll, setDownloadsAll] = useState('N/A');
  const [downloadsLast, setDownloadsLast] = useState('N/A');

  useEffect(() => {
    getVersion().then((data) => {
      setLatestVersion(data.version);
	  setDownloadsAll(data.downloadsA);
	  setDownloadsLast(data.downloadsLW);
    });
  }, []);

  FeatureList[0].description = latestVersion || 'N/A';
  FeatureList[1].description = downloadsAll || 'N/A';
  FeatureList[2].description = downloadsLast || 'N/A';
  return (
    <section className={styles.features}>
      <div className="container">
	  <h1 style="font-size:35px;">Package Stats</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
