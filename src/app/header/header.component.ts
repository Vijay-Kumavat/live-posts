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
  }

  OnSave(){
    this.backEndService.saveData();
  }

  OnFetch(){
    this.backEndService.fetchData();
  }
}
