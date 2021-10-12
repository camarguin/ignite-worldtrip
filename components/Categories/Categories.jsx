import { Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import cocktailIcon from '../../public/cocktailIcon.svg'
import surfIcon from '../../public/surfIcon.svg'
import buildingIcon from '../../public/buildingIcon.svg'
import museumIcon from '../../public/museumIcon.svg'
import earthIcon from '../../public/earthIcon.svg'
import Category from './Category';

const Categories = () => {

  return (
    <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(5, 1fr)"]}
      gap={[1, 6]}
      align="center"
      w="100%"
      mx="auto"
      // my="100px"
      padding="0px 90px"
      mt={["18", "32"]}
      justifyContent="space-between"
    >
      <GridItem>
        <Category icon={cocktailIcon} text="Night Life" />
      </GridItem>
      <GridItem>
        <Category icon={surfIcon} text="Beach" />
      </GridItem>
      <GridItem>
        <Category icon={buildingIcon} text="Modern" />
      </GridItem>
      <GridItem>
        <Category icon={museumIcon} text="Classic" />
      </GridItem>
      <GridItem colSpan={[2, 2, 1]}>
        <Category icon={earthIcon} text="and More..." />
      </GridItem>
    </Grid>
  );
};

export default Categories;