import { Marca } from './Marca';
import { AbstractEntity } from "./AbstractEntity";

export class Modelo extends AbstractEntity{

    nome!: string
    marca!: Marca

    constructor(){
        super()
        this.ativo=true
    }

}