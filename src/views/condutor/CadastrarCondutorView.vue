<template>
    <div class="container col-4">
        <h1>CADASTRAR CONDUTOR</h1>
        <div class="col-12">
            <form action="">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome">
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">CPF</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="CPF">
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Telefone</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telefone">
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Salvar</button>
                    <RouterLink to="/listar-condutor">
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
    name: 'CadastrarCondutorForm',
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