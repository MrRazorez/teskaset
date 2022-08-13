import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default function Media() {
    const [dataVideo, setDataVideo] = useState([]);

    const callAPI = async () => {
      try {
        const res = await axios.get('http://192.168.64.226:3000/');
        setDataVideo(CryptoJS.AES.decrypt(res.data.video, "test123").toString(CryptoJS.enc.Utf8));
      }catch(error) {
        console.log(error);
      }
    }

    useEffect(() => {callAPI()}, []);

    const setOrientation = () => {
      if (Dimensions.get('window').height > Dimensions.get('window').width) {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      }
      else {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
    }

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <Video
            ref={video}
            style={styles.video}
            source={{
            uri: dataVideo,
            }}
            useNativeControls
            resizeMode="cover"
            shouldPlay
            onFullscreenUpdate={setOrientation}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );
}

const styles = StyleSheet.create({
  video: {
    width: 320,
    height: 200,
  }
});
