import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import MovieItem from "./MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=d98e9470bb9d406d7060f45b4ce7ef3c'
      );
      const json = await response.json();
      setMovies(json.results);
      // console.log("===============================================================================");
      // console.log("here are my movies");
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  const renderItem = (item) => (
    <MovieItem 
      name={item.original_title}
      imageURL={"http://image.tmdb.org/t/p/w500" + item.poster_path}
      description={item.overview}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Popcorn 🍿</Text>
      <FlatList 
        data={movies}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: 'red',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "3%",
    marginLeft: "1%",
  },
});
