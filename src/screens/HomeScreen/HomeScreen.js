import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  Animated,
  TouchableOpacity,
  Image,
  BackHandler,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import images from '../../theme/images';
import {Sidebar} from '../../components';
import BaseScreen from '../_BaseScreen/BaseScreen';
import {utils} from '../../utils';
import useStyles from './useStyles';
import {HomeTabScreen, AboutTabScreen} from './tabScreens';
import {TAB_SCREENS, TABS} from '../../constants';
import {setTabAction} from '../../state/layout/layoutActions';

const DURATION = 300;

const HomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [tabScreen, setTabScreen] = useState(TAB_SCREENS.Home);

  const dispatch = useDispatch();

  const layoutState = useSelector(state => state.layoutReducer);
  const styles = useStyles();

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    selectTabScreen(layoutState.tab);

    if (showMenu) {
      onCloseMenu();
    }
  }, [layoutState]);

  const selectTabScreen = selectedTab => {
    let selectedTabScreen;

    switch (selectedTab) {
      case TABS.Home:
        selectedTabScreen = TAB_SCREENS.Home;

        break;
      case TABS.Search:
        selectedTabScreen = TAB_SCREENS.Search;

        break;
      case TABS.Notifications:
        selectedTabScreen = TAB_SCREENS.Notifications;

        break;
      case TABS.Settings:
        selectedTabScreen = TAB_SCREENS.Settings;

        break;
      default:
        selectedTabScreen = TAB_SCREENS.Home;

        break;
    }

    setTabScreen(selectedTabScreen);
  };

  BackHandler.addEventListener('hardwareBackPress', function () {
    if (showMenu) {
      onCloseMenu();

      return true;
    } else if (tabScreen !== TABS.Home) {
      showHomTabScreen();

      return true;
    }

    return false;
  });

  const showHomTabScreen = () => {
    dispatch(setTabAction(TABS.Home));
  };

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

  const renderHeader = () => {
    return (
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
            <TouchableOpacity
              onPress={() => {
                tabScreen === TAB_SCREENS.Home
                  ? onCloseMenu()
                  : showHomTabScreen();
              }}>
              <Image
                source={
                  showMenu
                    ? images.close
                    : tabScreen === TAB_SCREENS.Home
                    ? images.menu
                    : images.arrowRight
                }
                style={
                  tabScreen === TAB_SCREENS.Home || showMenu
                    ? styles.closeButton
                    : styles.backButton
                }></Image>
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.tabScreenTitle}>
            {utils.tabScreenTitle(tabScreen)}
          </Text>
        </Animated.View>
      </Animated.View>
    );
  };

  const renderTabScreen = () => {
    switch (tabScreen) {
      case TAB_SCREENS.Home:
        return <HomeTabScreen />;
      case TAB_SCREENS.Search:
        return <AboutTabScreen />;
      case TAB_SCREENS.Notifications:
        return <HomeTabScreen />;
      case TAB_SCREENS.Settings:
        return <AboutTabScreen />;
      default:
        return <></>;
    }
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
        {renderHeader()}
        {renderTabScreen()}
      </Animated.View>
    </BaseScreen>
  );
};

export default HomeScreen;
