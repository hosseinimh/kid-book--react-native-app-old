import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  Animated,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {useSelector} from 'react-redux';

import images from '../../theme/images';
import {Sidebar} from '../../components';
import BaseScreen from '../_BaseScreen/BaseScreen';
import {utils} from '../../utils';
import useStyles from './useStyles';
import {HomeTab} from './tabs';

const DURATION = 300;

const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTab, setCurrentTab] = useState(utils.HomeScreen);

  const layoutState = useSelector(state => state.layoutReducer);
  const styles = useStyles();

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setCurrentTab(layoutState?.screen);
  }, [layoutState]);

  BackHandler.addEventListener('hardwareBackPress', function () {
    if (showMenu) {
      onCloseMenu();

      return true;
    }

    return false;
  });

  const onCloseMenu = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: DURATION,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : -230,
      duration: DURATION,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -20 : 0,
      duration: DURATION,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <BaseScreen>
      <Sidebar />
      <Animated.View
        style={[
          styles.container,
          {
            borderRadius: showMenu ? 15 : 0,
            transform: [{scale: scaleValue}, {translateX: offsetValue}],
          },
        ]}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <Animated.View>
            <Animated.View style={styles.closeContainer}>
              <TouchableOpacity onPress={onCloseMenu}>
                <Image
                  source={showMenu ? images.close : images.menu}
                  style={styles.closeButton}></Image>
              </TouchableOpacity>
            </Animated.View>
            <Text style={styles.screenTitle}>
              {utils.screenTitle(currentTab)}
            </Text>
          </Animated.View>
        </Animated.View>
        <HomeTab />
      </Animated.View>
    </BaseScreen>
  );
};

export default HomeScreen;
