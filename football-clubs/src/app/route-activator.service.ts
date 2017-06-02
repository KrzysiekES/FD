import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class RouteActivatorService {

    constructor(private router: Router) {

     }

     canActivate(){
         return false;
     }
}