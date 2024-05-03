import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useLayoutEffect, useContext, FlatList } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FOODS, CATEGORIES } from '../data/dummy-data'
import FoodsIngredient from '../components/FoodsIngredient';
import { FavoritesContext } from '../store/favoritesContext';

export default function FoodDetailScreen({ route, navigation }) {

    const favoriteFoodContext = useContext(FavoritesContext)

    const foodID = route.params.foodID;      //ilk foodID bu sayfada işleyeceğimiz kendi oluşturudğumuz, ikinci foodID foodItem foodItemHandler içerisinde elde ettiğimiz foodID.

    const selectedFood = FOODS.find((food) => food.id === foodID);

    const foodIsFavorite = favoriteFoodContext.ids.includes(foodID);



    function changeFavorite() {
        if (foodIsFavorite) {
            favoriteFoodContext.removeFavorite(foodID)
        }
        else {
            favoriteFoodContext.addFavorite(foodID)
        }
    }
    // Kategoriyi getirecek fonksiyon
    function getCategoryTitles(categoryIds) {
        if (!Array.isArray(categoryIds)) return 'Kategori Yok';
        return categoryIds.map(categoryId => {
            const category = CATEGORIES.find(cat => cat.id === categoryId);
            return category ? category.title : 'Kategori Yok';
        }).join(', ');
    }

    const pressHandler = () => {

        console.log('Tıklandı!')
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable onPress={pressHandler}>
                        <Ionicons
                            name={foodIsFavorite ? "star" : "star-outline"}
                            size={28}
                            color={"orange"}
                            onPress={changeFavorite}
                        />
                    </Pressable>
                )
            }
        });
    }, [changeFavorite, navigation]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View styles={styles.imageContainer}>
                <Image
                    source={{ uri: selectedFood.imageUrl }}
                    style={styles.image}
                />
                <View style={styles.overlayButton}>
                    <Text style={styles.overlayButtonText}>{getCategoryTitles(selectedFood.categoryIds)}</Text>
                </View>
            </View>

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
            <View>
                <View>
                    <Text style={styles.subTitle}>İçindekiler</Text>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.subTitleContainer}>
                    </View>
                    <View style={styles.ingredientsContainer}>
                        <FoodsIngredient data={selectedFood.ingredients} />

                    </View>
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
    overlayButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 7,
        zIndex: 1,
        backgroundColor: '#f2f2f2',
        borderRadius: 15,
        opacity: 0.85,
    },

    title: {
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 10,
        fontSize: 18,
        marginLeft: 20,
        color: '#ff7a07',
        fontWeight: 'bold'

    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5,
        paddingTop: 22,
        backgroundColor: '#f2f2f2',
        borderRadius: 13,
        marginHorizontal: 15

    },
    detailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 9,

    },
    detailContainerText: {
        fontWeight: '300'
    },
    detailContainerInlineText: {
        textTransform: 'none',

    },
    detailItem: {
        marginHorizontal: 5,
        textTransform: 'uppercase',
        marginBottom: 25,
        color: '#ff7a07'
    },
    listContainer: {
        paddingHorizontal: 10,


    },
    subTitleContainer: {
        alignItems: 'center',
        marginVertical: 5,

    },
    subTitle: {
        fontSize: 18,
        marginLeft: 20,
        color: '#ff7a07',
        fontWeight: 'bold'
    },
    ingredientsContainer: {
        backgroundColor: '#f2f2f2',
        borderRadius: 13,
        marginBottom: 15,
        marginHorizontal: 15
    }


})