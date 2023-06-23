import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

class MarcaClient{ 

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca'
        });
    }

    public async findById(id : number) : Promise<Marca> {
        try{
            return(await this.axiosClient.get<Marca>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Marca[]>{
        try{
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos() : Promise<Marca[]>{ 
        try{
            return (await this.axiosClient.get<Marca[]>('/ativo')).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca : Marca) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>(``, marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id : number,marca : Marca) : Promise<string>{
        try{
            return (await this.axiosClient.put<string>(`/${id}`,marca)).data
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

export default new MarcaClient();