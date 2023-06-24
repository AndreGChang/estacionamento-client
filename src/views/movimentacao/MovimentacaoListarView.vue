<template>
    <div class="container text-center">
        <div class="row d-flex align-items-center d">
            <div class="col">
                <h1>Lista Movimentacao</h1>
            </div>
            <div class="col">
                <RouterLink to="/cadastrar-movimentacao">
                    <button type="button" class="btn btn-success">Cadastrar</button>
                </RouterLink>
            </div>
        </div>  

        <div class="col-12">
            <div class="">
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">status</th>
                            <th scope="col">Entrada</th>
                            <th scope="col">Veiculo</th>
                            <th scope="col">Condutor</th>
                            <th scoped="col">Opc</th>
                            <th scope="col">Finalizar Movimentacao</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in movimentacaoLista" :key="item.id">
                            <th scope="row">{{ item.id }}</th>
                            <td>
                                <span v-if="item.ativo" class="badge text-bg-success">ativo</span>
                                <span v-if="!item.ativo" class="badge text-bg-danger">inativo</span>
                            </td>
                            <td>{{ item.entrada }}</td>
                            <td>{{ item.veiculo.placa }}</td>
                            <td>{{ item.condutor.nome }}</td>
                            <th class="col-md-2">
                                <div class="grid d-flex justify-content-center">
                                    <div class="p-2 g-col-6">
                                        <div class="btn-group" role="group" ariel-label="Basic mixed styles example">
                                            <RouterLink type="button" class="btn btn-outline-warning"
                                                :to="{ name: 'cadastrar-movimentacao-editar-view', query: { id: item.id, form: 'editar' } }">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
                                                    </path>
                                                    <path fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
                                                    </path>
                                                </svg>
                                            </RouterLink>
                                        </div>
                                        <div class="btn-group" role="group" ariel-label="basic mixed styles example">
                                            <RouterLink type="button" class="btn btn-outline-danger"
                                                :to="{ name: 'cadastrar-movimentacao-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z">
                                                    </path>
                                                    <path
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z">
                                                    </path>
                                                </svg>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th class="col-md-2">
                                <div class="p-2 g-col-6">
                                    <div class="btn-group" role="group" aria-label="basic mixed styles example">
                                        <RouterLink type="button" class="btn btn-outline-danger  btn-lg" :to="{name : 'movimentacao-recibo-view', query: {id: item.id}}">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                fill="currentColor" class="bi bi-sign-stop" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.16 10.08c-.931 0-1.447-.493-1.494-1.132h.653c.065.346.396.583.891.583.524 0 .83-.246.83-.62 0-.303-.203-.467-.637-.572l-.656-.164c-.61-.147-.978-.51-.978-1.078 0-.706.597-1.184 1.444-1.184.853 0 1.386.475 1.436 1.087h-.645c-.064-.32-.352-.542-.797-.542-.472 0-.77.246-.77.6 0 .261.196.437.553.522l.654.161c.673.164 1.06.487 1.06 1.11 0 .736-.574 1.228-1.544 1.228Zm3.427-3.51V10h-.665V6.57H4.753V6h3.006v.568H6.587Z" />
                                                <path fill-rule="evenodd"
                                                    d="M11.045 7.73v.544c0 1.131-.636 1.805-1.661 1.805-1.026 0-1.664-.674-1.664-1.805V7.73c0-1.136.638-1.807 1.664-1.807 1.025 0 1.66.674 1.66 1.807Zm-.674.547v-.553c0-.827-.422-1.234-.987-1.234-.572 0-.99.407-.99 1.234v.553c0 .83.418 1.237.99 1.237.565 0 .987-.408.987-1.237Zm1.15-2.276h1.535c.82 0 1.316.55 1.316 1.292 0 .747-.501 1.289-1.321 1.289h-.865V10h-.665V6.001Zm1.436 2.036c.463 0 .735-.272.735-.744s-.272-.741-.735-.741h-.774v1.485h.774Z" />
                                                <path fill-rule="evenodd"
                                                    d="M4.893 0a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146A.5.5 0 0 0 11.107 0H4.893ZM1 5.1 5.1 1h5.8L15 5.1v5.8L10.9 15H5.1L1 10.9V5.1Z" />
                                            </svg>
                                        </RouterLink>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
  
<style scoped lang="scss">
.d {
    color: black; 
}
</style>




<script lang="ts">
import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Movimentacao } from '@/model/Movimentacao';


export default defineComponent({
    name: 'VeiculoListaView',
    data() {
        return {
            movimentacaoLista: new Array<Movimentacao>()
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.listAll().then(success => {
                this.movimentacaoLista = success
            }).catch(error => {
                console.log(error);
            });
        }
    }
});

</script>
