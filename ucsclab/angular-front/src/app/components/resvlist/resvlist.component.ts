import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-resvlist',
  templateUrl: './resvlist.component.html',
  styleUrls: ['./resvlist.component.css']
})
export class ResvlistComponent implements OnInit {
  data : any[]=[];
  constructor(
    private authService:AuthService
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
