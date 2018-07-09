import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  lab:any;
  date:String;
  timefrom:String;
  timeto:String;
  reason:String;

  constructor(
    private authService:AuthService,
    private flashmessage: FlashMessagesService,
    private router:Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lab = params['lab'];
      //console.log(this.id);
    });
  }
  makeReservation(){
    const reservation ={
      lab:this.lab,
      date:this.date,
      timefrom:this.timefrom,
      timeto:this.timeto,
      reason:this.reason

    };
    this.authService.makeRes(reservation).subscribe(res=>{
      console.log(res);
       
   if(res.state) {
        this.flashmessage.show("Reservation success", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/reservationsList']);

      }else {
        this.flashmessage.show("something went wrong", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/reservation']);
      }
      


    });





  }

}
