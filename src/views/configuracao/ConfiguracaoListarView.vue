<!-- <template>
    <div class="container text-center">
        <div class="row d-flex align-items-center d">
            <div class="col">
                <h1>Lista Configuracao</h1>
            </div>
            <div class="col">
                <RouterLink to="/cadastrar-configuracao">
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
                            <th scope="col">Valor hora</th>
                            <th scoped="col">Valor multa</th>
                            <th scoped="col">inicio expediente</th>
                            <th scope="col">fim expediente</th>
                            <th scope="col">tempo para desconto</th>
                            <th scoped="col">tempo de desconto</th>
                            <th scoped="col">gerar desconto</th>
                            <th scoped="col">vagas carro</th>
                            <th scoped="col">vagas moto</th>
                            <th scoped="col">vagas vans</th>
                            <th scoped="col">opc</th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    </div>
</template> -->
  



<template>
    <div class="container" style="background: ;">

        <div class="row">
            <div class="col-md-10 text-start">
                <p class="fs-3">Configuracao</p>
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
            <div class="col">
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Valor Hora*</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.valorHora">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Valor Multa *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.valorMulta">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Inicio Expediente *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.inicioExpediente">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Fim Expediente *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.fimExpediente">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Tempo para Desconto *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.tempoParaDesconto">
                    </div>
                </div>

            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Tempo de Desconto *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.tempoDeDesconto">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Gerar desconto*</label>
                        <select v-model="configuracao.gerarDesconto" :disabled="this.form === 'excluir' ? '' : disabled"
                            class="form-select" aria-label="Default select example">
                            <option v-for="item in options" :value="item.value">{{ item.text }}</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas de Carro *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasCarro">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Moto *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasMoto">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-start">
                        <label class="form-label">Vagas Vans *</label>
                        <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control"
                            v-model="configuracao.vagasVans">
                    </div>
                </div>

            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-md-3 offset-md-6">
                <div class="d-grid gap-2">
                    <router-link type="button" class="btn btn-info" to="/listar-movimentacao">Ir a Movimentacoes
                    </router-link>
                </div>
            </div>
            <div class="col-md-3 ">
                <div class="d-grid gap-2">
                    <button v-if="this.form === undefined" type="button" class="btn btn-warning" @click="onClickEditar()">
                        Editar
                    </button>
                </div>
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
import ConfiguracaoClient from '@/client/ConfiguracaoClient';
import { Configuracao } from '@/model/Configuracao';

export default defineComponent({
    name: 'ConfiguracaoListarView',
    data() {
        return {
            configuracao: new Configuracao(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },

            options: [
                { text: 'true', value: true },
                { text: 'false', value: false }
            ]
        };


    },
    mounted() {
        this.findById(1);
    },
    methods: {
        findById(id: number) {
            ConfiguracaoClient.findById(id).then(success => {
                this.configuracao = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickEditar() {
            ConfiguracaoClient.editar(1, this.configuracao).then(success => {
                this.configuracao = new Configuracao()

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
        }
    }
});

</script>
