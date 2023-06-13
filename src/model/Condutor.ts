import { AbstractEntity } from "./AbstractEntity";

export class Condutor extends AbstractEntity{
    nome! : string
    cpf! : string
    telefone! : string
    tempoPago! : number
    tempoDesconto! : number

    constructor() {
        super()
        this.ativo = true
    }

}