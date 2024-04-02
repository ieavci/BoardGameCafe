import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data';
import FoodItem from '../components/FoodItem';
import { useLayoutEffect } from 'react';

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
  },[navigation,categoryID])

  


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
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})