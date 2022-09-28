import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import BaseScreen from '../_BaseScreen/BaseScreen';
import Header from './Header';
import useStyles from './useStyles';

const StoryScreen = ({route, navigation}) => {
  let storyId = 0;

  const styles = useStyles();

  useEffect(() => {
    const {id} = route.params;

    storyId = parseInt(id);

    if (isNaN(storyId) || storyId <= 0) {
      navigation.goBack();
    }
  }, []);

  return (
    <BaseScreen>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>StoryScreen</Text>
      </View>
    </BaseScreen>
  );
};

export default StoryScreen;
