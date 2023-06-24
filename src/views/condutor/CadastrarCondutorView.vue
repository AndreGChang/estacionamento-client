<template>
    <div class="container" style="background: ;">

        <div class="row">
            <div class="col-md-10 text-start">
                <p class="fs-3"> Cadastrar Condutor</p>
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
                <label class="form-label">Nome*</label>
                <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="condutor.nome">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">CPF*</label>
                <input placeholder="000.000.000-00" type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="condutor.cpf">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-start">
                <label class="form-label">Telefone*</label>
                <input placeholder="+55(045)12345-1234" type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                    v-model="condutor.telefone">
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/listar-condutor">Voltar
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
import CondutorClient from '@/client/CondutorClient';
import { Condutor } from '@/model/Condutor';

export default defineComponent({
    name: 'CadastrarCondutorForm',
    data() {
        return {
            condutor: new Condutor(),
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
        if (this.id !== undefined) {
            this.findById(Number(this.id))
        }
    },
    methods: {
        findById(id: number) {
            CondutorClient.findById(id).then(success => {
                this.condutor = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickCadastrar(){
            CondutorClient.cadastrar(this.condutor).then(success => {
                this.condutor = new Condutor();

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
            CondutorClient.editar(this.condutor.id, this.condutor).then(success => {
                this.condutor = new Condutor();

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
            });
        },
        onClickExcluir() {
            CondutorClient.deletar(this.condutor.id).then(success => {
                this.condutor = new Condutor()

                this.$router.push({ name: 'condutor-lista-view' });
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