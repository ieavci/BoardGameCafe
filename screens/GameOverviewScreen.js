import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useGameListener } from '../config/firebaseConfig';
import GameItem from '../components/GameItem';

export default function GameOverviewScreen({ navigation }) {
    
  const games = useGameListener(); // Firestore'dan oyun verilerini almak için hook'u kullanın

  return (
    <View style={styles.container}>
      {games.length === 0 ? (
        <Text style={styles.emptyText}>Henüz oyun bulunmamaktadır.</Text>
      ) : (
        <FlatList
          data={games}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});
