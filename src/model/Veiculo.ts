import { AbstractEntity } from "./AbstractEntity";
import { Cor } from "./Cor";
import { Modelo } from "./Modelo";
import { Tipo } from "./Tipo";

export class Veiculo extends AbstractEntity{
    placa! : string
    ano! : number
    cor! :  Cor
    tipo! : Tipo
    modelo! : Modelo
}