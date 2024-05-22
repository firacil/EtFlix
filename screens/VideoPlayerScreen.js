// screens/VideoPlayerScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayerScreen({ route }) {
  const { videoUrl } = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        style={styles.video}
        controls
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

