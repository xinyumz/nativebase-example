import { Link as SolitoLink } from 'solito/link'
import React from 'react'
import {
  Center,
  Image,
  HStack,
  Text,
  Heading,
  VStack,
  AspectRatio,
} from 'native-base'

import { MyP, FormattedBlock } from 'app/components/sections'
import { MyBoxL, MyBoxS } from 'app/components/my-boxes'
import { Subtitle } from 'app/components/my-texts'
import { Buttons } from 'app/components/my-buttons'

import { paragraphs } from 'app/assets/paragraphs'
import { namedColors, hexColors } from 'app/assets/box-colors'

import christmas from '../../assets/images/christmas.png'
import kitten from '../../assets/images/kitten.jpg'

export function HomeScreen() {
  return (
    <Center
      flex={1}
      p="4"
      m={{ base: '8', sm: '16' }}
      gap={{ base: '8', sm: '16' }}
    >
      <Title />
      <Paragraphs />
      <SeparateBoxes />
      <Drawings />
      <BoxList />
      <Buttons />
    </Center>
  )
}

function Title() {
  return (
    <Heading
      fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }}
      my="4"
      textAlign="center"
      fontWeight="800"
      color="black"
    >
      Solito example app with{' '}
      <SolitoLink href="https://nativebase.io/">
        <Text color="primary.500">NativeBase</Text>
      </SolitoLink>
    </Heading>
  )
}

function Paragraphs() {
  return (
    <VStack maxW={1024}>
      {paragraphs.map((p, i) => (
        <MyP fontFamily={p[0]} key={i}>
          {[p[1], p[2]]}
        </MyP>
      ))}
    </VStack>
  )
}

function SeparateBoxes() {
  return (
    <FormattedBlock space="4" flexWrap="wrap">
      {[
        'Individual boxes with named colors:',
        namedColors.map((color, i) => (
          <MyBoxL backgroundColor={color} key={color + i} />
        )),
      ]}
    </FormattedBlock>
  )
}

function Drawings() {
  //const w = [450, 600]
  //const h = [300, 400]
  return (
    <VStack space="2">
      <Subtitle>Cute drawings:</Subtitle>
      <HStack space="2" flexWrap="wrap" justifyContent="center">
        <AspectRatio ratio={2 / 3} w={{ base: '450px', sm: '600px' }}>
          <Image
            source={christmas}
            resizeMode="contain"
            alt="A cute drawing for SasuSaku family on a Christmas day."
          />
        </AspectRatio>
        <AspectRatio ratio={1} w={{ base: '300px', sm: '400px' }}>
          <Image
            source={kitten}
            resizeMode="contain"
            alt="A cute Sasuke kitten with cherry blossom."
          />
        </AspectRatio>
      </HStack>
    </VStack>
  )
}

function BoxList() {
  return (
    <FormattedBlock flexWrap="wrap" maxWidth={1024}>
      {[
        'A list of boxes with more colors:',
        hexColors.map((color, i) => (
          <MyBoxS backgroundColor={color} key={color + i} />
        )),
      ]}
    </FormattedBlock>
  )
}
