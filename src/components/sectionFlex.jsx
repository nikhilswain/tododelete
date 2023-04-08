import React from 'react';
import { Box, Flex, Title, Text, Image } from '@mantine/core';
import '../styles/sectionFlex.css';
import box5Image from '../assets/qualityBox5.svg';
import box4Image from '../assets/getTeamBox4.svg';
import box3Image from '../assets/customizedBox3.svg';
import box2Image from '../assets/trackBox2.svg';
import box1Image from '../assets/targetBox1.svg';

function SectionFlex() {
  return (
    <Box
      className='container'
      py={20}
      sx={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Flex
        className='boxWrapper flexRowOne'
        sx={{
          width: '100%',
          height: 'calc(25.34722*1vw)',
        }}
      >
        <Box
          className=' rowOneheaderBox'
          sx={{ width: '85%', height: 'calc(25.34722*1vw)' }}
          p={'calc(5.55556*1vw) calc(6.94444*1vw) calc(2.77778*1vw)'}
        >
          <Title
            order={1}
            mb={20}
            color='#001b5d'
            className='headerBoxTitle'
            sx={{
              fontWeight: 500,
              fontSize: 'calc(3.05556*1vw)',
            }}
          >
            {' '}
            Why The Industry Chooses Clickdee?
          </Title>
          <Text
            className='headerBoxContent'
            sx={{
              fontSize: 'calc(1.04167*1vw)',
            }}
          >
            We understand performance marketing from every angle and every stage of the funnel. Our clients trust that
            we know what metrics move their business towards growth. Our publisher and affiliate partners know that we
            make maximum revenue and ROAS a main focus when growing our partnerships.
          </Text>
        </Box>
        <Flex
          className='flexResonponsive'
          sx={{
            width: '100%',
            height: 'calc(25.34722*1vw)',
            justifyContent: 'initial',
          }}
        >
          <Box
            className='box box-withripple rowOneBoxTwo'
            sx={{
              width: '50%',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'rgba(153, 204, 255, 0.1)',
              height: 'calc(25.34722*1vw)',
            }}
            p={'2rem'}
          >
            <Box className='boxChildWrapper'></Box>
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
                  marginBottom: 30,
                }}
              />
              <Box mb={20}>
                <Title className='title' order={3}>
                  Choose Your{' '}
                </Title>
                <Title className='title' order={3}>
                  Local Targetting
                </Title>
              </Box>
              <Text
                className='boxContent'
                sx={{
                  opacity: 0,
                }}
                size={'sm'}
              >
                Our targeted and tracked calls are tailored to your business needs, audience, and geolocation.
              </Text>
            </Box>
          </Box>
          <Box
            className='box box-withshadow rowOneBoxTwo'
            sx={{ width: '50%', position: 'relative', overflow: 'hidden', height: 'calc(25.34722*1vw)' }}
            p={'2rem'}
          >
            <Box className='boxChildWrapper'></Box>
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
                  marginBottom: 30,
                }}
              />
              <Box mb={20}>
                <Title className='title' order={3}>
                  Track Your{' '}
                </Title>
                <Title className='title' order={3}>
                  Conversion
                </Title>
              </Box>
              <Text
                className='boxContent'
                sx={{
                  opacity: 0,
                }}
                size={'sm'}
              >
                We use the most progressive tracking and analytics technology to ensure that every call can be tracked
                and evaluated.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex
        className='boxWrapper flexRowTwo'
        justify={'flex-end'}
        sx={{
          width: '100%',
          height: 'calc(25.34722*1vw)',
        }}
      >
        <Box
          className='box box-withripple rowOneBoxTwo'
          sx={{
            width: '25%',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(153, 204, 255, 0.1)',
            height: 'calc(25.34722*1vw)',
          }}
          p={'2rem'}
        >
          <Box className='boxChildWrapper'></Box>
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
                marginBottom: 30,
              }}
            />
            <Box mb={20}>
              <Title className='title' order={3}>
                Customized
              </Title>
              <Title className='title' order={3}>
                Campaigns
              </Title>
            </Box>
            <Text
              className='boxContent'
              sx={{
                opacity: 0,
              }}
              size={'sm'}
            >
              Audiences, budgets, and goals: you decide the criteria for your digital ad campaign, and we'll do the
              rest.
            </Text>
          </Box>
        </Box>
        <Box
          className='box box-withshadow rowOneBoxTwo'
          sx={{ width: '25%', position: 'relative', overflow: 'hidden', height: 'calc(25.34722*1vw)' }}
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
                marginBottom: 30,
              }}
            />
            <Box mb={20}>
              <Title className='title' order={3}>
                Get Dedicated
              </Title>
              <Title className='title' order={3}>
                Support Team
              </Title>
            </Box>
            <Text
              className='boxContent'
              sx={{
                opacity: 0,
              }}
              size={'sm'}
            >
              We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that
              have been vetted.
            </Text>
          </Box>
        </Box>
        <Box
          className='box box-withripple rowOneBoxTwo'
          sx={{
            width: '25%',
            height: 'calc(25.34722*1vw)',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'rgba(153, 204, 255, 0.1)',
          }}
          p={'2rem'}
        >
          <Box className='boxChildWrapper'></Box>
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
                marginBottom: 30,
              }}
            />
            <Box mb={20}>
              <Title className='title' order={3}>
                Quality
              </Title>
              <Title className='title' order={3}>
                Assurance
              </Title>
            </Box>
            <Text
              className='boxContent'
              sx={{
                opacity: 0,
              }}
              size={'sm'}
            >
              We constantly monitor quality control! Our affiliate network of publishers are digital ad experts that
              have been vetted.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default SectionFlex;
