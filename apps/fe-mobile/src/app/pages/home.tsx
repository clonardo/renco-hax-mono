import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { ExploreContainer } from '../containers';
import './home.css';

/**
 * Placeholder for home view
 */
const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home View</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">--Home-0</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Home page" /> */}
        <div>CONTENT HERE</div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
