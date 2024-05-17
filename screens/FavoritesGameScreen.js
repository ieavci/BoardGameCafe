import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FavoritesContext } from '../store/favoritesContext';
import { useGameListener } from '../config/firebaseConfig';
import GameItem from '../components/GameItem'

const FavoritesGameScreen = () => {
  const { ids: favoriteGameIds } = useContext(FavoritesContext);
  const games = useGameListener();

  const favoriteGames = games.filter(game => favoriteGameIds.includes(game.game_id));

  if (favoriteGames.length === 0) {
    return (
      <View style={styles.MessageContainer}>
        <Text style={styles.Message}>Henüz Favori Oyunlarınızı Seçmediniz.</Text>
      </View>
    );
  }


  else {
    return (
    
        <FlatList

          data={favoriteGames}
          keyExtractor={(item) => item.game_id.toString()}
          renderItem={({ item }) => (
            <GameItem
              id={item.game_id}
              name={item.names}
              bggUrl={item.bgg_url}
              rank={item.rank}
              year={item.year}
              minPlayers={item.min_players}
              maxPlayers={item.max_players}
              minTime={item.min_time}
              maxTime={item.max_time}
              avgTime={item.avg_time}
            />
          )}
        />
    
    );
  }


};

const styles = StyleSheet.create({
  
  MessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  Message: {
    color: "#ff7a07",
    fontSize: 16,
    fontWeight: "bold"
  }
})


export default FavoritesGameScreen;