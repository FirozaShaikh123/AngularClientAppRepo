import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  template: '<app-child [childData]="title"></app-child>',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  title:string ="my name is firoza and I am parent"
}
