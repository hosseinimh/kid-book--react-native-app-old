import React from 'react';
import {SafeAreaView} from 'react-native';

import useStyles from './useStyles';

const BaseScreen = ({children}) => {
  const styles = useStyles();

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default BaseScreen;
