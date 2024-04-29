import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import IndexCategoryScreen from './screens/IndexCategoryScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favoritesContext';
import FavoritesScreen from './screens/FavoritesScreen';
import { useGameListener } from './config/firebaseConfig';
import GameOverViewScreen from './screens/GameOverviewScreen'
import GameDetailScreen from './screens/GameDetailScreen';
import FavoritesGameScreen from './screens/FavoritesGameScreen'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const GameListenerComponent = () => {

  useGameListener(); // Bu hook'u burada çağırın

  return null; // Bu bileşen hiçbir şey render etmiyor, sadece hook'u çağırıyor
}

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
        name="GameOverViewScreen"
        component={GameOverViewScreen}
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
      <Drawer.Screen
        name="FavoritesGameScreen"
        component={FavoritesGameScreen}
        options={{
          title: 'Favori Oyunlar',
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
          }} name="GameOverViewScreen" component={GameOverViewScreen} />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen options={{ title: 'İçerik' }} name="FoodDetail" component={FoodDetailScreen} />
          <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} />
          <Stack.Screen options={{ title: 'Favori Yemekler' }} name="FoodFavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen options={{ title: 'Favori Oyunlar' }} name="FavoritesGameScreen" component={FavoritesGameScreen} />
        </Stack.Navigator>
      </FavoritesContextProvider>
      <GameListenerComponent />
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({

});