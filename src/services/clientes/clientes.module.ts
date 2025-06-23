import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';

@Module({
  imports: [],
  controllers: [ClientesController],
  providers: [ClientesService, ClientProxyMicroservice],
})
export class ClientesModule {}
