import { Text } from 'native-base'

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <Text fontWeight="bold" mb="2" fontSize={{ base: 'lg', sm: '2xl' }}>
      {children}
    </Text>
  )
}
