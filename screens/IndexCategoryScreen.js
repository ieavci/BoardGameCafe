import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import CarouselSlide from '../components/CarouselSlide';
import { Ionicons } from '@expo/vector-icons';


export default function IndexCategoryScreen({ navigation }) {

  const width = Dimensions.get('window').width;

  const navigateToCategoryGrid = () => {
    navigation.navigate('Categories');
  };
  const navigateToGameCategoryGrid = () => {
    navigation.navigate('GameOverViewScreen');
  };

  return (

    <View style={styles.container}>

      <View style={styles.ImageContainer}>
        <Image source={require("../assets/IndexImages/deneOyun.jpg")}
          resizeMode="cover"
          style={[styles.cafe,
          {
            transform: [{ rotate: '5deg' }],
          },]} />
        <Image source={require("../assets/IndexImages/deneCafe2.jpg")}
          resizeMode="cover"
          style={[styles.oyun,
          {
            transform: [{ rotate: '5deg' }],
          },]} />
      </View>
      
      <CarouselSlide/>
      
      <View style={styles.buttons}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? 'lightgrey' : 'white' },
          ]}
          onPress={navigateToCategoryGrid} // "Yiyecek & İçecekler" butonuna basıldığında CategoryGrid sayfasına yönlendirme
        >
          
          <Ionicons name="fast-food" size={45} color="#ff7a07" />
          <Text style={styles.buttonBottomText}>Yemek & İçecek</Text>
        </Pressable>
        </View>
        <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? 'lightgrey' : 'white' },
          ]}
          onPress={navigateToGameCategoryGrid}
        >
          
          <Ionicons name="extension-puzzle" size={45} color="#ff7a07" />
          <Text style={styles.buttonBottomText}>Oyunlar</Text>
        </Pressable>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  ImageContainer: {
    flexDirection: 'row',
  },
  cafe: {
    width: Dimensions.get('window').width * 0.58,
    height: Dimensions.get('window').height * 0.34,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get('window').width * 0.1,
    marginLeft: -Dimensions.get('window').width * 0.1,
  },
  oyun: {
    width: Dimensions.get('window').width * 0.58,
    height: Dimensions.get('window').height * 0.34,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: Dimensions.get('window').width * 0.25,
    marginLeft: Dimensions.get('window').width * 0.05,
    position: 'relative',
  },
  buttonContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',   
    marginTop:50,
    position:'relative',
    flexDirection:'row',
  },
  buttonBottomText:{
    fontSize:15,
    marginTop:3,
    fontWeight:'thin',
    fontFamily:'sans-serif-light',
    textAlign:'center'
  },
  pressable: {
    backgroundColor:'#ff7a07',
    justifyContent:'center',
    alignItems:'center',
    width: 100,
    height: 100,
    marginTop:20,
    marginHorizontal: 25,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: 'grey',
    elevation: 5,
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
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
    color: '#000000'
  },
});
