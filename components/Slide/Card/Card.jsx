import { Flex, Heading, Text, Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Card = ({ cardImg, cardHeading, cardText, cardLink }) => {
  return (
    <Flex h="100%" w="100%" bgImage={cardImg}>
      <VStack justify="center" align="center" width="100vw" h="100%" textAlign="center">
        <Link href={cardLink}>
          <a style={{ zIndex: '1' }}>
            <Heading zIndex="1" fontWeight="bold" fontSize={["2xl", "3xl", "4xl"]} color="gray.100">
              {cardHeading}
            </Heading>
            <Text zIndex="1" fontWeight="bold" fontSize={["0.5rem", "1xl", "2xl"]}>
              {cardText}
            </Text>
          </a>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Card;