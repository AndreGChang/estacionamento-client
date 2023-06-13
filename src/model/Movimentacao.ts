import { AbstractEntity } from "./AbstractEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity{
    entrada! : Date
    saida! : Date
    horas! : number
    minutos! : number
    tempoMulta! : Date
    tempoDesconto! : number
    valorDesconto! : number
    valorMulta! : number
    valorHoraMulta! : number
    valorHoraTotal! : number
    veiculo! : Veiculo
    condutor! : Condutor
}