import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GradePipe } from './pipes/grade-pipe/grade.pipe';
import { GradeDirective } from './directives/grade-directive/grade.directive';
import { UnlessDirective } from './directives/unless-directive/unless.directive';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, GradePipe, GradeDirective, UnlessDirective, InfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
