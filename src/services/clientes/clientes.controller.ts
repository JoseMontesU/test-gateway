import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { lastValueFrom } from 'rxjs';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';

@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly clientesService: ClientesService,
    private readonly proxy: ClientProxyMicroservice,
  ) {}

  private clientClientes = this.proxy.clientProxyClientes();

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return lastValueFrom(
      this.clientClientes.send('SAVE_CLIENTE', createClienteDto)
    )
  }
}
