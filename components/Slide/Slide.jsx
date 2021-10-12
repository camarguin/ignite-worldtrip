import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import Card from './Card/Card';

SwiperCore.use([Navigation, Pagination, A11y])


const Slide = () => {
  return (
    <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000
        }}
        style={{
          width: '100%',
          flex: '1'
        }}
      >
        <SwiperSlide>
          <Card cardHeading="Europe" cardText="The oldest continent" cardImg="url(/Europe.png)" cardLink="/continent/europe" />
        </SwiperSlide>
        <SwiperSlide>
          <Card cardHeading="Asia" cardText="Great continent for food" cardImg="url(/Asia.png)" cardLink="/continent/asia" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Slide;