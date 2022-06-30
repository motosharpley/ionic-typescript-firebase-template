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
    <IonPage>
      <IonContent>
        {/*-- fab placed to the top end --*/}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
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

        {/*-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right --*/}
        <IonFab vertical="center" horizontal="start" edge slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
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

        {/*-- fab placed in the center of the content with a list on each side --*/}
        <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={shareSocialOutline} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={logoReddit} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={logoInstagram} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
