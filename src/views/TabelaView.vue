<template>


    <Tabela :columns="colunasDaTabela" :itens="dadosDaTabela"></Tabela>
</template>


<style scoped lang="scss">

</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Tabela from '@/components/Tabela.vue';


export default defineComponent({
    name:'TableView',
    components:{
        Tabela
    },
    data(){
        return{
            colunasDaTabela:[
                {label: 'Id', field: 'id'},
                {label: "Estado", field: 'estado'},
                {label: "Nome", field: 'nome'}
            ],
            dadosDaTabela: [
                { id: 1, estado: 'Ativo', nome: 'Toyotta' },
                { id: 2, estado: 'Ativo', nome: 'Honda' },
                { id: 3, estado: 'Ativo', nome: 'chonguers' }
            ]
        }
    }


});

</script>