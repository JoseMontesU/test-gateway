import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';
import { lastValueFrom } from 'rxjs';

@Controller('token')
export class TokenController {
  constructor(
    private readonly tokenService: TokenService,
    private readonly proxy: ClientProxyMicroservice,
  ) {}

  private clientSeguridad = this.proxy.clientProxySeguridad();

  @Post()
  async create(@Body() createTokenDto: CreateTokenDto) {
    console.log('se recibio la peticion de crear token desde postman');
    return await lastValueFrom(this.clientSeguridad.send('CREATE_TOKEN', {}));
  }
}
