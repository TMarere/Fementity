import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export default function Footer({ children, ...props }) {
  return (
    <Flex
      as="footer"
      padding={{ sm: '0.6rem', md: '0.5.80rem', lg: '1rem', xl: '1rem' }}
      height={'5em'}
      bg="background"
      py="5px"
      color="white"
      borderBottom="2px solid"
      borderBottomColor="accent"
      backgroundColor="#b97375"
      flexDirection="flex-row"
      justify={'space-evenly'}
      alignItems={'center'}
      {...props}
    >
      
        
            <ReactRouterLink to="/">
              <Text fontFamily={'heading'} fontSize={'xl'}>Terms of Use</Text>
            </ReactRouterLink>

            <ReactRouterLink to="/">
              <Text fontFamily={'heading'} fontSize={'xl'}>Privacy Policy</Text>
            </ReactRouterLink>

            <ReactRouterLink to="/About">
              <Text fontFamily={'heading'} fontSize={'xl'}>About Us</Text>
            </ReactRouterLink>

            <ReactRouterLink to="/About">
              <Text fontFamily={'heading'} fontSize={'xl'}>Contact Us</Text>
            </ReactRouterLink>
          
        
      
    </Flex>
  );
}
