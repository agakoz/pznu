import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ResearchPageComponent } from './research-page/research-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {MatCardModule} from '@angular/material/card';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CastPipe } from './cast.pipe';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToolbarComponent,
    FooterComponent,
    ContactPageComponent,
    ResearchPageComponent,
    EmployeePageComponent,
    CastPipe,
    SubjectPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatExpansionModule,
        MatDividerModule,
        MatCardModule,
        HttpClientModule,
        MatTableModule,
        MatListModule,
        MatTreeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
