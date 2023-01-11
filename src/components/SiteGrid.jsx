import React from 'react';
import SiteCard from './SiteCard';
import { VStack, Box } from '@chakra-ui/react';

function SiteGrid() {
  const examples = [
    {
      id: 1,
      name: 'PetSitting Website',
      url: 'https://home.taylerandmikey.com/',
      desc: 'Built with React components with Docusaurus, a simple website about how a guest would watch my pets',
      lang: ['React'],
      urlShort: 'Home.TaylerAndMikey.com',
      img: '/sitePhotos/petsite.png',
    },
    {
      id: 2,
      name: 'Youth Track Club',
      url: 'https://amazondistanceproject.org/',
      desc: 'A Wordpress site for managing youth sport team',
      lang: ['Wordpress'],
      urlShort: 'AmazonDistanceProject.org',
      img: '/sitePhotos/adp.png',
    },
    {
      id: 3,
      name: 'My Portfolio',
      url: 'https://www.mikikiv.com/',
      desc: 'A custom react website made with Chakra-UI to show my skills and projects',
      lang: ['React', 'Chakra-ui'],
      urlShort: 'mikikiv.com',
      img: '/sitePhotos/adp.png',
    },
  ];

  return (
    <VStack mb={12} columns={2} rowGap={7} columnGap={7}>
      {examples.map(example => (
        <Box>
          <SiteCard
            id={example.id}
            name={example.name}
            url={example.url}
            desc={example.desc}
            lang={example.lang.map(io => io)}
            urlShort={example.urlShort}
            img={example.img}
          />
        </Box>
      ))}
    </VStack>
  );
}

export default SiteGrid;
