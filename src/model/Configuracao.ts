import { AbstractEntity } from "./AbstractEntity"

export class Configuracao extends AbstractEntity{

    valorHora! : number
    valorMulta! : number
    inicioExepedinete! :  Date
    fimExpediente! : Date
    tempoParaDesconto! : number
    tempoDeDesconto! : number
    gerarDesconto! : boolean
    vagasCarro! : number
    vagasMoto! : number
    vagasVans! : number

}