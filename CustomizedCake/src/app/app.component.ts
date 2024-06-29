import { Component ,OnInit} from '@angular/core';
import { VendorservService } from './service/vendorserv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'CustomizedCake';

  databasename: any; 
vendors:any[]=[];

  constructor(private vendorservService: VendorservService, private http: HttpClient) {}

  ngOnInit(): void {
    this.vendorservService.getLocation().subscribe(
      (data) => {
        this.databasename = data; 
        
      }
    );
  }

  mymethod(city: string): void {
    this.vendorservService.getVendors().subscribe(
      (data) => {
        const vendors = data[city]; 
        if (vendors) {
          console.log(`Vendors in ${city}:`, vendors);
          this.vendors = vendors;

        } else {
          console.error(`No vendors found for ${city}.`);
          this.vendors = [];
        }
      },
      
    );
  }

  

  
}
