import { useRef } from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { width } from '@utils/_dimensions';

import type { Image, SwiperProps } from '.';

const Swiper = ({ images, textStyle, height = 250 }: SwiperProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ])}
      scrollEventThrottle={1}>
      {images.map(({ id, url, text }: Image) => (
        <View style={{ height, width }} key={id}>
          <ImageBackground
            source={{ uri: url }}
            style={{
              height: '100%',
            }}>
            {text && <Text style={textStyle}>{'Image - ' + id}</Text>}
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

export default Swiper;
