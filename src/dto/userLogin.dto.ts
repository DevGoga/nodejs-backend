import { IsString } from 'class-validator';

export class UserLoginDto {
  @IsString()
  nick: string;
  password: number;
}
