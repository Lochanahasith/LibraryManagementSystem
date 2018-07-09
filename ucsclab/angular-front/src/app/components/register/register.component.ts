import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  post:String;
  email:String;
  password:String;


  constructor(
    private authService:AuthService,
    private flashmessage: FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  registerData(){
    const user ={
      name:this.name,
      username:this.username,
      post:this.post,
      email:this.email,
      password:this.password

    };
  
    this.authService.registerUser(user).subscribe(res=>{
       
      if(res.state) {
        this.flashmessage.show("You're registered", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);

      }else {
        this.flashmessage.show("something went wrong", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
      


    }); 
  }
}
