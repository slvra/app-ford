

 acho q o icon de menu pode ir direto na home
 n gostei do icon de user, pensar em uma ideia diferente (uma opçao é diexar dentro da sidebar)

- implementar a sidebar com bs

https://stackblitz.com/edit/ng-bootstrap-sidebar?file=src%2Fapp%2Fsidebar%2Fsidebar.component.scss

Cannot find name 'provideHttpClient'

The error "Cannot find name 'provideHttpClient'" in Angular applications, particularly in versions 18 and later, indicates that the HttpClient functionalities haven't been properly set up. This is because HttpClientModule is deprecated in Angular 18 and later, replaced by the provideHttpClient function. To solve this, one should configure HttpClient using provideHttpClient within the application's configuration.
In Angular 18 and later, the app.module.ts file might not be present due to the shift towards standalone components. Instead, the configuration is typically located in app.config.ts. To resolve the error, add provideHttpClient() to the providers array within the app.config.ts file.

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
  ]
};

______________________
Erro Angular TS2339: A propriedade 'veículo' não existe no tipo 'Veículo[]'

1 serviço
getVehicles(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(CONSTANST.routes.vehicle.list);
    }
2 componentes
  getVehicles() {
        this.priceruleService.getVehicles()
            .pipe(
                map(data => {
                    console.log("data :" , data.vehicle.results)
                    return data
                })
            )
            .subscribe(data => this.vehicles = data);
    }
modelo
export interface Vehicle {
    _id: number
    name: string
    Type: string
    Stock: string
    vehicle: any
}

Erro Angular TS2339: A propriedade 'veículo' não existe no tipo 'Veículo[]'. O erro estava em data.vehicle.results. Alguém sabe? O problema está no modelo Veículo? Tentei adicionar veículo no modelo Sames, mas não está funcionando.

1 serviço
getVehicles(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(CONSTANST.routes.vehicle.list);
    }
2 componentes
  getVehicles() {
        this.priceruleService.getVehicles()
            .pipe(
                map(data => {
                    console.log("data :" , data.vehicle.results)
                    return data
                })
            )
            .subscribe(data => this.vehicles = data);
    }
modelo
export interface Vehicle {
    _id: number
    name: string
    Type: string
    Stock: string
    vehicle: any
}
estrutura de dados
https://i.sstatic.net/ECMsg.jpg

