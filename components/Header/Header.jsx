import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import Logo from '../../public/LogoWorldTrip.svg';

const Header = ({ isHomepage }) => {
  return (
    <Flex bgColor="white" justify="center" h={["50px", "100px"]} align="center">
      {!isHomepage &&
        <Box position="absolute" left={["10px", "100px"]}>
          <Link href="#">
            <ChevronLeftIcon color="Dark.700" w="50px" h="50px" />
          </Link>
        </Box>}
      <Image src={Logo} />
    </Flex>
  );
};

export default Header;