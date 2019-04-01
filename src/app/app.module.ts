import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//use BrowserAnimationsModule if you want animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//use NoopAnimationsModule if you don`t want animations
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponentComponent } from './layout/home-component/home-component.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { ContainerComponent } from './layout/container/container.component';
import { C33courseComponent } from './section3/c33course/c33course.component';
import { Section3containerComponent } from './section3/section3container/section3container.component';
import { CoursesService } from './section3/courses.service';
import { S3Assignment1Component } from './section3/s3-assignment1/s3-assignment1.component';
import { AuthorsService } from './section3/authors.service';
import { Section4containerComponent } from './section4/section4container/section4container.component';
import { C40coursesComponent } from './section4/c40courses/c40courses.component';
import { C41attributeBindingComponent } from './section4/c41attribute-binding/c41attribute-binding.component';
import { C42addingBootstrapComponent } from './section4/c42adding-bootstrap/c42adding-bootstrap.component';
import { C43classBindingComponent } from './section4/c43class-binding/c43class-binding.component';
import { C44styleBindingComponent } from './section4/c44style-binding/c44style-binding.component';
import { C45eventBindingComponent } from './section4/c45event-binding/c45event-binding.component';
import { C46eventFilteringComponent } from './section4/c46event-filtering/c46event-filtering.component';
import { C47templateVariablesComponent } from './section4/c47template-variables/c47template-variables.component';
import { C48twoWayBindingComponent } from './section4/c48two-way-binding/c48two-way-binding.component';
import { C49pipesComponent } from './section4/c49pipes/c49pipes.component';
import { C50customPipeComponent } from './section4/c50custom-pipe/c50custom-pipe.component';
import { SummaryPipe } from './section4/c50custom-pipe/summary.pipe';
import { S4Assignment2Component } from './section4/s4-assignment2/s4-assignment2.component';
import { S4Assignment3Component } from './section4/s4-assignment3/s4-assignment3.component';
import { TitleCasePipe } from 'src/app/section4/s4-assignment3/titlecase.pipe';
import { Section5containerComponent } from './section5/section5container/section5container.component';
import { C53favoriteComponent } from './section5/c53favorite/c53favorite.component';
import { C61panelComponent } from './section5/c61panel/c61panel.component';
import { S5assignment4Component } from './section5/s5assignment4/s5assignment4.component';
import { Section6containerComponent } from './section6/section6container/section6container.component';
import { C64ngifComponent } from './section6/c64ngif/c64ngif.component';
import { C66ngSwitchCaseComponent } from './section6/c66ng-switch-case/c66ng-switch-case.component';
import { C67NgforComponent } from './section6/c67-ngfor/c67-ngfor.component';
import { C71NgClassComponent } from './section6/c71-ng-class/c71-ng-class.component';
import { C72NgstyleComponent } from './section6/c72-ngstyle/c72-ngstyle.component';
import { C73SafeTraversalOpComponent } from './section6/c73-safe-traversal-op/c73-safe-traversal-op.component';
import { C74InputFormatDirectiveDirective } from './section6/c74-input-format-directive.directive';
import { C74CustomDirectiveComponent } from './section6/c74-custom-directive/c74-custom-directive.component';
import { S6assignment5zippyComponent } from './section6/s6assignment5zippy/s6assignment5zippy.component';
import { Section7containerComponent } from './section7/section7container/section7container.component';
import { C91formComponent } from './section7/c91form/c91form.component';
import { C101formarrayComponent } from './section7/c101formarray/c101formarray.component';
import { C102formbuilderComponent } from './section7/c102formbuilder/c102formbuilder.component';
import { S8assignment7changepwComponent } from './section7/s8assignment7changepw/s8assignment7changepw.component';
import { Section9containerComponent } from './section9/section9container/section9container.component';
import { C106crudComponent } from './section9/c106crud/c106crud.component';
import { PostService } from './section9/c106crud/post.service';
import { AppErrorHandler } from './section9/app-error-handler';
import { S9assignment8Component } from './section9/s9assignment8/s9assignment8.component';
import { AssignServService } from './section9/c106crud/assign-serv.service';
import { Section15containerComponent } from './section15/section15container/section15container.component';
import { V223editCourseComponent } from './section15/v223edit-course/v223edit-course.component';
import { V224courseService } from './section15/v224course.service';
import { MdComponentsModule } from './section15/md-components/md-components.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SideMenuComponent,
    ContainerComponent,
    C33courseComponent,
    Section3containerComponent,
    S3Assignment1Component,
    Section4containerComponent,
    C40coursesComponent,
    C41attributeBindingComponent,
    C42addingBootstrapComponent,
    C43classBindingComponent,
    C44styleBindingComponent,
    C45eventBindingComponent,
    C46eventFilteringComponent,
    C47templateVariablesComponent,
    C48twoWayBindingComponent,
    C49pipesComponent,
    C50customPipeComponent,
    SummaryPipe,
    TitleCasePipe,
    S4Assignment2Component,
    S4Assignment3Component,
    Section5containerComponent,
    C53favoriteComponent,
    C61panelComponent,
    S5assignment4Component,
    Section6containerComponent,
    C64ngifComponent,
    C66ngSwitchCaseComponent,
    C67NgforComponent,
    C71NgClassComponent,
    C72NgstyleComponent,
    C73SafeTraversalOpComponent,
    C74InputFormatDirectiveDirective,
    C74CustomDirectiveComponent,
    S6assignment5zippyComponent,
    Section7containerComponent,
    C91formComponent,
    C101formarrayComponent,
    C102formbuilderComponent,
    S8assignment7changepwComponent,
    Section9containerComponent,
    C106crudComponent,
    S9assignment8Component,
    Section15containerComponent,
    V223editCourseComponent
  ],
  entryComponents:[
    V223editCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContainerComponent
      },
      {
        path: 'Section3containerComponent',
        component: Section3containerComponent
      },
      {
        path: 'Section4containerComponent',
        component: Section4containerComponent
      },
      {
        path: 'Section5containerComponent',
        component: Section5containerComponent
      },
      {
        path: 'Section6containerComponent',
        component: Section6containerComponent
      },
      {
        path: 'Section7containerComponent',
        component: Section7containerComponent
      },
      {
        path: 'Section9containerComponent',
        component: Section9containerComponent
      },
      {
        path: 'Section15containerComponent',
        component: Section15containerComponent
      }
      /*
      {
        path: 'Section2containerComponent',
        component: Section2containerComponent
      }
      */
    ])
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    AssignServService,
    V224courseService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
