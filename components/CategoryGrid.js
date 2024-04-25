import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color,pressFood }) {


  
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
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text
            style={styles.title}>{title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 15,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',

  }
});