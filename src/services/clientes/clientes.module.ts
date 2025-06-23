import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';

@Module({
  imports: [],
  controllers: [ClientesController],
  providers: [ClientProxyMicroservice],
})
export class ClientesModule {}
