import { useState, useRef } from 'react'
import { VStack, Center, Text, Button, AlertDialog } from 'native-base'
import { Subtitle } from './my-texts'

export function Buttons() {
  return (
    <VStack space="4" alignItems="center">
      <Subtitle>Interactive buttons: </Subtitle>
      <CountButton />
      <ModalButton />
    </VStack>
  )
}

function CountButton() {
  const [count, setCount] = useState(0)
  return (
    <VStack space="1" alignItems="center">
      <Button colorScheme="blue" onPress={() => setCount(count + 1)}>
        CLICK ME
      </Button>
      <Text fontSize="lg">
        You've clicked{' '}
        <Text color="primary.500" fontWeight="bold">
          {count}
        </Text>{' '}
        times!
      </Text>
    </VStack>
  )
}

function ModalButton() {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)

  const cancelRef = useRef(null)
  return (
    <Center>
      <Button colorScheme="teal" onPress={() => setIsOpen(!isOpen)}>
        PRESS ME
      </Button>
      <AlertDialog
        h="100vh"
        justifyContent="center"
        alignItems="center"
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content alignItems="center">
          <AlertDialog.Body textAlign="center">
            Surprise!! I'm a pop-up modal!
          </AlertDialog.Body>
          <Button onPress={onClose} size="sm">
            Click here to hide me
          </Button>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  )
}
