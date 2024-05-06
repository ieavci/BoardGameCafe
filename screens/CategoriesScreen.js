import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react"; // useState ekledim
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";


export default function CategoriesScreen({ navigation }) {
    // Sabit numColumns değeri yerine state kullanarak numColumns değerini güncelleyin
    const [numColumns, setNumColumns] = useState(1);

    function renderCategoryItem(itemData) {

        function pressHandler() {
            navigation.navigate('FoodOverview', {
                categoryID: itemData.item.id,  //data içerisindeki id değerini categoryID değerine eşitledik. bu değeri categoryScreen sayfasında kullanacağız.
            });
        }

        return <CategoryGrid
            id={itemData.item.id} // id prop'unu ekle

            title={itemData.item.title}
            image={itemData.item.image}
            pressFood={pressHandler}
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={numColumns} // numColumns prop'unu state'e bağlayın
            key={numColumns} // key prop'unu numColumns değeriyle güncelleyin
        />
    )
}

const styles = StyleSheet.create({})
