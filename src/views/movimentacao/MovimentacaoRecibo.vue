<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <H1>Recibo</H1>
            </div>
            <div class="col-8 d-flex align-items-center
            justify-content-center">
                <RouterLink to="/" type="button" class="btn btn-success">
                    Voltar a home
                </RouterLink>
            </div>
        </div>
    </div>


    <div class="col-12">
        <div class="">

            <div v-if="mensagem.ativo" class="row">
                <div class="col-md-12 text-start">
                    <div :class="mensagem.css" role="alert">
                        <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-4">
                        <article>
                            <h3>Condutor</h3>
                            <p>{{ recibo.condutor }} a</p>
                            <h3>Veiculo</h3>
                            <p>{{ recibo.veiculo }} a</p>
                            <h3>Entrada</h3>
                            <p>{{ recibo.entrada }} a</p>
                            <h3>Saida</h3>
                            <p>{{ recibo.saida }} a</p>
                        </article>
                    </div>
                    <div class="col-4">
                        <article>
                            <h3>Horas</h3>
                            <p>{{ recibo.horas}} a</p>
                            <h3>Horas Desconto</h3>
                            <p>{{ recibo.veiculo }} a</p>
                            <h3>Entrada</h3>
                            <p>{{ recibo.entrada }} a</p>
                            <h3>Desconto</h3>
                            <p>{{ recibo.desconto }} a</p>
                        </article>
                    </div>
                    <div class="col-2"></div>
                </div>

                <!-- <div class="row">
                    <div class="col">
                        <h1>Condutor</h1>
                        <P>{{ recibo.condutor }}</P>
                        <p>condutor</p>
                        <hr />

                        <h1>Entrada</h1>
                        <p>{{ recibo.entrada }}</p>

                        <hr />

                        <h1>Saida</h1>
                        <p>{{ recibo.saida }}</p>

                        <hr />

                        <h1>Veiculo</h1>
                        <p>{{ recibo.veiculo }}</p>

                        <hr />
                    </div>
                    <div class="col">
                        <h1>Horas</h1>
                        <p>{{ recibo.horas }}</p>

                        <hr />

                        <h1>Horas Desconto</h1>
                        <p>{{ recibo.horasDesconto }}</p>

                        <hr />

                        <h1>Valor</h1>
                        <p>{{ recibo.valor }}</p>

                        <hr />

                        <h1>Desconto</h1>
                        <p>{{ recibo.desconto }}</p>

                        <hr />
                    </div>
                </div> -->

            </div>
        </div>

    </div>
</template>
<style scoped lang="scss"></style>




<script lang="ts">
import MovimentacaoClient from '@/client/MovimentacaoClient';
import { Condutor } from '@/model/Condutor';
import { Movimentacao } from '@/model/Movimentacao';
import { Recibo } from '@/model/Recibo';
import { defineComponent } from 'vue';

//  import  pdfMake from "pdfmake/build/pdfmake";
//  import  pdfFonts from 'pdfmake/build/vfs_fonts';


export default defineComponent({
    name: 'MovimentacaoRecibo',
    data() {
        return {
            movimentacao: new Movimentacao(),
            recibo: new Recibo(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            },


        }

    },
    computed: {
        id() {
            return this.$route.query.id
        }
    },
    mounted() {

        if (this.id !== undefined) {
            this.findById(Number(this.id))
            this.onClickfecharMov(Number(this.id));
        }
    },
    methods: {
        findById(id: number) {
            MovimentacaoClient.findById(id).then(success => {
                this.movimentacao = success
            }).catch(error => {
                console.log(error)
            })
        },
        onClickfecharMov(id: number) {
            MovimentacaoClient.fecharMovimentacao(id).then(success => {
                console.log(success)
                this.recibo = success

                this.mensagem.ativo = true;
                this.mensagem.mensagem = "Movimentacao finalizada com sucesso";
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                console.log(error)

                const bruh = error.data
                this.mensagem.ativo = true;
                this.mensagem.mensagem = bruh;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },
        // teste(){
        //     pdfMake.vfs = pdfFonts.pdfMake.vfs;

        //     pdfMake.createPdf(this.dale).open();
        // }
    }

});

</script>
