import React from 'react'
import './Popup.css'
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ChevronRightIcon, CheckIcon,} from '@chakra-ui/icons';
import { Link as RouteLink, Link } from 'react-router-dom';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        { props.children }
        
        <Box
          boxShadow="lg"
          p={['4', '8']}
          rounded="lg"
          bg="background"
          mx="auto"
          /*outline={"2px solid lightgreen"}*/
        >
          <Heading fontFamily={'subheading'} align={'center'}>
            Empress
          </Heading>
          <Text align={'center'}>$15.99/mo</Text>
          <br></br>

          <RouteLink to="/member-form?member=empress">
            <Button
              component={Link}
              to="../member-form/MemberForm"
              backgroundColor={'primary'}
              color={'white'}
              w={['full']}
              aria-label="member-form free"
            >
              Get Started
              <ChevronRightIcon />
            </Button>
          </RouteLink>

          <VStack
            spacing={'3'}
            mt={'40px'}
            align={['flex-start', 'left']}
            w="full"
          >
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> Queen Membership</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> Unlimited Access to Fem Entity Intro Courses</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> 50% off selected Fem Entity events</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> Early registration to workshops and events</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <CheckIcon color={'accent2'} />
              <Text> Monthly LIVE Group calls</Text>
            </HStack>
            <HStack alignItems={['flex-start', 'left']} w={'full'}>
              <ChevronRightIcon/>
              <Text> More information coming soon! </Text>
            </HStack>
            
          </VStack>
        </Box>

      </div>
    </div>
  ) : "";
}

export default Popup
