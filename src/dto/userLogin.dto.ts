import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @Type(() => String)
  nick: string;
  password: number;
}
