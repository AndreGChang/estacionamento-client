<template>
    <div class="container col-4">
        <h1>CADASTRAR MOVIMENTACAO</h1>
        <div class="col-12">
            <form action="">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Veiculo</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Veiculo">
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Condutor</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Condutor">
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Salvar</button>
                    <RouterLink to="/listar-movimentacao">
                        <button type="button" class="btn btn-secondary">voltar</button>
                    </RouterLink>
                </div>
            </form>

        </div>
        
    </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CadastrarMovimentacaoForm',
    components: {

    },
    data() {
        return {

        };
    },
    methods: {

    }
});
</script>

<style scoped lang="scss">


</style>