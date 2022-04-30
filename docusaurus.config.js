// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'santy',
  tagline: 'Dinosaurs are cool',
  url: 'https://github.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.logo.png',
  organizationName: 'santy-ramirez', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch:'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath:'/',
          showReadingTime: true,
          blogSidebarCount: 'ALL'
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
     /*algolia: {
        contextualSearch: true,
        appId:'YOU_APP_ID',
      },**/
      navbar: {
       
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',

        },
        items: [
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'blog',
                to: '/blog/',
              },
            ],
          },
          {
            title: 'mis redes sociales',
            items: [
              {
                label: 'medium',
                href: 'https://google.com',
              },
              {
                label: 'linkedin',
                href: 'https://linkedin.com/in/santiago-ramirez',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/santhy_Ramirez',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/santy-ramirez',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My BLOG, Inc. santiago Ramirez.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
