import { IsNotEmpty } from "class-validator";

export class CreateClienteDto {
    @IsNotEmpty()
    tipo_documento: string;

    @IsNotEmpty()
    numero_documento: string;

    @IsNotEmpty()
    nombre: string;
    @IsNotEmpty()
    apellido: string;

    @IsNotEmpty()
    fecha_nacimiento: Date;

    @IsNotEmpty()
    lugar_residencia: string;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    correo: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    genero: string;

    @IsNotEmpty()
    bono_bienvenida: number;

    @IsNotEmpty()
    token: string;
}
