import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/FoodItem';

export default function FoodItem({ id, title, imageUrl, affordability, complexity, time }) {


    const navigation = useNavigation();


    function FoodItemHandler() {
        navigation.navigate('FoodDetail', { //burada verdiğimiz parametre ismi app.js içerisindeki NavigationContainer stackScreendeki name değeri olmalı.

            foodID: id //FoodOverviewScreen içerisindeki foodItemProps fonksiyonu ile Fooditem'a parametre olarak gönderdiğimiz id değerini kullandık.

        })
    }




    return (
        <View style={styles.foodItem}>
            <Pressable
                style={({ pressed }) => pressed ? styles.pressed : null}
                onPress={FoodItemHandler}
            >
                <View style={styles.innerView}>
                    <View>

                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.details}>
                        <View style={styles.detailContainer}>
                            <Ionicons name="accessibility-sharp" size={24} color="black" />
                            <Text style={styles.detailContainerText}>{complexity} kcal</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Ionicons name="time" size={24} color="black" />
                            <Text style={styles.detailContainerText}>{time} dk.</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Ionicons name="pricetag" size={24} color="black" />
                            <Text style={styles.detailContainerText}>{affordability} TL</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

