import React, { useRef, useEffect, useState, useCallback } from 'react';

import { Box, Title, Text, Image } from '@mantine/core';
import box5Image from '../assets/qualityBox5.svg';
import box4Image from '../assets/getTeamBox4.svg';
import box3Image from '../assets/customizedBox3.svg';
import box2Image from '../assets/trackBox2.svg';
import box1Image from '../assets/targetBox1.svg';
import { Carousel } from '@mantine/carousel';

const HorizontalScroll = () => {
  const carouselRef = useRef(null);

  const handleWheel = useCallback(
    (e) => {
      if (carouselRef.current) {
        const { deltaX } = e;
        if (deltaX < 0) {
          carouselRef.current.onNextSlide();
        } else if (deltaX > 0) {
          carouselRef.current.onPreviousSlide();
        }
      }
    },
    [carouselRef]
  );

  useEffect(() => {
    const element = carouselRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleWheel]);
  return (
    <>
      <Box sx={{ height: '50vh', width: '100vw' }}></Box>
      <Box className=' rowOneheaderBox' sx={{ width: '85%', height: 'calc(25.34722*1vw)' }} p={'2rem'}>
        <Title
          order={1}
          mb={20}
          color='#001b5d'
          sx={{
            fontWeight: 500,
          }}
        >
          {' '}
          Why The Industry Chooses Clickdee?
        </Title>
        <Text>
          We understand performance marketing from every angle and every stage of the funnel. Our clients trust that we
          know what metrics move their business towards growth. Our publisher and affiliate partners know that we make
          maximum revenue and ROAS a main focus when growing our partnerships.
        </Text>
      </Box>
      <Box onWheel={handleWheel}>
        <Carousel
          {...handleWheel}
          ref={carouselRef}
          height={300}
          slideSize='70%'
          slideGap='md'
          align={'start'}
          withControls={false}
          withIndicators
          styles={{
            indicator: {
              backgroundColor: 'rgba(153, 204, 255, 0.8)',
            },
          }}
        >
          <Carousel.Slide>
            <Box
              className='rowOneBoxTwo'
              sx={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(153, 204, 255, 0.1)',
                height: '100%',
              }}
              p={'2rem'}
            >
              <Box
                sx={{
                  zIndex: 2,
                }}
                className='boxContentWrapper'
              >
                <Image
                  src={box1Image}
                  width={60}
                  sx={{
                    marginBottom: 10,
                  }}
                />
                <Box mb={20}>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Choose Your{' '}
                  </Title>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Local Targetting
                  </Title>
                </Box>
                <Text
                  sx={{
                    opacity: 1,
                  }}
                  size={'xs'}
                >
                  Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            {' '}
            <Box
              className='  rowOneBoxTwo'
              sx={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                backgroundColor: 'rgba(153, 204, 255, 0.1)',
              }}
              p={'2rem'}
            >
              <Box
                sx={{
                  zIndex: 2,
                }}
                className='boxContentWrapper'
              >
                <Image
                  src={box2Image}
                  width={60}
                  sx={{
                    marginBottom: 10,
                  }}
                />
                <Box mb={20}>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Track Your{' '}
                  </Title>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Conversion
                  </Title>
                </Box>
                <Text
                  sx={{
                    opacity: 1,
                  }}
                  size={'sm'}
                >
                  We use the most progressive tracking and analytics technology to ensure that every call can be tracked
                  and evaluated.
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            {' '}
            <Box
              className='   rowOneBoxTwo'
              sx={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(153, 204, 255, 0.1)',
                height: '100%',
              }}
              p={'2rem'}
            >
              <Box
                sx={{
                  zIndex: 2,
                }}
                className='boxContentWrapper'
              >
                <Image
                  src={box3Image}
                  width={60}
                  sx={{
                    marginBottom: 10,
                  }}
                />
                <Box mb={20}>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Customized
                  </Title>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Campaigns
                  </Title>
                </Box>
                <Text
                  sx={{
                    opacity: 1,
                  }}
                  size={'sm'}
                >
                  Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we'll do the
                  rest.
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            {' '}
            <Box
              className='   rowOneBoxTwo'
              sx={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                backgroundColor: 'rgba(153, 204, 255, 0.1)',
              }}
              p={'2rem'}
            >
              <Box className='boxChildWrapper  '></Box>
              <Box
                sx={{
                  zIndex: 2,
                }}
                className='boxContentWrapper'
              >
                <Image
                  src={box4Image}
                  width={60}
                  sx={{
                    marginBottom: 10,
                  }}
                />
                <Box mb={20}>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Get Dedicated
                  </Title>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Support Team
                  </Title>
                </Box>
                <Text
                  sx={{
                    opacity: 1,
                  }}
                  size={'sm'}
                >
                  We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that
                  have been vetted.
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box
              className='rowOneBoxTwo'
              sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(153, 204, 255, 0.1)',
              }}
              p={'2rem'}
            >
              <Box
                sx={{
                  zIndex: 2,
                }}
                className='boxContentWrapper'
              >
                <Image
                  src={box5Image}
                  width={60}
                  sx={{
                    marginBottom: 10,
                  }}
                />
                <Box mb={20}>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Quality
                  </Title>
                  <Title
                    order={5}
                    sx={{
                      fontWeight: 'bold',
                    }}
                    color='#001b5d'
                  >
                    Assurance
                  </Title>
                </Box>
                <Text
                  sx={{
                    opacity: 1,
                  }}
                  size={'sm'}
                >
                  We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that
                  have been vetted.
                </Text>
              </Box>
            </Box>
          </Carousel.Slide>
        </Carousel>
      </Box>
      <Box sx={{ height: '50vh', width: '100vw' }}></Box>
    </>
  );
};

export default HorizontalScroll;
