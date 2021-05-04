import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
         AfterContentChecked, AfterViewInit, AfterViewChecked,
         OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style>

    <app-css></app-css>
    
    <app-clases></app-clases>
    
    <p [appResaltado]="'orange'">
      Directivas personalizadas
    </p>

    <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("Yo soy el Constructor");
  }

  ngOnInit(): void {
    console.log("Yo soy el OnInit");
  }
  
  ngOnChanges(): void {
    console.log("Yo soy el OnChanges");
  }

  ngDoCheck(): void {
    console.log("Yo soy el DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("Yo soy el AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("Yo soy el AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("Yo soy el AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("Yo soy el AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("Yo soy el OnDestroy");
  }

}  
