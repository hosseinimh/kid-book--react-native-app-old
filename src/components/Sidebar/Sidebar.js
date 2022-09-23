import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import images from '../../theme/images';
import {tabs} from '../../constants/strings';
import useStyles from './useStyles';

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.profileImage}></Image>
      <Text style={styles.profileName}>{tabs.profileName}</Text>
      <TouchableOpacity>
        <Text style={styles.viewProfile}>{tabs.viewProfile}</Text>
      </TouchableOpacity>
      <View style={styles.tabsContainer}>
        {TabButton(currentTab, setCurrentTab, 'Home', images.home)}
        {TabButton(currentTab, setCurrentTab, 'Search', images.search)}
        {TabButton(
          currentTab,
          setCurrentTab,
          'Notifications',
          images.notifications,
        )}
        {TabButton(currentTab, setCurrentTab, 'Settings', images.settings)}
      </View>
      <View>
        {TabButton(currentTab, setCurrentTab, 'LogOut', images.logout)}
      </View>
    </View>
  );
};

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'LogOut') {
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 35,
          paddingRight: 13,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingRight: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Sidebar;
