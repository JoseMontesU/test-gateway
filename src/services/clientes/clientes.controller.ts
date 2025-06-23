import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { lastValueFrom } from 'rxjs';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly proxy: ClientProxyMicroservice,
  ) {}

  private clientClientes = this.proxy.clientProxyClientes();
  private clientSeguridad = this.proxy.clientProxySeguridad();

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
