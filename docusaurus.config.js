// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'oxi.js',
  tagline: 'An aoi.js v5.5.5 fork that adds extra functions and updates important stuff',
  url: 'https://oxi.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/LogoShort.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OxiProjects', // Usually your GitHub org/user name.
  projectName: 'oxi.js', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'oxi.js',
        logo: {
          alt: 'Logo',
          src: 'img/LogoShort.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/oxtaa/oxi.js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'External links',
            items: [
              {
                label: 'OxiProjects',
                href: 'https://github.com/oxijs',
              },
              {
                label: 'oxta!',
                href: 'https://github.com/oxtaa',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oxtaa/oxi.js',
              },
            ],
          },
        ],
        copyright: `Made by OxiProjects • ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
