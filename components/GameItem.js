import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameItem = ({ id, name, bggUrl, rank, year, minPlayers, maxPlayers, minTime, maxTime, avgTime }) => {
  const navigation = useNavigation();

  const navigateToGameDetail = () => {
    navigation.navigate('GameDetailScreen', { gameId: id, name:name }); // Oyun detay sayfasına giderek gameId parametresini iletiyoruz
  };

  return (
    <TouchableOpacity onPress={navigateToGameDetail}>
      <View style={styles.gameItem}>
        <Text style={styles.gameName}>{name}</Text>
        <Text>Rank: {rank}</Text>
        <Text>Year: {year}</Text>
        <Text>Players: {minPlayers}-{maxPlayers}</Text>
        <Text>Time: {minTime}-{maxTime} minutes</Text>
        <Text>Avg Time: {avgTime} minutes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  gameName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GameItem;
