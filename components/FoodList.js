import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FoodItem from "./FoodItem"



export default function FoodList({ items }) {
    function renderFoodItem(itemData) {

        const foodItemProps = {  //foodItem componentine vereceğimiz propsları bir obje içerisine atıp daha az karmaşık halde göndermek için yazdığımız obje 
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,

        }


        return <FoodItem  {...foodItemProps} /> //food itemlerini basmak için yazdığımız componentsi çağırdık.
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


