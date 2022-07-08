import { IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';

const Profile: React.FC = () => {
  const [displayName, setDisplayName] = useState('UserDisplayName');
  return (
    <IonPage>
      <IonContent>
        <div>
          <h2>Profile</h2>
          <h3>{displayName}</h3>
          <p>Favorites</p>
          <p>Subscriptions</p>
          <p>My Gallery</p>
          <button>Logout</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
