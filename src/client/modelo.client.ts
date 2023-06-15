import { Modelo } from "@/model/Modelo";
import axios, {AxiosInstance} from "axios";

export class ModeloClient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL:"http://localhost:8080/api/modelo",
            headers:{"Content-Type" : "application/JSON"}
        })
    }

    public async findById(id : number) : Promise<Modelo> {
        try{
            return(await this.axiosClient.get<Modelo>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Modelo[]>{
        try{
            return (await this.axiosClient.get<Modelo[]>(`/listar`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos() : Promise<Modelo[]>{
        try{
            return (await this.axiosClient.get<Modelo[]>('/ativo')).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca : Modelo) : Promise<void>{
        try{
            return (await this.axiosClient.post('/', marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(marca : Modelo) : Promise<Modelo>{
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