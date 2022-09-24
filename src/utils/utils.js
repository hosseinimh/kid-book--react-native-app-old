import {TABS} from '../constants';
import {TAB_SCREENS} from '../constants';
import {tabScreens, tabLinks} from '../constants/strings';

const tabScreenTitle = tabScreen => {
  let title = tabScreens.home;

  switch (tabScreen) {
    case TAB_SCREENS.Home:
      title = tabScreens.home;

      break;
    case TAB_SCREENS.Search:
      title = tabScreens.search;

      break;
    case TAB_SCREENS.Notifications:
      title = tabScreens.notifications;

      break;
    case TAB_SCREENS.Settings:
      title = tabScreens.settings;

      break;
    default:
      break;
  }

  return title;
};

const tabText = tab => {
  let text = tabLinks.home;

  switch (tab) {
    case TABS.Home:
      text = tabLinks.home;

      break;
    case TABS.Search:
      text = tabLinks.search;

      break;
    case TABS.Notifications:
      text = tabLinks.notifications;

      break;
    case TABS.Settings:
      text = tabLinks.settings;

      break;
    case TABS.Logout:
      text = tabLinks.logout;

      break;
    default:
      break;
  }

  return text;
};

const utils = {
  tabScreenTitle,
  tabText,
};

export default utils;
