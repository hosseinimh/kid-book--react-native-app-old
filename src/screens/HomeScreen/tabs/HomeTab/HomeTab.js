import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {setThemeAction} from '../../../../state/layout/layoutActions';
import BooksList from '../../BooksList';
import {THEMES} from '../../../../constants';

const HomeTab = () => {
  const [theme, setTheme] = useState(THEMES.Light);
  const dispatch = useDispatch();
  const layoutState = useSelector(state => state.layoutReducer);

  useEffect(() => {
    setTheme(layoutState?.theme);
  }, [layoutState]);

  const changeTheme = () => {
    dispatch(
      setThemeAction(theme === THEMES.Light ? THEMES.Dark : THEMES.Light),
    );
  };

  return (
    <>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text style={{color: theme === THEMES.Light ? '#000' : '#fff'}}>
          Theme
        </Text>
      </TouchableOpacity>
      <BooksList />
    </>
  );
};

export default HomeTab;
