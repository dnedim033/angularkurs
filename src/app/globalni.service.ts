import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransakcijaModel } from './interfejsi/transakcija-model';
import { ZaposlenikModel } from './interfejsi/zaposlenik-model';
import { TransakcijeComponent } from './transakcije/transakcije.component';



@Injectable({
  providedIn: 'root'
})

export class GlobalniService {



  constructor(private http:HttpClient) { }
  public getZaposlenici(): any 
{
   return this.http.get('https://www.angular-kurs.online/api/zaposlenici')
     // return this.zaposlenici;
  }
public getTransakcije() {
  return this.http.get('https://www.angular-kurs.online/api/transakcije')
}
public getDrzave() {
    return this.http.get('https://www.angular-kurs.online/api/drzave')
}
public pretraziDrzave(terminZaPretragu:string) {
  return this.http.get('https://www.angular-kurs.online/api/drzave/'+ terminZaPretragu);
}
public postZaposlenik(noviZaposlenik: any): Observable<ZaposlenikModel> {
  return this.http.post<any>('https://www.angular-kurs.online/api/zaposlenici', noviZaposlenik);
}
public postTransakacije(novaTransakcija: TransakcijaModel){
  return this.http.post<TransakcijaModel>('https?//wwww.angular-kurs.online/api/transakcije',novaTransakcija)

}

}

