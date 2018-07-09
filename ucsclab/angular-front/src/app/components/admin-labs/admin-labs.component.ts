import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-labs',
  templateUrl: './admin-labs.component.html',
  styleUrls: ['./admin-labs.component.css']
})
export class AdminLabsComponent implements OnInit {

  labdata:any;
  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.showLabsDet();
  }
  
  deleteIt(itm:any){

    this.authService.deleteLab(itm).subscribe(res=>{
 
      console.log(res);
 
      this.flashMessage.show("Successfully deleted", {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/adminLabs']);
     
    });
 
    //this.onCloseHandled3();
  }
  showLabsDet(){
    
    this.authService.showLabs().subscribe(res=>{
      //console.log(res.Lab_details);
      this.labdata= res.Lab_details;
    });
  }

}
