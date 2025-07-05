import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DiserviceService } from '../diservice.service';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private router: Router,private diserviceService : DiserviceService) {}
istrue:boolean =true;
isVisible:boolean=true;


ngOnInit(): void {
 console.log( this.diserviceService.getMessage());
  // Create an Observable
  const numbersObservable = new Observable<number>((observer) => {
    // Emit values to the observer
    observer.next(1);   // Emits a value of 1
    observer.next(2);   // Emits a value of 2
    observer.next(3);   // Emits a value of 3

    // Simulate a delay and emit more values after 2 seconds
    setTimeout(() => {
      observer.next(4); // Emits a value of 4 after 2 seconds
      observer.complete(); // Marks the Observable as complete (no more values)
    }, 2000);
  });

  // Subscribe to the Observable
  numbersObservable.subscribe({
    next: (value) => console.log('Received value:', value), // Called when a value is emitted
    error: (err) => console.error('Error:', err),           // Called when there is an error
    complete: () => console.log('Observable completed!')    // Called when the Observable completes
  });
}











users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Michael Johnson', email: 'michael@example.com' },
  { id: 4, name: 'Sara Lee', email: 'sara@example.com' },
];

MyDashboardBtn()
{

  alert("firoza");
}

MyDashboarBtn2()
{
  alert(2)
}

MyButton3()
{
  alert(33);
}
MyRedirect()
{
 this.router.navigate(['/payment']);
}
}
