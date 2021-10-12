import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const BannerCategory = ({ continentName, continentImg }) => {
  return (
    <Flex
      align="center"
      justify={["center", "center", "flex-start"]}

      bgImage={continentImg}
      width="100%"
      height={["150px", "300px", "450px"]}
      px={["0", "0", "100"]}
      pt={["0", "0", "72"]}
    >
      <Heading>
        {continentName}
      </Heading>

    </Flex>
  );
};

export default BannerCategory;