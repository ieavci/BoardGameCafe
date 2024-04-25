import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FoodItem({ id, title, imageUrl, affordability, complexity }) {


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
                        <Text style={styles.detailItem}>{affordability} TL</Text>
                        <Text style={styles.detailItem}>{complexity} kcal</Text>

                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 12,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: {
            width: -2,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 10,
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.9,
        backgroundColor: '#e6e6e6'
    },
    innerView: {},
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    detailItem: {
        marginHorizontal: 5
    },

})