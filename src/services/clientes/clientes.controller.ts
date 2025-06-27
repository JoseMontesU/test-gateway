import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { lastValueFrom } from 'rxjs';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';
import { LoginClienteDto } from './dto/login-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly proxy: ClientProxyMicroservice,
  ) {}

  private clientClientes = this.proxy.clientProxyClientes();
  private clientSeguridad = this.proxy.clientProxySeguridad();

   @Post('login')
  async login(@Body() loginDto: LoginClienteDto) {
    
    return lastValueFrom(
      this.clientClientes.send('VALIDATE_CLIENTE', loginDto)
    );
  }

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    const token: any = await lastValueFrom(
      this.clientSeguridad.send('FIND_TOKEN', { token: createClienteDto.token })
    )

    if (!token.success) 
      return { success: false, message: 'Token no válido', data: null };

    return lastValueFrom(
      this.clientClientes.send('SAVE_CLIENTE', createClienteDto)
    )
  }
}
