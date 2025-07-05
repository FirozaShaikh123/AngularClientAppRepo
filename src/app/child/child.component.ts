// import { Component, Input, input } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   imports: [],
//   template: '{{childData}}',
//   styleUrl: './child.component.scss'
// })
// export class ChildComponent {
//   @Input() childData: string;
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '{{ childData }}',  // Display the input data
  styleUrls: ['./child.component.scss']  // Corrected to styleUrls (not styleUrl)
})
export class ChildComponent {
 // @Input() childData: string;  // Property that will receive data from the parent
}