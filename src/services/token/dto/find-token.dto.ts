import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindTokenDto {

    @IsNotEmpty()
    @IsNumber()
    token: string;
}