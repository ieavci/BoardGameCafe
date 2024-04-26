import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import IndexCategoryScreen from './screens/IndexCategoryScreen';
import GameCategoriesScreen from './screens/GameCategoriesScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritesContext';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{

      headerStyle: {
        backgroundColor: 'white',
      },
      drawerActiveTintColor: '#ff7a07', // Seçili menü öğesi rengi

    }}>
      <Drawer.Screen
        name="Home"
        component={IndexCategoryScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name="home-sharp" size={24} color="#ff7a07" />
          ),
        }}

      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Yemek & İçecek',
          headerTitleStyle: { color: '#ff7a07' },
          drawerIcon: () => (
            <Ionicons name="fast-food" size={24} color="#ff7a07" />
          ),

        }}
      />
      <Drawer.Screen
        name="GameCategories"
        component={GameCategoriesScreen}
        options={{
          title: 'Oyunlar',
          headerTitleStyle: { color: '#ff7a07' },
          drawerIcon: () => (
            <Ionicons name="extension-puzzle" size={24} color="#ff7a07" />
          ),

        }}
      />
      <Drawer.Screen
        name="FoodFavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favori Yemekler',
          headerTitleStyle: { color: '#ff7a07' },
          drawerIcon: () => (
            <Ionicons name="star" size={24} color="#ff7a07" />
          ),

        }}
      />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (

    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#ff7a07',

        }}>

          <Stack.Screen options={{
            headerShown: false
          }} name="Drawer" component={DrawerNavigator} />
          <Stack.Screen options={{
            title: 'Oyun Kategorileri'
          }} name="GameCategories" component={GameCategoriesScreen} />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen options={{ title: 'İçerik' }} name="FoodDetail" component={FoodDetailScreen} />
          <Stack.Screen options={{ title: 'Favori Yemekler' }} name="FoodFavoritesScreen" component={FavoritesScreen} />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({

});