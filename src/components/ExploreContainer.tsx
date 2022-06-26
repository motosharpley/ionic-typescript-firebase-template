import {
  IonSearchbar,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import {
  personCircle,
  search,
  star,
  ellipsisHorizontal,
  ellipsisVertical,
  heart,
} from 'ionicons/icons';
import { useState } from 'react';

import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonToolbar>
      <IonButtons slot="secondary">
        <IonButton>
          <IonIcon slot="icon-only" icon={star} />
        </IonButton>
        <IonButton>
          <IonIcon slot="icon-only" icon={heart} />
        </IonButton>
        <IonButton>
          <IonIcon slot="icon-only" icon={personCircle} />
        </IonButton>
        <IonButton>
          <IonIcon slot="icon-only" icon={ellipsisVertical} />
        </IonButton>
      </IonButtons>
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        animated
        showClearButton="always"
        color="dark"
        inputMode="search"
        type="search"
        slot="start"
      ></IonSearchbar>
    </IonToolbar>
  );
};

export default ExploreContainer;
