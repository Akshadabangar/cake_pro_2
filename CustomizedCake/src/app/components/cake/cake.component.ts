import { Component, OnInit} from '@angular/core';
import { VendorservService } from '../../service/vendorserv.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})
export class CakeComponent implements OnInit{
  
  vendors:any;
  varr1:any;

  constructor(private vendorservService: VendorservService){}

  ngOnInit(): void{

    this.vendorservService.getVendors().subscribe(
      data=>{
        this.vendors=data;
      },
      error => {
        console.error('Error fetching vendors', error);
      }
      
    );

this.varr1=this.vendorservService.storecake;
console.log(this.varr1+"Hiii")
   
  }

  

}
