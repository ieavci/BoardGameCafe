import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data'
import FoodsIngredient from '../components/FoodsIngredient';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function FoodDetailScreen({ route, navigation }) {
    const foodID = route.params.foodID;      //ilk foodID bu sayfada işleyeceğimiz kendi oluşturudğumuz, ikinci foodID foodItem foodItemHandler içerisinde elde ettiğimiz foodID.

    const selectedFood = FOODS.find((food) => food.id === foodID);



    const [isFavorite, setIsFavorite] = useState(false);

    const pressHandler = () => {
        setIsFavorite(!isFavorite);
        console.log('Tıklandı!')
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable onPress={pressHandler}>
                        <Ionicons
                            name={isFavorite ? "star" : "star-outline"}
                            size={28}
                            color={isFavorite ? "orange" : "orange"}
                        />
                    </Pressable>
                )
            }
        });
    }, [isFavorite, navigation]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedFood.imageUrl }}
                style={styles.image}
            />
            <View>
                <Text style={styles.title}>{selectedFood.title}</Text>
            </View>

            <View style={styles.details}>
                <View style={styles.detailContainer}>
                    <Ionicons name="accessibility-sharp" size={24} color="black" />
                    <Text style={styles.detailContainerText}>Kalori</Text>
                    <Text style={styles.detailItem}>{selectedFood.complexity} <Text style={styles.detailContainerInlineText}>kcal</Text></Text>
                </View>
                <View style={styles.detailContainer}>
                    <Ionicons name="pricetag" size={24} color="black" />
                    <Text style={styles.detailContainerText}>Fiyat</Text>
                    <Text style={styles.detailItem}>{selectedFood.affordability} <Text style={styles.detailContainerInlineText}>TL</Text></Text>
                </View>


            </View>
            <View style={styles.sil}>
                <View style={styles.listContainer}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>İçindekiler</Text>
                    </View>

                    <FoodsIngredient data={selectedFood.ingredients} />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 300,

    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 10,

    },
    sil: {
        width: '100%',
        height: 250,
        backgroundColor: 'gray'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,

    },
    detailContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:9
    },
    detailContainerText:{
        fontWeight:'300'
    },
    detailContainerInlineText:{
        textTransform:'none',
        
    },
    detailItem: {
        marginHorizontal: 5,
        textTransform: 'uppercase',
        marginBottom: 25,
        color:'#ff7a07'
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    subTitleContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#ff7a07',
        marginVertical: 5
    },
    subTitle: {
        fontSize: 15
    },


})