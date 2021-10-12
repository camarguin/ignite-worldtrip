import { Flex, Text, Box, VStack, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Airplane from '../../public/Airplane.svg';

const Banner = () => {
  return (
    <Flex
      bgImage="url(./HomepageBannerImg.jpg)"
      h={["163px", "258px", "258px", "335px"]}
      alignItems="center"
      bgPosition={["100% 20%", "100% 20%", "100% 25%"]}
      p={["0px 16px", "0px 100px"]}
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "18", "35"]}
      >
        <Box position="absolute" right="100px" top="176px" display={["none", "none", "none", "block"]}>
          <Image src={Airplane} />
        </Box>
        <VStack alignItems="flex-start" padding="10px 0px" spacing={["2", "8"]} w={["100%", "100%", "70%", "50%"]}>
          <Heading color="white" fontWeight="600" fontSize={["xl", "2l", "2xl", "4xl"]}>
            5 Continents,<br /> infinites possibilities
          </Heading>
          <Text color="white" fontWeight="300" fontSize={["sm", "md", "xl"]}>
            It's time to take the trip you've always dreamed of on paper.
          </Text>
        </VStack>

      </Flex>
    </Flex>
  );
};

export default Banner;