import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Entro a interceptor');
        const user:any = JSON.parse(localStorage.getItem('user') || 'null');
        const token = user?.jwtToken;
        console.log(user, token);

        if (token) {
            // Clonar la solicitud para añadir el encabezado de Authorization
            const cloned = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });

            return next.handle(cloned);
        }

        // Si no hay token, continúa con la solicitud original
        return next.handle(req);
    }
}
