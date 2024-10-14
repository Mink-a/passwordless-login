import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMailerDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  link: string;
}
