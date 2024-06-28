import { Component ,OnInit} from '@angular/core';
import { VendorservService } from './service/vendorserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'CustomizedCake';

  databasename: any; 


  constructor(private vendorservService: VendorservService) {}

  ngOnInit(): void {
    this.vendorservService.getLocation().subscribe(
      (data) => {
        this.databasename = data; 
        
      }
    );
  }

  mymethod(arg0: any) {
    console.log(arg0);
    }

}
