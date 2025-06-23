import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './helper/proxy/proxy.module';
import { TokenModule } from './services/token/token.module';
import { ParametrosModule } from './services/parametros/parametros.module';
import { CorreosModule } from './services/correos/correos.module';
import { ClientesModule } from './services/clientes/clientes.module';

@Module({
  imports: [
    ProxyModule,
    TokenModule,
    ClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
