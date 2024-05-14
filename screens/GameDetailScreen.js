// GameDetailScreen.js

import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FavoritesContext } from '../store/favoritesContext';
import { useGameListener } from '../config/firebaseConfig';
import { useLayoutEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GameDetailScreen = ({ route }) => {




  const { gameId, name, bggUrl } = route.params;
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
        <View style={styles.detailOuterContainer}>

          <MaterialIcons style={styles.detailContainerIcon} name="numbers" size={32} color="#ff7a07" />
          <Text style={styles.detailContainerText}>Rank: {selectedGame.rank}</Text>

        </View>
        <View style={styles.detailOuterContainer}>
          <Ionicons style={styles.detailContainerIcon} name="calendar" size={32} color="#ff7a07" />
          <Text style={styles.detailContainerText}>Oyun Yılı: {selectedGame.year}</Text>
        </View>
        <View style={styles.detailOuterContainer}>
          <MaterialIcons style={styles.detailContainerIcon} name="groups" size={32} color="#ff7a07" />
          <Text style={styles.detailContainerText}>Oyuncu Sayısı: {selectedGame.min_players}-{selectedGame.max_players} kişi</Text>
        </View>
        <View style={styles.detailOuterContainer}>
          <MaterialIcons style={styles.detailContainerIcon} name="timer" size={32} color="#ff7a07" />
          <Text style={styles.detailContainerText}>Zaman: {selectedGame.min_time}-{selectedGame.max_time} dk.</Text>
        </View>
        <View style={styles.detailOuterContainer}>
          <MaterialIcons style={styles.detailContainerIcon} name="av-timer" size={32} color="#ff7a07" />
          <Text style={styles.detailContainerText}>Ortalama Zaman: {selectedGame.avg_time} dk.</Text>
        </View>

        <Pressable
          onPress={() => Linking.openURL(bggUrl)}
          style={({ pressed }) => [
            styles.linkButton,
            pressed && styles.linkButtonPressed
          ]}
        >
          <Ionicons name="paper-plane" size={25} color="white" />
          <Text style={styles.linkButtonText}>Nasıl Oynanır?</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',

  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    fontSize: 22,
    color: '#ff7a07',
    fontWeight: 'bold'

  },
  detailOuterContainer: {
    backgroundColor: 'white',
    width: 'auto',
    paddingVertical: 2,
    height: 80,
    marginVertical: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    marginHorizontal: 15
  },

  detailContainerIcon: {
    marginLeft: 30
  },
  detailContainerText: {
    fontWeight: '300',
    marginLeft: 8
  },
  linkButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#ff7a07',
    marginTop: 12,

    borderRadius: 10,
    marginHorizontal: 20
  },
  linkButtonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 5
  },
  linkButtonPressed:{
    opacity:0.8
  }
});

export default GameDetailScreen;
