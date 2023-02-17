import React, {useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Video from 'react-native-video';

import PlayerControls from './playerControls';
import ProgressBar from './progressBar';

const windowHeight = Dimensions.get('window').width * (9 / 16);
const windowWidth = Dimensions.get('window').width - 22;
const VideoPlayer = ({url}:any): JSX.Element => {
  const videoRef: any = useRef();
  const [showControl, setShowControl] = useState(true);
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onSeek = (data: any) => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const handlePlay = () => {
    setTimeout(() => setShowControl(false), 500);
    setPlay(true);
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 15);
    setCurrentTime(currentTime - 15);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 15);
    setCurrentTime(currentTime + 15);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  const onLoadEnd = (data: any) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
    setCurrentTime(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleControls}>
        <Video
          source={{
            uri:
              Platform.OS === 'ios'
                ? 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4'
                : url,
          }}
          ref={videoRef}
          style={styles.video}
          controls={false}
          resizeMode={'contain'}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          paused={!play}
          muted={true}
        />

        {showControl && (
          <View style={styles.controlOverlay}>
            <View></View>
            <PlayerControls
              onPlay={handlePlay}
              onPause={handlePlayPause}
              playing={play}
              skipBackwards={skipBackward}
              skipForwards={skipForward}
            />
            <ProgressBar
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              onSlideStart={handlePlayPause}
              onSlideComplete={handlePlayPause}
              onSlideCapture={onSeek}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
  },
  video: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'black',
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
});

export default VideoPlayer;
