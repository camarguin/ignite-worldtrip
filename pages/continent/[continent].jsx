import { Flex, Container } from '@chakra-ui/react';
import React from 'react';
import BannerCategory from '../../components/BannerCategory/BannerCategory';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';

const Continent = () => {
  return (
    <Flex direction="column">
      <Header />
      <BannerCategory continentName="Europe" continentImg="url(/europePage.png)" />
      <Content />
      <Flex>


      </Flex>
    </Flex>
  );
};

export default Continent;