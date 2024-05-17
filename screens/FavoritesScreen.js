import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FavoritesContext } from '../store/favoritesContext';
import { FOODS } from '../data/dummy-data';
import { useContext } from 'react';
import FoodList from '../components/FoodList';

export default function FavoritesScreen() {
    const favoriteFoodContext = useContext(FavoritesContext)

    const favoriteFoods = FOODS.filter((food) => favoriteFoodContext.ids.includes(food.id))

    if (favoriteFoods.length === 0) {
        return (
            <View style={styles.MessageContainer}>
                <Text style={styles.Message}>Henüz Favori Ürünlerinizi Seçmediniz.</Text>
            </View>
        )
    }
    else {
        return (
           
            <FoodList
                items={favoriteFoods}
                
            />
           
        )
    }


}

const styles = StyleSheet.create({
    Body:{
        backgroundColor:'white'
    },
    MessageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    Message: {
        color: "#ff7a07",
        fontSize: 16,
        fontWeight: "bold"
    }
})