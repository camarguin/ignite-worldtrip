import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import yellowDot from '../../public/dotMobile.svg'

const Category = ({ icon, text }) => {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Flex direction={["row", "column"]} align="center" justify="center" padding="10px">
      {!isMobile ? <Image src={yellowDot} /> : <Image src={icon} />}
      <Text
        color="Dark.700"
        fontWeight="semibold"
        fontSize="medium"
        py="5"
      >
        {text}
      </Text>

    </Flex>
  );
};

export default Category;