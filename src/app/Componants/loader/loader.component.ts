import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent  {

  constructor(private _LoaderService:LoaderService){
  }
  isLoading:BehaviorSubject<boolean>= this._LoaderService.isLoading
  ngOnInit(): void {

  }



}
