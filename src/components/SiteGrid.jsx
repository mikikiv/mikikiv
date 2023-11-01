import React from 'react';
import SiteCard from './SiteCard';
import { VStack, Box } from '@chakra-ui/react';

// import Airtable from 'airtable';

function SiteGrid({ ...rest }) {
  // get data from airtable
  // Airtable.configure({ apiKey: process.env.AIRTABLE_SECRET_KEY });

  const examples = [
    {
      id: 3,
      name: 'PetSitting Website',
      url: 'https://home.taylerandmikey.com/',
      desc: 'Built with React components with Docusaurus, a simple website about how a guest would watch my pets',
      lang: ['React'],
      urlShort: 'Home.TaylerAndMikey.com',
      img: '/sitePhotos/petsite.png',
    },
    {
      id: 4,
      name: 'Youth Track Club',
      url: 'https://amazondistanceproject.org/',
      desc: 'A Wordpress site for managing youth sport team',
      lang: ['Wordpress'],
      urlShort: 'AmazonDistanceProject.org',
      img: '/sitePhotos/adp.png',
    },
    {
      id: 2,
      name: 'CareMatey',
      url: 'https://carematey.com/',
      desc: 'A web application for pet parents to store their pet care information',
      lang: ['React', 'Typescript', 'Nextjs', 'Chakra-ui', 'Stripe', 'Prisma'],
      urlShort: 'carematey.com',
      img: '/sitePhotos/carematey.png',
    },
    {
      id: 1,
      name: 'QuickLorem.dev',
      url: 'https://quicklorem.dev/',
      desc: 'The fastest tool for getting lorem ipsum. A browser extension and webtool.',
      lang: ['React', 'Typescript', 'Nextjs', 'Mantine', 'Chrome Extensions'],
      urlShort: 'quicklorem.dev',
      url2: 'https://chrome.google.com/webstore/detail/aliasipsum/gpbdnbechbkbfbdbhcbllejhgggnmena',
      urlShort2: 'Chrome Extensions',
      repo: 'https://github.com/mikikiv/quicklorem',
      img: '/sitePhotos/quicklorem.png',
    },
  ];

  return (
    <VStack {...rest} mb={12} columns={2} rowGap={7} columnGap={7}>
      {examples
        .sort((a, b) => a.id - b.id)
        .map(example => (
          <Box>
            <SiteCard
              id={example.id}
              name={example.name}
              url={example.url}
              url2={example.url2}
              desc={example.desc}
              lang={example.lang.map(io => io)}
              urlShort={example.urlShort}
              urlShort2={example.urlShort2}
              img={example.img}
              repo={example.repo}
            />
          </Box>
        ))}
    </VStack>
  );
}

export default SiteGrid;
