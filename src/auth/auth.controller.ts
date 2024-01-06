/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: any) {
    console.log({
      dto,
    });
    this.AuthService.sigup();
  }

  @Post('login')
  login() {
    this.AuthService.login();
  }
}
