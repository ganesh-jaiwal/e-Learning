import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorComponent } from './error/error.component';
import { WarningComponent } from './warning/warning.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { AppExerciseDatabindingComponent } from './app-exercise-databinding/app-exercise-databinding.component';
import { AppExerciseStoreLogsComponent } from './app-exercise-store-logs/app-exercise-store-logs.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorComponent,
    WarningComponent,
    ExercisesComponent,
    AppExerciseDatabindingComponent,
    AppExerciseStoreLogsComponent,
    IntroPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
