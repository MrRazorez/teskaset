import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import axios from 'axios';

export default function Media() {
    const [dataVideo, setDataVideo] = useState([]);

    const callAPI = async () => {
      try {
        const res = await axios.get('http://192.168.180.69:3000/');
        setDataVideo(res.data.video);
      }catch(error) {
        console.log(error);
      }
    }

    useEffect(() => {callAPI()}, []);

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
            resizeMode="contain"
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
