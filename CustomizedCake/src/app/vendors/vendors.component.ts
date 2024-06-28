import { Component,OnInit} from '@angular/core';
import { VendorservService } from '../service/vendorserv.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css'
})
export class VendorsComponent implements OnInit{

  vendors: any;
  selectedlocation:string= "pune"; 
  
  

  constructor(private vendorservService: VendorservService) {}

  ngOnInit() {
    this.vendorservService.getVendors().subscribe(
      data => {
        this.vendors = data;  
      },
      error => {
        console.error('Error fetching vendors', error);
      }
    );
  }


  
}
