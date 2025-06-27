
import { IsEmail, IsString,} from 'class-validator';

export class LoginClienteDto {
  @IsEmail()
  correo: string;

  @IsString()
  password: string;
}