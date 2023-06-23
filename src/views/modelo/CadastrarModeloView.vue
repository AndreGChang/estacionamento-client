<template>
    <div class="container" style="background: ;">

        <div class="row">
            <div class="col-md-10 text-start">
                <p class="fs-3"> Cadastrar de Modelo</p>
            </div>
            <div class="col-md-2"> </div>
        </div>

        <hr />

        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Nomo do modelo *</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="modelo.nome">
            </div>
        </div>
        <div class="row" style="margin-top: 10px;">
            <div class="col-md-12 text-start">
                <select v-model="modelo.marca" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example">
                    <option v-for="item in marca" :value="item" >{{ item.nome }}</option>
                </select>
            </div>

        </div>

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/listar-modelo">Voltar
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="d-grid gap-2">
                    <button v-if="this.form === undefined" type="button" class="btn btn-success"
                        @click="onClickCadastrar()">
                        Cadastrar
                    </button>
                    <button v-if="this.form === 'editar'" type="button" class="btn btn-warning" @click="onClickEditar()">
                        Editar
                    </button>
                    <button v-if="this.form === 'excluir'" type="button" class="btn btn-danger" @click="onClickExcluir()">
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>




<script lang="ts">
import { Modelo } from '@/model/Modelo';
import { defineComponent } from 'vue';
import ModeloClient from '@/client/ModeloClient';
import MarcaClient from '@/client/MarcaClient';
import { Marca } from '@/model/Marca';

export default defineComponent({
    name: 'CadastrarModeloView',
    components: {

    },
    data() {
        return {
            modelo: new Modelo(),
            marca: new  Array<Marca>(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    computed: {
        id() {
            return this.$route.query.id
        },
        form() {
            return this.$route.query.form
        }
    },
    mounted() {
        
        this.findAllMarca();
        
        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }
    },
    methods: {
        findById(id: number) {
            ModeloClient.findById(id).then(success => {
                this.modelo = success;

            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        findAllMarca() {
            MarcaClient.listAll().then(success => {
                this.marca = success;
               
            }).catch(error =>{
                console.log(error)
            })
        },
        onClickCadastrar() {
            ModeloClient.cadastrar(this.modelo).then(success => {
                this.modelo = new Modelo()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                    console.log(error)
                });
        },
        onClickEditar() {
            ModeloClient.editar(this.modelo.id, this.modelo).then(success => {
                this.modelo = new Modelo()

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
        },
        onClickExcluir() {
            ModeloClient.deletar(this.modelo.id).then(success => {
                this.modelo = new Modelo()

                this.$router.push({ name: 'modelo-lista-view' });
            })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                })
        },


    }
});
</script>

<style scoped lang="scss"></style>