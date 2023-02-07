import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import ListAreas from '../screens/ListAreas'
import ListCustomers from '../screens/ListCustomers'
import EditCreateCustomer from '../screens/EditCreateCustomer'

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
		<Stack.Screen
            name='EditCreateCustomer'
            component={EditCreateCustomer}
        />
		<Stack.Screen
            name='ListCustomers'
            component={ListCustomers}
        />
		
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation