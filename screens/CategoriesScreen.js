import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react"; // useState ekledim
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen({navigation}) {
    // Sabit numColumns değeri yerine state kullanarak numColumns değerini güncelleyin
    const [numColumns, setNumColumns] = useState(2);

    function renderCategoryItem(itemData) {

        function pressHandler(){
            navigation.navigate('FoodOverview')
        }

        return <CategoryGrid
            title={itemData.item.title}
            color={itemData.item.color}
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
