import React from 'react';
import { SiteCard, SiteCardProps } from './SiteCard';
import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';

// import Airtable from 'airtable';

function SiteGrid({ ...rest }) {
  // get data from src/examples.json
  const examples: SiteCardProps[] = require('../data/websites.json');

  return (
    <SimpleGrid
      mb={12}
      rowGap={7}
      columnGap={7}
      minChildWidth={{ base: '100%', md: '40%', lg: '30%' }}
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
                links={example.links}
                desc={example.desc}
                lang={example.lang.map(io => io)}
                img={example.img}
                {...rest}
              />
            </Box>
          </GridItem>
        ))}
    </SimpleGrid>
  );
}

export default SiteGrid;
