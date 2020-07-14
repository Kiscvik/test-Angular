import { Component } from '@angular/core';
import { DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  name: string = 'Albert Einstein';
  age: number = 18;

  users: string[] = ['Pepe','Eduardo','Miguel'];

  posts =[]

  constructor( private dataService: DataService){
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }

  sayHello(){
    alert('Si funciono!');
  }

  deleteUser(user){
    for (let i=0; i<this.users.length;i++){
      if (user = user[i]){
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser){
    this.users.push(newUser.value);
    newUser.value="";
    newUser.focus();
    return false;
  }

  

  
  
}
