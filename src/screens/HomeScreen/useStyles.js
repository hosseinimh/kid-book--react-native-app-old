import {useTheme} from '../../hooks';
import * as styles from '../../theme/style';

const useStyles = () => {
  const {colors} = useTheme();

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

  const closeContainer = {
    alignSelf: 'flex-end',
  };

  const closeButton = {
    width: 20,
    height: 20,
    tintColor: colors.text,
    marginTop: 40,
  };

  const screenTitle = [
    styles.h1,
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
    styles.h4,
    {
      color: colors.text,
      paddingTop: 10,
      paddingBottom: 5,
      textAlign: 'right',
    },
  ];

  const listText = [
    styles.p,
    {
      color: colors.text,
      paddingBottom: 5,
      textAlign: 'right',
    },
  ];

  return {
    container,
    closeContainer,
    closeButton,
    closeButton,
    screenTitle,
    listContainer,
    listImage,
    listTitle,
    listText,
  };
};

export default useStyles;
