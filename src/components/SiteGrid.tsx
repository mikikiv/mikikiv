import React from 'react';
import { SiteCard, SiteCardProps } from './SiteCard';
import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';

// import Airtable from 'airtable';

function SiteGrid({ ...rest }) {
  // get data from src/examples.json
  const examples: SiteCardProps[] = require('../examples.json');

  return (
    <SimpleGrid
      mb={12}
      rowGap={7}
      columnGap={7}
      minChildWidth={'500px'}
      {...rest}
    >
      {examples
        .filter(
          example => example.enabled !== false || example.enabled === undefined
        )
        .sort((a, b) => a.id - b.id)
        .map(example => (
          <GridItem>
            <Box {...rest}>
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
                {...rest}
              />
            </Box>
          </GridItem>
        ))}
    </SimpleGrid>
  );
}

export default SiteGrid;
