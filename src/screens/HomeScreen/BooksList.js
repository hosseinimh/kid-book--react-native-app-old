import React from 'react';
import {Text, Image, FlatList, Animated} from 'react-native';

import images from '../../theme/images';
import stories from '../../constants/stories';
import useStyles from './useStyles';

const BooksList = () => {
  const styles = useStyles();

  const renderItem = ({item}) => {
    return (
      <Animated.View>
        <Image source={images.photo} style={styles.listImage}></Image>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listText}>{item.text}</Text>
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default BooksList;
