import { Text, Center } from 'native-base'

export function MyBoxL({ backgroundColor }: { backgroundColor: string }) {
  return (
    <Center
      size={{ base: '128px', sm: '160px', md: '208px' }}
      backgroundColor={backgroundColor}
      borderStyle="solid"
      borderRadius="12px"
      borderColor="black"
      borderWidth="1px"
    >
      <Text
        fontWeight="bold"
        color="white"
        fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
      >
        {backgroundColor}
      </Text>
    </Center>
  )
}

export function MyBoxS({ backgroundColor }: { backgroundColor: string }) {
  return (
    <Center
      size={{ base: '80px', sm: '128px', md: '160px' }}
      backgroundColor={backgroundColor}
    >
      <Text
        fontWeight="bold"
        color="white"
        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
      >
        {backgroundColor}
      </Text>
    </Center>
  )
}
