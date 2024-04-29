// GameDetailScreen.js

import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FavoritesContext } from '../store/favoritesContext';
import { useGameListener } from '../config/firebaseConfig';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const GameDetailScreen = ({ route }) => {




  const { gameId, name } = route.params;
  const games = useGameListener();
  const { ids: favoriteGameIds, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const favoriteGameContext = useContext(FavoritesContext)
  const GameIsFavorite = favoriteGameContext.ids.includes(gameId);


  const navigation = useNavigation();

  const toggleFavorite = () => {
    if (favoriteGameIds.includes(gameId)) {
      removeFavorite(gameId);
    } else {
      addFavorite(gameId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name // Oyunun adı başlık olarak ayarlanıyor
    });
  }, [navigation, name]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable>
            <Ionicons
              name={GameIsFavorite ? "star" : "star-outline"}
              size={28}
              color={"orange"}
              onPress={toggleFavorite}
            />
          </Pressable>
        )
      }
    });
  }, [toggleFavorite, navigation]);

  const selectedGame = games.find(game => game && game.game_id === gameId);

  if (!selectedGame) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.errorText}>Game not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Text style={styles.title}>{selectedGame.names}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailContainerText}>Rank: {selectedGame.rank}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailContainerText}>Year: {selectedGame.year}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailContainerText}>Players: {selectedGame.min_players}-{selectedGame.max_players}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailContainerText}>Time: {selectedGame.min_time}-{selectedGame.max_time} minutes</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailContainerText}>Avg Time: {selectedGame.avg_time} minutes</Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  detailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 9,
  },
  detailContainerText: {
    fontWeight: '300',
  },
});

export default GameDetailScreen;
