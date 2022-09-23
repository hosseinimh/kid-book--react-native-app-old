import {SCREENS, TABS, THEMES} from '../../constants';
import * as layoutActions from './layoutActions';

const initialState = {
  screen: SCREENS.HomeScreen,
  tab: TABS.Home,
  loading: false,
  theme: THEMES.Light,
};

const layoutReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case layoutActions.SET_SCREEN_ACTION:
      return {...state, screen: payload};
    case layoutActions.SET_TAB_ACTION:
      return {...state, tab: payload};
    case layoutActions.SET_LOADING_ACTION:
      return {
        ...state,
        loading: payload,
      };
    case layoutActions.SET_THEME_ACTION:
      return {...state, theme: payload};
    default:
      return state;
  }
};

export default layoutReducer;
