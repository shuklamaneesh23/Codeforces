import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

export default function Contests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      const response = await axios.get('https://codeforces.com/api/contest.list?gym=false');
      const upcomingContests = response.data.result.filter(contest => contest.phase === 'BEFORE');
      setContests(upcomingContests);
    } catch (error) {
      console.error('Error fetching contests:', error);
    }
  };

  const openContestInBrowser = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openContestInBrowser(`https://codeforces.com/contest/${item.id}`)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>Start time: {new Date(item.startTimeSeconds * 1000).toString()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Contests</Text>
      <FlatList
        data={contests}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
