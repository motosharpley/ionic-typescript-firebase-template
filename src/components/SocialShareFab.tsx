import React from 'react';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/react';
import {
  add,
  settings,
  share,
  person,
  arrowForwardCircle,
  arrowBackCircle,
  arrowUpCircle,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoReddit,
  shareSocial,
  shareSocialOutline,
} from 'ionicons/icons';

export const SocialShareFab: React.FC = () => {
  return (
    <IonFab vertical="center" horizontal="end" slot="fixed">
      <IonFabButton>
        <IonIcon icon={shareSocial} />
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={logoReddit} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoTwitter} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoFacebook} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoInstagram} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
};
