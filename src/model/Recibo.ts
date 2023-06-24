import { Condutor } from "./Condutor"
import { Veiculo } from "./Veiculo"

export class Recibo{
    entrada! : Date
    saida! : Date
    condutor! : Condutor
    veiculo! : Veiculo
    horas! : number
    horasDesconto! : number
    valor! : number
    desconto! : number

    // constructor(entrada : Date, saida : Date, condutor: Condutor, veiculo : Veiculo, horas : number, horasDesconto : number, valor : number, desconto : number){
    //     this.entrada = entrada;
    //     this.saida = saida;
    //     this.condutor = condutor;
    //     this.veiculo = veiculo;
    //     this.horas  = horas;
    //     this.horasDesconto = horasDesconto;
    //     this.valor = valor;
    //     this.desconto = desconto;
    // }

}