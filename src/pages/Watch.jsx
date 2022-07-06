import { IonContent, IonPage } from '@ionic/react';

import TubePlayer from '../components/tubeplayer/TubePlayer';
import { SocialShareFab } from '../components/SocialShareFab';

const Watch = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="player-container">
          <TubePlayer></TubePlayer>
          <SocialShareFab></SocialShareFab>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Watch;
