import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import IndexCategoryScreen from './screens/IndexCategoryScreen';
import GameCategoriesScreen from './screens/GameCategoriesScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (




    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexCategoryScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />        
        <Stack.Screen name="GameCategories" component={GameCategoriesScreen} />        
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});