import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title      : string;
  @Input() content    : string;
  @Input() loveIts    : number;
  @Input() created_at : Date;
  compteur:number = 0;

  constructor() { }

  ngOnInit() {
  }


  compteurAdd = ( ) =>{
    this.compteur = this.compteur +1;
  }
  compteurDown = ( )=> {
    this.compteur = this.compteur - 1;
  }

  getBackColor = () =>{

    if(this.compteur === 0){
      return 'white';  
    }else if(this.compteur > 0){
      return 'lightgreen';
  }else{
    return 'red';
  }
}

getTextColor = () =>{
  if(this.compteur === 0){
    return 'black';  
  }else if(this.compteur > 0){
    return 'darkgreen';
}else{
  return 'darkred';
}
}
}
