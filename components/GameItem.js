import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const GameItem = ({ id, name, bggUrl, rank, year, minPlayers, maxPlayers, minTime, maxTime, avgTime }) => {
  const navigation = useNavigation();

  const navigateToGameDetail = () => {
    navigation.navigate('GameDetailScreen', { gameId: id, name: name }); // Oyun detay sayfasına giderek gameId parametresini iletiyoruz
  };

  return (
    <Pressable onPress={navigateToGameDetail} style={({ pressed }) => pressed ? styles.pressed : null}>
      <View style={styles.gameItem}>
        <View style={styles.gameItemIngredients}>
          <Text style={styles.gameName}>{name}</Text>
          <Text>Yıl: {year}</Text>
          <Text>Oyuncu: {minPlayers}-{maxPlayers}</Text>
          <Text>Oyun Süresi: {avgTime} dk.</Text>
        </View>
        <View style={styles.detailContainer}>
          <MaterialIcons style={styles.go} name="arrow-forward-ios" size={30} color="#ff7a07" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({

  pressed: {
    opacity: 0.7,

  },
  gameItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,

  },
  gameItemIngredients: {
    flex: 6,
    marginHorizontal:10
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1
  },
  gameName: {
    fontSize: 21,
    fontWeight: 'normal',
    marginHorizontal: -5,
    marginVertical: 3,
    color: '#ff7a07'
  },
});

export default GameItem;
