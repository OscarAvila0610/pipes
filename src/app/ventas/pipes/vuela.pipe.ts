import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';


@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

    transform(condicion: boolean):string{

        return (condicion) ? 'vuela': 'no vuela'
    }
}