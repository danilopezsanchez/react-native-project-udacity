import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import ListAreas from '../screens/ListAreas'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
            name='Welcome'
            component={Welcome}
        />
        <Stack.Screen
            name='ListAreas'
            component={ListAreas}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation