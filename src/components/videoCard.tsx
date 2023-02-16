import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import CustomVideoPlayer from './videoPlayer';

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
  const ref: any = useRef();
  const [play, setPlay] = useState(false);

  const playVideo = () => {
    setPlay(!play);
  };

  useEffect(() => {
    setPlay(false);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {currentIndex === item.id - 1 && (
        <CustomVideoPlayer uri={item.sources[0]} ref={ref} play={play} />
      )}
      <View style={styles.videoDetailsContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.playButtonContainer}>
          <TouchableOpacity style={styles.playButton} onPress={playVideo}>
            <Text style={styles.playButtonText}>Play</Text>
          </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: 'orange',
    backgroundColor: 'black',
    padding: 10,
  },
  videoDetailsContainer: {
    position: 'relative',
    top: 250,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontWeight: '700',
    marginTop: 10,
    color: 'white',
  },
  playButtonContainer: {
    padding: 5,
    marginTop: 10,
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 25,
  },
  playButtonText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  description: {
    fontWeight: '700',
    marginTop: 10,
    color: 'white',
  },
});

export default VideoCard;
