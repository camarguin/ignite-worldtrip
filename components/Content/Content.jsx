import { Flex, Box, Text, Heading, Popover, Icon, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import React from 'react';
import Cities from '../Cities/Cities';

const Content = () => {
  return (
    <Flex direction="column" px={["10px", "20px", "100px"]} bgColor="white">
      <Flex direction={["column", "column", "row"]} justify="space-between" py={["10px", "50px"]}>
        <Box maxW={["100%", "600px"]}>
          <Text fontSize={["lg", "xl", "2xl"]} align="justify" color="Dark.700">
            Europe is by convention, one of the six continents in the world.
            Comprising the western peninsula of Eurasia,
            Europe is generally divided from Asia to the east by the watershed of the Ural Mountains,
            the Ural River, the Caspian Sea, the Caucasus, and the Black Sea to the southeast.
          </Text>
        </Box>
        <Flex align="center" justify="space-between" width={["100%", "100%", "40%"]}>
          <Box textAlign="center">
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
              50
            </Heading>
            <Text fontWeight="600" fontSize={["md", "xl"]} color="Dark.700">
              Countries
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
              60
            </Heading>
            <Text fontWeight="600" fontSize={["md", "xl"]} color="Dark.700">
              Languages
            </Text>
          </Box>
          <Box textAlign="center" >
            <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
              27
            </Heading>
            <Flex align="center">
              <Text fontWeight="600" fontSize={["md", "xl"]} color="Dark.700">
                Cities +100
              </Text>
              <Popover>
                <PopoverTrigger>
                  <span>
                    <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" />
                  </span>
                </PopoverTrigger>
                <PopoverContent bg="Dark.700" color="yellow.400">
                  <PopoverArrow bg="Dark.700" />
                  <PopoverCloseButton />
                  <PopoverBody fontSize="lg" fontWeight="400">
                    Paris, Canada, Chile, Brazil, United States, Taiwan
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Cities />
    </Flex>
  );
};

export default Content;