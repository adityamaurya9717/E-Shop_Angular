import { HttpInterceptorFn } from '@angular/common/http';

export const tokenFilterInterceptor: HttpInterceptorFn = (req, next) => {
  req.headers.append('X-Token-Filter', 'my-token-value');
  return next(req);
};
