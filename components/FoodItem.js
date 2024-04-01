import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

export default function FoodItem({ id, title, imageUrl, affordability, complexity }) {
    return (
        <View style={styles.foodItem}>
            <Pressable style={({ pressed }) => pressed ? styles.pressed : null}>
                <View style={styles.innerView}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>

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
        opacity:0.9,
        backgroundColor:'#e6e6e6'
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