import { IsNumber, IsInt, Min } from 'class-validator';

export class caculateDto {
    @IsNumber()
    @IsInt()
    @Min(1)
    readonly a: number;

    @IsNumber()
    @IsInt()
    @Min(1)
    readonly b: number;

    @IsNumber()
    @IsInt()
    @Min(1)
    readonly x: number;
}
