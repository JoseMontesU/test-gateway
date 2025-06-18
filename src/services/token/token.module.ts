import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { ClientProxyMicroservice } from 'src/helper/proxy/client.proxy';

@Module({
  imports: [],
  controllers: [TokenController],
  providers: [TokenService, ClientProxyMicroservice],
})
export class TokenModule {}
