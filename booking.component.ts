import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private router: Router
  ) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomCount: [1, Validators.min(1)],
     
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      // Process booking
      this.hotelService.bookHotel(this.bookingForm.value).subscribe(
        (response) => {
          console.log('Booking successful!', response);
          this.router.navigate(['/confirmation']);
        },
        (error) => {
          console.error('Error booking hotel:', error);
        
        }
      );
    } else {
    
      console.error('Form is invalid');
    }
  }

}
