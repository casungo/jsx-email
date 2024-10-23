// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://jsx.email/',
  integrations: [
    starlight({
      title: 'JSX email',
      social: {
        github: 'https://github.com/shellscape/jsx-email',
        discord: 'https://discord.gg/FywZN57mTg'
      },
      logo: {
        replacesTitle: true,
        src: '@assets/logo-hor.svg'
      },
      editLink: {
        baseUrl: 'https://github.com/shellscape/jsx-email/edit/main/'
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 4
      },
      sidebar: [
        {
          label: 'Getting started',
          autogenerate: { directory: 'getting-started' }
        },
        { label: 'Email Samples', link: 'https://samples.jsx.email/', badge: 'link' },
        {
          label: 'Upgrade to',
          autogenerate: { directory: 'upgrade' }
        },
        {
          label: 'Core',
          autogenerate: { directory: 'core' }
        },
        {
          label: 'Plugins',
          autogenerate: { directory: 'plugins' }
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' }
        }
      ],
      credits: true,
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://jsx.email/og.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'JSX email'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content: 'Develop standards compliant emails with JSX or TSX'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://jsx.email/og.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'JSX email Docs'
          }
        }
      ]
    })
  ]
});
