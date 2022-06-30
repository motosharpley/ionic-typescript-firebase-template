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
  camera,
  play,
  homeSharp,
  videocamSharp,
} from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [searchText, setSearchText] = useState('');

  const history = useHistory();

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <IonToolbar>
      <IonButtons slot="secondary">
        <IonButton>
          <Link to="/watch">
            <IonIcon slot="icon-only" icon={videocamSharp} />
          </Link>
        </IonButton>
        <IonButton onClick={() => history.push('/')}>
          <IonIcon slot="icon-only" icon={homeSharp} />
        </IonButton>
        <IonButton>
          <Link to="/social-share">
            <IonIcon slot="icon-only" icon={personCircle} />
          </Link>
        </IonButton>
        <IonButton>
          <Link to="/tube">
            <IonIcon slot="icon-only" icon={play} />
          </Link>
        </IonButton>
      </IonButtons>
      <IonSearchbar
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        animated
        showClearButton="always"
        color="dark"
        slot="start"
      ></IonSearchbar>
    </IonToolbar>
  );
};

export default ExploreContainer;
