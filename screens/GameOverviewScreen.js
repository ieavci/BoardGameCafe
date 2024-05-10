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
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  emptyText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color:'#ff7a07',
    
  },
});
