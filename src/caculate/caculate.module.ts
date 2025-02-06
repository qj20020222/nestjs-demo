import { Module } from '@nestjs/common';
import { caculateService } from './caculate.service';
import { caculateController } from './caculate.controller';

@Module({
    controllers: [caculateController],
    providers: [caculateService]
  })
  export class caculateModule {}