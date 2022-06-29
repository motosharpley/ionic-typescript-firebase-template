import { useState, useEffect } from 'react';
import { IonPage, IonToolbar, IonRange, IonContent } from '@ionic/react';
import ExploreContainer from './ExploreContainer';

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState('./assets/devpath.mp4');
  const [vidData, setVidData] = useState({
    currentTime: 0,
    duration: 0,
  });
  const { currentTime, duration } = vidData;

  useEffect(() => {
    const video = document.getElementById('video');
    video.currentTime = vidData.currentTime;

    video.addEventListener('loadedmetadata', (e) => {
      setVidData({
        currentTime: video.currentTime,
        duration: video.duration,
      });
      video.addEventListener('timeupdate', (e) => {
        setVidData({
          currentTime: video.currentTime,
          duration: video.duration,
        });
      });
    });

    console.log('vidData.currentTime: ', vidData.currentTime);
    return () => {};
  }, [vidData.currentTime, vidData.duration]);

  return (
    <IonPage>
      <ExploreContainer />
      <IonContent>
        <video id="video" controls preload="metadata" src={videoSrc}></video>
        <p>Current Time: {currentTime}</p>
        <IonRange
          dualKnobs={true}
          value={{
            lower: currentTime,
            upper: duration,
          }}
          onIonChange={(e) =>
            setVidData({
              currentTime: e.detail.value.lower,
              duration: duration,
            })
          }
          max={duration}
        ></IonRange>
      </IonContent>
    </IonPage>
  );
};

export default VideoPlayer;
