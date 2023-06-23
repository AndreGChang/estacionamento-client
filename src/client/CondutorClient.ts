import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/Condutor";


class CondutorClient{
    
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }
    
    // buscar por ID
    public async findById(id: number) : Promise<Condutor> {
        try{
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    // buscar uma lista
    public async listAll() : Promise<Condutor[]> {
        try{
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }   

    public async listAtivos() : Promise<Condutor[]>{
        try{
            return (await this.axiosClient.get<Condutor[]>('/ativo')).data
        }catch(error:any){
            return Promise.reject(error.response)
        }
    }

    // cadastrar um condutor
    public async cadastrar(condutor: Condutor): Promise<string> {
		try {
			return (await this.axiosClient.post<string>('', condutor)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    // editar um condutor
    public async editar(id:number,condutor: Condutor): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    // deletar um condutor
    public async delete(id: number) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        }
        catch(error: any) {
            return Promise.reject(error.response)
        }
    }
}

export default new CondutorClient()