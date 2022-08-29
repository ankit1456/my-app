import { CanActivate, HttpStatus } from '@nestjs/common';
import { ExecutionContext, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AdminAuthGaurd implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.role === 'admin') {
      return true;
    }
    throw new HttpException('Unauthorized Access', HttpStatus.UNAUTHORIZED);
  }
}
