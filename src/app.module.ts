import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { caculateModule } from './caculate/caculate.module';

@Module({
  imports: [caculateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
