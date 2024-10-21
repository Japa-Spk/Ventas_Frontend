import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusquedaService {
    private busquedaSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public busqueda$: Observable<string> = this.busquedaSubject.asObservable();

    constructor() { }

    setBusqueda(busqueda: string): void {
        this.busquedaSubject.next(busqueda);
    }
}
