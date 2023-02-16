import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
interface Props {
  uri: string;
  play: boolean
}

const CustomVideoPlayer = React.forwardRef(
  ({uri, play}: Props, ref: any): JSX.Element => {
    const onBuffer = (buff: any) => {
      console.log('onBuffer :', buff);
    };

    const onError = (err: any) => {
      console.log('onError :', err);
    };
    return (
      <Video
        source={{
          uri: uri,
        }}
        ref={ref}
        style={styles.backgroundVideo}
        controls={false}
        onBuffer={onBuffer}
        onError={onError}
        paused={!play}
      />
    );
  },
);

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 250,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CustomVideoPlayer;
