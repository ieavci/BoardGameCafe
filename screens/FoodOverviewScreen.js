import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import FoodList from '../components/FoodList';

export default function FoodOverviewScreen({ route, navigation }) {
  const categoryID = route.params.categoryID; //categoriesScreen sayfasından gelen categoryID değerini categoryID isminde bir sabite atadık.

  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryID) >= 0 //categoryID varsa mevcut değerini yok ise -1 döndürecek
  });





  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID   //CATEGORIES verileri içinde gezinip elimizdeki id ile aynı olan kategorilerin id lerini belirleyip title'larını çektik.
    ).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [navigation, categoryID])






  return (
    <View style={styles.a}>
      <FoodList items={displayedFoods}

      />
    </View>
  )
}

const styles = StyleSheet.create({
a:{
  backgroundColor:'white'
}
})