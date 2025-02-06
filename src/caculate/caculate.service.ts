import { Injectable } from '@nestjs/common';

@Injectable()
export class caculateService {
    evaluate(a:number, b: number, x: number) : {divide:number; fibseq:string} {
        const start = Math.min(a, b);
        const end = Math.max(a, b);
        const divides =  Array.from({ length: end - start + 1 }, (_, i) => start + i);
        const validDivisors = divides.filter(divide => x % divide === 0);

        //seclect a number in validdivisors randomly
        const selected = validDivisors[Math.floor(Math.random() * validDivisors.length)];

        // generate a fibonacci sequence where the last number is less than x
        let [p, q] = [0, 1];
        const result: number[] = [p];
        while (q < selected) {
            result.push(q);
            [p, q] = [p, p+q];
        }

        return {
            divide: selected,
            fibseq: result.join('')
        };
    }
}
