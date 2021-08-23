import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items!: Item[];
  replyState: boolean = false;
  itemToReply: Item;
  constructor(private itemService: ItemService) { }
  //constructor() { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items=>{
      //console.log(items);
      this.items = items;
  });
  }
  replyItem(item: Item){
    this.itemService.replyItem(item);
    this.replyState = true;
    this.itemToReply = item;

}
clearreplyState(){
  this.replyState = false;
  this.itemToReply = null;
}
}
