import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { useGameListener } from '../config/firebaseConfig';
import GameItem from '../components/GameItem';

export default function GameOverviewScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const games = useGameListener();

  // Oyunları aramak için bir filtreleme fonksiyonu
  const filteredGames = games.filter(game =>
    game.names.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Oyun Ara"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      {filteredGames.length === 0 ? (
        <Text style={styles.emptyText}>Oyun henüz bulunmamaktadır.</Text>
      ) : (
        <FlatList
          data={filteredGames}
          keyExtractor={item => item.game_id.toString()}
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
    backgroundColor: '#fff',
  },
  searchBar: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
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
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color:'#ff7a07',
    
  },
});
