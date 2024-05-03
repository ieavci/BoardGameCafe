import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodsIngredient({ data }) {
    return data.map((dataIng) => (
        <View key={dataIng} style={styles.ingredientContainer}>
            <Text style={styles.text}>{dataIng}</Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    ingredientContainer: {        
        padding: 6,        
    },
    text: {
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
        paddingBottom:5,       
        paddingHorizontal:10
    }
})






