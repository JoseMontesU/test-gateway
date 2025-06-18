import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './helper/proxy/proxy.module';
import { TokenModule } from './services/token/token.module';

@Module({
  imports: [
    ProxyModule,
    TokenModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
