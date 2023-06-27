import { VStack, HStack, Text } from 'native-base'
import { Subtitle } from './my-texts'

export function MyP({
  children,
  fontFamily,
}: {
  children: React.ReactNode[]
  fontFamily?: string
}) {
  return (
    <Text
      fontSize={{ base: 'md', sm: 'xl', md: '2xl' }}
      textAlign="justify"
      fontFamily={fontFamily}
      my="4"
    >
      <Text fontWeight="bold">{children[0]}</Text>
      {children[1]}
    </Text>
  )
}

export function FormattedBlock({
  children,
  maxWidth,
  space,
  justifyContent,
  flexWrap,
}: {
  children: React.ReactNode[]
  maxWidth?: string | number
  space?: string | number
  justifyContent?: string
  flexWrap?: any
}) {
  return (
    <VStack space="2" maxWidth={maxWidth}>
      <Subtitle>{children[0]}</Subtitle>
      <HStack space={space} flexWrap={flexWrap} justifyContent={justifyContent}>
        {children[1]}
      </HStack>
    </VStack>
  )
}
