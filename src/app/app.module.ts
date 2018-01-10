import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CoursesPage } from '../pages/courses/courses';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ResourcesPage } from '../pages/resources/resources';
import { GroupPage } from '../pages/group/group';
import { ProfilePage } from '../pages/profile/profile';
import { TelemetryService } from '../service/TelemetryService';
import { SamplePageModule } from '../pages/sample/sample.module';

@NgModule({
  declarations: [MyApp, TabsPage, HomePage, GroupPage, ResourcesPage, CoursesPage, ProfilePage],
  imports: [
    BrowserModule,
    SamplePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, HomePage, GroupPage, ResourcesPage, CoursesPage, ProfilePage],
  providers: [
    StatusBar,
    SplashScreen,
    TelemetryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
