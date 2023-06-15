
import { Movimentacao } from "@/model/Movimentacao";
import axios, { AxiosInstance } from "axios";

export class MarcaClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Movimentacao> {
        try{
            return(await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Movimentacao[]>{
        try{
            return (await this.axiosClient.get<Movimentacao[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos() : Promise<Movimentacao[]>{
        try{
            return (await this.axiosClient.get<Movimentacao[]>('/ativo')).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca : Movimentacao) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(marca : Movimentacao) : Promise<Movimentacao>{
        try{
            return (await this.axiosClient.put(`/${marca.id}`,marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id : number) : Promise<string>{
        try{
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

}