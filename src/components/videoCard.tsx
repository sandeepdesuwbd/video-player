import {View, Text, StyleSheet} from 'react-native';

import VideoPlayer from './VideoPlayer';

interface VideoDetails {
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
  title: string;
  id: number;
}

interface Props {
  item: VideoDetails;
  currentIndex: number;
}

const VideoCard = ({item}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <VideoPlayer url={item.sources[0]} />
      <View style={styles.videoDetailsContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <View>
          <Text style={styles.description}>"{item.description}"</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  emptyVideoContainer: {
    height: 250,
  },
  videoDetailsContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 25,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '700',
    marginTop: 10,
  },
  description: {
    fontWeight: '700',
    marginTop: 10,
  },
});

export default VideoCard;
