import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void {
    this.OnFetch();
  }

  OnSave(){
    this.backEndService.saveData();
  }

  OnFetch(){
    console.log("OnFetch called!");
    this.backEndService.fetchData();
  }
}
