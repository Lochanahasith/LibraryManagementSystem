import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {
  labdata:any;
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.showLabsDet();
  }
  showLabsDet(){
    
    this.authService.showLabs().subscribe(res=>{
      //console.log(res.Lab_details);
      this.labdata= res.Lab_details;
    });
  }


}
