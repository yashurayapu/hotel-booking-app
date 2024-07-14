import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HotelDetailComponent } from './hotel-list/hotel-list.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from 'confirmationcomponent';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: '' } // Redirect to home page for any unmatched route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

