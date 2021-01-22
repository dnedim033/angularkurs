import { Component, OnInit } from '@angular/core';
import { GlobalniService } from '../globalni.service';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {
  sveDrzave: any;
  drezultat: any;
  terminZaPretragu: string ='';

  constructor(private apid: GlobalniService) { }

  ngOnInit(): void {
   this.apid.getDrzave().subscribe((drezultat)=>{
   this.sveDrzave= drezultat;
   console.log(this.drezultat)
    }, error=>console.log('Greska '));
  }
  Pretrazi(): void {
    this.apid.pretraziDrzave(this.terminZaPretragu).subscribe((rezultat: any) => {
      this.sveDrzave = rezultat;
    });
  };
  
}
