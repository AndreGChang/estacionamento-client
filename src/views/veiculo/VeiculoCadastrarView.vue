<template>
    <div class="container" style="background: ;">

        <div class="row">
            <div class="col-md-10 text-start">
                <p class="fs-3"> Cadastrar de Veiculo</p>
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
                <label class="form-label">Placa*</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="veiculo.placa">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Ano*</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="veiculo.ano">
            </div>
        </div>

        <div class="row" style="margin-top: 10px;">
            <div class="col-md-12 text-start">
                <label class="form-label" for="cor-enum">Cor*</label>
                <select v-model="veiculo.cor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="cor-enum">
                    <option v-for="cor in corsEnum" :value="cor">{{ cor }}</option>
                </select>
            </div>
        </div>
        <div class="row" style="margin-top: 10px;">
            <div class="col-md-12 text-start">
                <label class="form-label" for="tipo-veiculo">Tipo*</label>
                <select v-model="veiculo.tipo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="tipo-veiculo">
                    <option v-for="tipo in tipoEnum" :value="tipo">{{ tipo }}</option>
                </select>
            </div>
        </div>
        <div class="row" style="margin-top: 10px;">
            <div class="col-md-12 text-start">
                <label for="modelo-veiculo">Modelo*</label>
                <select v-model="veiculo.modelo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example" id="modelo-veiculo">
                    <option v-for="item in modelo" :value="item">{{ item.nome }}</option>
                </select>
            </div>
        </div>
        <hr />

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/listar-veiculo">Voltar
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
import { defineComponent } from 'vue';
import { Veiculo } from '@/model/Veiculo';
import VeiculoClient from '@/client/VeiculoClient';
import { Cor } from '@/model/Cor';
import { Tipo } from '@/model/Tipo';
import ModeloClient from '@/client/ModeloClient';
import MarcaClient from '@/client/MarcaClient';
import { Marca } from '@/model/Marca';
import { Modelo } from '@/model/Modelo';

export default defineComponent({
    name: 'CadastrarVeiculoView',
    data() {
        return {
            veiculo: new Veiculo(),
            marca: new Array<Marca>(),
            modelo: new Array<Modelo>(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },
            corsEnum: Cor,
            tipoEnum: Tipo
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
        this.findAllModelo();

        if (this.id !== undefined) {
            this.findById(Number(this.id));
        }

    },
    methods: {
        findById(id: number) {
            VeiculoClient.findById(id).then(success => {
                this.veiculo = success
                console.log(this.veiculo.modelo.marca)
            }).catch(error => {
                console.log(error);
            });
        },
        findAllMarca() {
            MarcaClient.listAll().then(success => {
                this.marca = success
            }).catch(error => {
                console.log(error)
            })
        },
        findAllModelo() {
            ModeloClient.listAll().then(success => {
                this.modelo = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickCadastrar() {
            VeiculoClient.cadastrar(this.veiculo).then(success => {
                this.veiculo = new Veiculo();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                const bruh = error.data
                this.mensagem.ativo = true;
                this.mensagem.mensagem = bruh;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        onClickEditar() {
            VeiculoClient.editar(this.veiculo.id, this.veiculo).then(success => {
                this.veiculo = new Veiculo();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },
        onClickExcluir() {
            VeiculoClient.deletar(this.veiculo.id).then(success => {
                this.veiculo = new Veiculo()

                this.$router.push({ name: 'veiculo-lista-view' });
            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        }
    }
});
</script>

<style scoped lang="scss"></style>