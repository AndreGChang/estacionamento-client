
import { Veiculo } from "@/model/Veiculo";
import axios, { AxiosInstance } from "axios";

 class VeiculoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Veiculo> {
        try{
            return(await this.axiosClient.get<Veiculo>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Veiculo[]>{
        try{
            return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async listAtivos() : Promise<Veiculo[]>{
        try{
            return (await this.axiosClient.get<Veiculo[]>('/ativo')).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca : Veiculo) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', marca)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar(id : number,marca : Veiculo) : Promise<string>{
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

export default new VeiculoClient();