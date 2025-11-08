import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

 const router = inject(Router);
  const isAuthenicate = true
  if(isAuthenicate){
    return true
  }
  else{
  
    return router.parseUrl("notfound")
  }


  return true;
};
