import { Component,OnInit} from '@angular/core';
import { VendorservService } from '../../service/vendorserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.css'
})
export class VendorsComponent implements OnInit{


  vendors: any;
  varr:any;
  // value:boolean=false;
  
  constructor(private vendorservService: VendorservService,private router:Router) {}
  
  ngOnInit() {
    this.vendorservService.getVendors().subscribe(
      data => {
        this.vendors = data;  
      },
      error => {
        console.error('Error fetching vendors', error);
      }
    );

     this.varr=this.vendorservService.store;
     console.log(this.varr+"hellosdf")
  }

  myMethod(cakeinfo:string):void {

  
   this.vendorservService.getVendors().subscribe(
    (data)=>{
      const vendors=data[cakeinfo];
      this.vendors=vendors;

      this.useMethod1(cakeinfo);
    }
   )

  //  this.value=true;
  //  console.log(this.value)

    }


  useMethod1(cakeinfo:any): void {
    this.vendorservService.methodcake(cakeinfo);
   this.router.navigate(['/vendors']);  //routing
  }
  
  
}
