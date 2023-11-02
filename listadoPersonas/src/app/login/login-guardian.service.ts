import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

import { LoginServise } from "./login.service";
@Injectable()
export class LogGuard {
    constructor(private loginService: LoginServise,
        private router: Router) { }
    canActivate() {
        if (this.loginService.isAutenticado()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}