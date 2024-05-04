import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function CategoryGrid({ title, image, pressFood }) {



  return (

    <View style={styles.gridItem}>
      <Pressable
        /*
        birden fazla css vereceğimiz zaman stillere birer dizi mantığı ile yaklaşıyoruz:
        {[styles.insideView, { backgroundColor: color }]}
        
        styles.button, pressed ? styles.buttonPressed : null ====>
        styles.button ilk css, pressed akitf (?) ise buttonPressed css dahil et
        değil ise (:) null bırak
        */
        style={({ pressed }) => [
          styles.button, pressed ? styles.buttonPressed : null
        ]}
        onPress={pressFood}
      >
        <View style={styles.insideView}>
          <View style={styles.categoryImageContainer}>
            <Image src={image} style={styles.categoryImage} />
          </View>
          <View style={styles.innerDetail}>
            <Text
              style={styles.title}>{title}
            </Text>
            <MaterialIcons style={styles.go} name="arrow-forward-ios" size={22} color="#ff7a07" />
           <Text style={styles.innerMenuCount}>12 Menü</Text>  
          </View>


        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 100,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,

  },
  insideView: {
    flexDirection: 'row'
  },
  categoryImageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },

  innerDetail: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'normal',

  },
  go:{
    marginLeft:150,
    opacity:0.9,
    fontWeight:'bold',
  },
  innerMenuCount:{
    fontWeight:'300'
  }
});