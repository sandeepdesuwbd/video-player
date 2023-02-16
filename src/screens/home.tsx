import {useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import VideoCard from '../components/videoCard';
import {videoList} from '../services/videoService';
const {height} = Dimensions.get('window');
const Home = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <FlatList
        data={videoList}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        renderItem={({item}) => {
          return <VideoCard item={item} currentIndex={currentIndex}></VideoCard>;
        }}
        onScroll={e => {
          const y = e.nativeEvent.contentOffset.y;
          setCurrentIndex(parseInt((y / height).toFixed(0)));
        }}
        keyExtractor={item => `${item.id}`}
      />
    </>
  );
};

export default Home;
