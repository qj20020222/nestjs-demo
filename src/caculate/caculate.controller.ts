import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { caculateService } from './caculate.service';
import { caculateDto } from './dto/caculate.dto';

@Controller('caculate')
export class caculateController {
    constructor (private readonly caculate: caculateService) {}

    @Post ('evaluate')
     evaluate(@Body() dto: caculateDto) {
        //check input
        this.validateInput(dto);
        
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
    private validateInput(dto: caculateDto) {
            if (!Number.isInteger(dto.a) || dto.a <= 0 ||
                !Number.isInteger(dto.b) || dto.b <= 0 ||
                !Number.isInteger(dto.x) || dto.x <= 0) {
              throw new HttpException('All inputs must be positive integers', HttpStatus.BAD_REQUEST);
            }
        
            if (dto.a === dto.b) {
              throw new HttpException('First two integers must be different', HttpStatus.BAD_REQUEST);
            }
          }
}