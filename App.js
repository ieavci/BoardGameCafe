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
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: 'white' },
        headerTintColor:'#ff7a07'
      }}>
        <Stack.Screen options={{headerShown:false}} name="Home" component={IndexCategoryScreen} />
        <Stack.Screen options={{
          title:'Yiyecek & İçecekler'
        }} name="Categories" component={CategoriesScreen} />
        <Stack.Screen options={{
          title:'Oyun Kategorileri'
        }} name="GameCategories" component={GameCategoriesScreen} />
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