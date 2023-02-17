import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import VideoPlayer from './VideoPlayer';

const {height} = Dimensions.get('screen');

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

const VideoCard = ({item, currentIndex}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      {currentIndex === item.id - 1 ? <VideoPlayer /> : <View style={styles.emptyVideoContainer}></View>}
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
    height: height - 50,
    padding: 10,
  },
  emptyVideoContainer:{
    height: 250,
  },
  videoDetailsContainer: {
    marginTop: 20,
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
