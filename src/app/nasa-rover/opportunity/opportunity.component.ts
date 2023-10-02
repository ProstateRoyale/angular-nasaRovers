import { Component } from '@angular/core';
import { NasaRoverService } from 'src/app/services/nasa-rover.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent {
  date : string
  dateOpportunityUrl: any
  dateOpportunity: any
  data = {
    "id": 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1bjHIkWytNP_XY3c83Dp1F8ajAuXRv_WxA&usqp=CAU",
    "name": "Opportunity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 3881,
    "max_date": "2023-07-07",
    "total_photos": 662.891,
  }
  constructor(private Opportunity: NasaRoverService) {
  }

  onInput(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
    console.log(this.date);
  }
  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.date);
    this.Opportunity.searchOpportunity(this.date).subscribe((response: any) => {
      this.dateOpportunityUrl = response.photos
      this.dateOpportunity = response.photos[0]
      console.log(response.photos);
    })
  }
}
