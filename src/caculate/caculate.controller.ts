import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { caculateService } from './caculate.service';
import { caculateDto } from './dto/caculate.dto';

@Controller('caculate')
export class caculateController {
    constructor (private readonly caculate: caculateService) {}

    @Post ('evaluate')
    async evaluate(@Body() dto: caculateDto) {
        //check input
        if (!Number.isInteger(dto.a) || dto.a <= 0 ||
        !Number.isInteger(dto.b) || dto.b <= 0 ||
        !Number.isInteger(dto.x) || dto.x <= 0) {
        throw new HttpException('a and b be positive integers', HttpStatus.BAD_REQUEST);
        }

        if (dto.a === dto.b) {
        throw new HttpException('a and b must be different', HttpStatus.BAD_REQUEST);
        }

        try {
            const result = this.caculate.evaluate(dto.a, dto.b, dto.x);
            return{
            status:'SUCCESS',
              data: {
                satisfiedselect: result.divide,
                fibonacciSequence: result.fibseq
              }
            };
        } catch (error) {
            throw new HttpException({
                status: 'ERROR',
                message: error
              }, HttpStatus.BAD_REQUEST);
            }
          }
}