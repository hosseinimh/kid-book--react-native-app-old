import {useTheme} from '../../hooks';
import * as styles from '../../theme/style';

const useStyles = () => {
  const {colors} = useTheme();
  const {FONTS, SIZES} = styles;

  const container = {
    flexGrow: 1,
    backgroundColor: colors.background,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingBottom: 20,
  };

  const headerContainer = {
    marginTop: SIZES.padding1,
    marginBottom: SIZES.padding2,
    alignSelf: 'flex-end',
  };

  const closeButton = {
    width: 20,
    height: 20,
    tintColor: colors.text,
  };

  const backButton = {
    width: 25,
    height: 25,
    tintColor: colors.text,
    marginTop: 35,
  };

  const tabScreenTitle = [
    FONTS.h1,
    {
      color: colors.text,
      paddingTop: 20,
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
  ];

  const listContainer = {
    paddingBottom: 20,
    marginBottom: 20,
  };

  const listImage = {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginTop: 25,
  };

  const listTitle = [
    FONTS.h3,
    {
      color: colors.text,
      paddingTop: 10,
      paddingBottom: 5,
      textAlign: 'right',
    },
  ];

  const listText = [
    FONTS.body3,
    {
      color: colors.text,
      paddingBottom: 10,
      textAlign: 'right',
    },
  ];

  const divider = {
    height: 1,
    width: '100%',
    backgroundColor: colors.border,
  };

  return {
    container,
    headerContainer,
    closeButton,
    backButton,
    tabScreenTitle,
    listContainer,
    listImage,
    listTitle,
    listText,
    divider,
  };
};

export default useStyles;
