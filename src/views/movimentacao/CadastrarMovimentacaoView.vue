<template>
    <div class="container" style="background: ;">

        <div class="row">
            <div class="col-md-10 text-start">
                <p class="fs-3"> Cadastrar Movimentacao</p>
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
                <label class="form-label">Veiculo*</label>
                <select v-model="movimentacao.veiculo" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example">
                    <option v-for="item in veiculoLista" :value="item" >{{ item.placa }}</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Condutor*</label>
                <select v-model="movimentacao.condutor" :disabled="this.form === 'excluir' ? '' : disabled" class="form-select" aria-label="Default select example">
                    <option v-for="item in condutorLista" :value="item" >{{ item.nome }}</option>
                </select>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/listar-movimentacao">Voltar
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

import MovimentacaoClient from '@/client/MovimentacaoClient';
import CondutorClient from '@/client/CondutorClient';
import VeiculoClient from '@/client/VeiculoClient';

import { Movimentacao } from '@/model/Movimentacao';
import { Condutor } from '@/model/Condutor';
import { Veiculo } from '@/model/Veiculo';


export default defineComponent({
    name: 'CadastrarMovimentacaoForm',
    data() {
        return {
            condutorLista: new Array<Condutor>(),
            veiculoLista: new Array<Veiculo>(),
            movimentacao: new Movimentacao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        };
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
        this.findAllVeiculos();
        this.findAllCondutores();

        if (this.id !== undefined) {
            this.findById(Number(this.id))
        }
    },
    methods: {
        findById(id: number) {
            MovimentacaoClient.findById(id).then(success => {
                this.movimentacao = success
            }).catch(error => {
                console.log(error);
            })
        },
        findAllVeiculos() {
            VeiculoClient.listAll().then(success => {
                this.veiculoLista = success
            }).catch(error => {
                console.log(error)
            })
        },
        findAllCondutores() {
            CondutorClient.listAll().then(success => {
                this.condutorLista = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickCadastrar() {
            MovimentacaoClient.cadastrar(this.movimentacao).then(success => {
                this.movimentacao = new Movimentacao()

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
            MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao).then(success => {
                this.movimentacao = new Movimentacao()

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
        onClickExcluir() {
            MovimentacaoClient.deletar(this.movimentacao.id).then(success => {
                this.movimentacao = new Movimentacao()

                this.$router.push({ name: 'movimentacao-listar-view' })
            }).catch(error => {
                const bruh = error.data

                this.mensagem.ativo = true;
                this.mensagem.mensagem = bruh;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        }
    }
});
</script>

<style scoped lang="scss"></style>