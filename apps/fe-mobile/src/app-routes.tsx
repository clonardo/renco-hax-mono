import React, { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { ellipse, home } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './app/pages/home';
import AboutPage from './app/pages/about';
import Spinner from 'react-spinkit';
import { PAGE_ROUTE_SEGMENTS } from './config';
/*
<IonTabBar slot="bottom">
          <IonTabButton href={`/${PAGE_ROUTE_SEGMENTS.HOME}`} tab="home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton href={`/${PAGE_ROUTE_SEGMENTS.ABOUT}`} tab="about">
            <IonIcon icon={ellipse} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
*/

/**
 * Route between views in a tabset
 */
const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id={'main-content'}>
          <React.Suspense fallback={<Spinner name="line-scale" />}>
            <Route path="/home" component={HomePage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
            {/* <Route path="/account" component={AccountPage} exact={true} />
            <Route path="/account/:id" component={AccountPage} /> 
            <Route path="/test/:id" component={TestPage} />
            */}
            {/*<Route path="/test" component={TestPage} exact={true} />*/}

            <Route
              path="/"
              render={() => <Redirect to={'/home'} />}
              exact={true}
            />
          </React.Suspense>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
            {/* <IonLabel>{t('home')}</IonLabel> */}
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={ellipse} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppRouter;
