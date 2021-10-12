import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const City = ({ cityImg, cityName, cityCountry, cityCountryIcon }) => {
  return (
    <Flex direction="column" maxW="250px" maxH="279px" borderRadius="4px">
      <Image src={cityImg} />
      <Flex direction="row" width="100%" border="1px" borderColor="yellow.300" borderTop="0">
        <Box width="80%" p="6">
          <Heading fontSize="2xl" fontWeight="500" color="Dark.700">
            {cityName}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {cityCountry}
          </Text>
        </Box>
        <Box display="flex" justify="center" alignItems="center">
          <Image src={cityCountryIcon} width="30px" h="30px" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default City;