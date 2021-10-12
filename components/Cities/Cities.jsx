import { Container, Heading, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import City from './City';
import ukImg from '../../public/UnitedKingdom.png';
import FranceImg from '../../public/FranceFlag.png';
import londonImg from '../../public/London.png';
import parisImg from '../../public/Paris.png';
import RomeImg from '../../public/Rome.png';
import ItalyImg from '../../public/Italy.png';
import NetherlandsImg from '../../public/Netherlands.png';
import PragaImg from '../../public/Praga.png';
import CzechiaImg from '../../public/Czech.png';

const Cities = () => {
  return (
    <Container maxWidth p="10px 0px">
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10" color="Dark.700">Cities +100</Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <City cityImg={londonImg} cityName="London" cityCountry="United Kingdom" cityCountryIcon={ukImg} />
        </GridItem>
        <GridItem>
          <City cityImg={parisImg} cityName="Paris" cityCountry="France" cityCountryIcon={FranceImg} />
        </GridItem>
        <GridItem>
          <City cityImg={RomeImg} cityName="Rome" cityCountry="Italy" cityCountryIcon={ItalyImg} />
        </GridItem>
        <GridItem>
          <City cityImg={PragaImg} cityName="Praga" cityCountry="Czechia" cityCountryIcon={CzechiaImg} />
        </GridItem>
        <GridItem>
          <City cityImg={parisImg} cityName="Amsterdam" cityCountry="Netherlands" cityCountryIcon={NetherlandsImg} />
        </GridItem>
      </Grid>
    </Container >
  );
};

export default Cities;