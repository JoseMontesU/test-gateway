import { IsNotEmpty } from "class-validator";
import { IsAdult } from "./is-adult.decorator";


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
    @IsAdult({ message: 'Debes ser mayor de 18 años.' })
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
