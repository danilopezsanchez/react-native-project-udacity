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
			options={{ title: 'Customer Manager Plus' }}
        />
        <Stack.Screen
            name='ListAreas'
            component={ListAreas}
			options={{ title: 'List of areas' }}
        />
		<Stack.Screen
            name='EditCreateCustomer'
            component={EditCreateCustomer}
			options={{ title: 'Customer information' }}
        />
		<Stack.Screen
            name='ListCustomers'
            component={ListCustomers}
			options={{ title: 'List of customers' }}
        />
		
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation