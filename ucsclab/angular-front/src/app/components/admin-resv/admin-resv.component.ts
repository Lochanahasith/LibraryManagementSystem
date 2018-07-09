import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-admin-resv',
  templateUrl: './admin-resv.component.html',
  styleUrls: ['./admin-resv.component.css']
})
export class AdminResvComponent implements OnInit {
  data : any[]=[];
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router

  ) { }

  ngOnInit() {
    this.showResvDet();
  }
  showResvDet(){
    
    this.authService.showResvList().subscribe(res=>{
      //console.log(res.Lab_details);
      this.data= res.Reservation_details;
    });
  }

  deleteIt(itm:any){

    this.authService.deleteResv(itm).subscribe(res=>{
 
      console.log(res);
 
      this.flashMessage.show("Successfully deleted", {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/adminResv']);
     
    });
 
    //this.onCloseHandled3();
  }
 
 
 




  download(){






    const doc = new jsPDF();
     var col = ["Lab","Date","Time from","Time to","Reason"];

     doc.page = 1;
    
     var rows = [];
     //var rows1 = [];

     this.data.forEach(element => {     
      var temp = [element.lab,element.date,element.timefrom,element.timeto,element.reason];
    
      rows.push(temp);


     

  });   
 
  doc.autoTable(col, rows, { startY: 20 });
  doc.text("Lab Reservations", 10, 10);
 
 
  //doc.text(150,285, 'page ' + doc.page);
  //doc.page ++;
  doc.save('Lab reservations.pdf');     

 


}

}
