import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { ExploreContainer } from '../containers';

/**
 * Placeholder for About page
 */
const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABOUT</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="About page" /> */}
        <div>CONTENT HERE</div>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;
