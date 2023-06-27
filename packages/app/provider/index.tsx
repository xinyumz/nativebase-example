import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from '../provider/theme/theme'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
