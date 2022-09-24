import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import images from '../../theme/images';
import {tabProfile} from '../../constants/strings';
import useStyles from './useStyles';

import {TABS} from '../../constants';
import {setTabAction} from '../../state/layout/layoutActions';
import {utils} from '../../utils';
import {useTheme} from '../../hooks';

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(TABS.Home);
  const layoutState = useSelector(state => state.layoutReducer);
  const styles = useStyles();
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const onTab = tab => {
    dispatch(setTabAction(tab));
  };

  useEffect(() => {
    setCurrentTab(layoutState.tab);
  }, [layoutState]);

  const renderTabButton = (tab, image) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (tab === TABS.Logout) {
          } else {
            onTab(tab);
          }
        }}>
        <View
          style={[
            {
              backgroundColor:
                currentTab == tab ? colors.sidebarText : colors.transparent,
            },
            styles.tabContainer,
          ]}>
          <Image
            source={image}
            style={[
              {
                tintColor:
                  currentTab == tab
                    ? colors.sidebarBackground
                    : colors.sidebarText,
              },
              styles.tabIcon,
            ]}></Image>
          <Text
            style={[
              {
                color:
                  currentTab == tab
                    ? colors.sidebarBackground
                    : colors.sidebarText,
              },
              styles.tabText,
            ]}>
            {utils.tabText(tab)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.profileImage}></Image>
      <Text style={styles.profileName}>{tabProfile.profileName}</Text>
      <TouchableOpacity>
        <Text style={styles.viewProfile}>{tabProfile.viewProfile}</Text>
      </TouchableOpacity>
      <View style={styles.tabsContainer}>
        {renderTabButton(TABS.Home, images.home)}
        {renderTabButton(TABS.Search, images.search)}
        {renderTabButton(TABS.Notifications, images.notifications)}
        {renderTabButton(TABS.Settings, images.settings)}
      </View>
      <View>{renderTabButton(TABS.Logout, images.logout)}</View>
    </View>
  );
};

export default Sidebar;
