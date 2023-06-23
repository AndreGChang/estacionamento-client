<template>
    <div class="container text-center">
        <div class="row d-flex align-items-center" d>
            <div class="col">
                <h1>Lista Marca</h1>
            </div>
            <div class="col"> 
                <RouterLink to="/cadastrar-marca">
                    <button type="button" class="btn btn-success">Cadastrar</button>
                </RouterLink>

            </div>
        </div>

        <div class="col-12">
            <table class="table table-dark table-striped table-hover h-100 inline-block">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">status</th>
                        <th scope="col" class="text-start">Marca</th>
                        <th scope="col" colspan="2">Opcoes</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="item in marcaLista" :key="item.id">
                        <th class="col-md-1">{{ item.id }}</th>
                        <th class="col=md-2">
                            <span v-if="item.ativo" class="badge text-bg-success">Ativo</span>
                            <span v-if="!item.ativo" class="badge text-bg-danger">Inativo</span>
                        </th>
                        <th class="text-start">{{ item.nome }}</th>
                        <th class="col-md-2">
                            <div class="grid d-flex justify-content-center">
                                <div class="p-2 g-col-6">
                                    <div class="btn-group" role="group" ariel-label="Basic mixed styles example">
                                        <RouterLink type="button" class="btn btn-outline-warning"
                                            :to="{ name: 'cadastrar-marca-editar-view', query: { id: item.id, form: 'editar' } }">
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
                                            :to="{ name: 'cadastrar-marca-excluir-view', query: { id: item.id, form: 'excluir' } }">
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
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarcaClient from '@/client/MarcaClient';
import { Marca } from '@/model/Marca';


export default defineComponent({
    name: 'MarcaListaView',
    data() {
        return {
            marcaLista: new Array<Marca>()
        };
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MarcaClient.listAll().then(success => {
                this.marcaLista = success;
            })
                .catch(error => {
                    console.log(error);
                });
        }
    }

});


</script>

<style scoped lans="scss">
.d {
    color: black;
}
</style>
