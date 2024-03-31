import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function IndexCategoryScreen({ navigation }) {
  const navigateToCategoryGrid = () => {
    navigation.navigate('Categories'); 
  };
  const navigateToGameCategoryGrid = () => {
    navigation.navigate('GameCategories'); 
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./kenarlıksız-beyaz-png.png')} 
          style={styles.logo}
          resizeMode="contain" // Resmin boyutunu ayarlamak için
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          { backgroundColor: pressed ? 'lightgrey' : 'white' },
        ]}
        onPress={navigateToCategoryGrid} // "Yiyecek & İçecekler" butonuna basıldığında CategoryGrid sayfasına yönlendirme
      >
        <Text style={styles.text}>Yiyecek & İçecekler</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          { backgroundColor: pressed ? 'lightgrey' : 'white' },
        ]}
        onPress={navigateToGameCategoryGrid}
      >
        <Text style={styles.text}>Oyunlar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ff7a07'
  },
  logoContainer: {
    marginBottom: 65, 
    marginTop:0
  },
  logo: {
    width: 300,
    height: 200,
  },
  pressable: {
    width: 200,
    height: 50,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,

    borderColor: 'grey',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
});
