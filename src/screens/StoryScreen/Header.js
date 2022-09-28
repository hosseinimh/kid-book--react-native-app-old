import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import images from '../../theme/images';
import useStyles from './useStyles';
import {useDownloader} from '../../hooks';
import {SoundPlayer} from '../../utils';
import {HorizontalProgressBar} from '../../components';

const Header = ({navigation}) => {
  const url =
    'https://ups.music-fa.com/tagdl/6e41/Sepehr%20Khalse%20-%20In%20Fasele%20(320).mp3';
  const filename = `${new Date().valueOf()}.mp3`;

  const setPath = mp3 => {
    if (mp3) {
      console.log(mp3);

      player = new SoundPlayer(mp3);

      player.playSound();
    }
  };

  const [downloadInfo, setDownloadInfo] = useState({
    progress: 0,
    completed: false,
    total: 0,
    loaded: 0,
  });
  const {download, cancelDownload} = useDownloader(
    url,
    filename,
    setDownloadInfo,
    setPath,
  );
  const styles = useStyles();

  useEffect(() => {
    return () => {
      cancelDownload();
    };
  }, []);

  const downloadMp3 = async () => {
    download();
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={images.arrowRight} style={styles.headerIcon}></Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{downloadInfo.progress}</Text>
        </View>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => downloadMp3()}>
            <Image source={images.volume} style={styles.headerIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <HorizontalProgressBar
        progress={downloadInfo.progress}
        containerStyle={styles.progress}
      />
    </>
  );
};

export default Header;
