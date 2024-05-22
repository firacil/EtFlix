// screens/DetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

export default function DetailScreen({ route }) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!movie) return null;

  return (
    <View>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={{ width: 200, height: 300 }} />
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
      <Text>Rating: {movie.vote_average}</Text>
    </View>
  );
}

