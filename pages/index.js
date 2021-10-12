import { Flex, Text } from '@chakra-ui/react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Slide from '../components/Slide/Slide'
import Categories from '../components/Categories/Categories'
import Separator from '../components/Separator/Separator'


export default function Home() {
  return (
    <Flex direction="column" bgColor="white">
      <Header isHomepage />
      <Banner />
      <Categories />
      <Separator />
      <Text align="center" paddingBottom="100px" fontSize="36px" fontWeight="500" color="Dark.700">Let's go? <br /> So choose your continent</Text>
      <Slide />

    </Flex>
  )
}
