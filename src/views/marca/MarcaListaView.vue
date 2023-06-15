<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h1>Listar Marca</h1>
            </div>
            <div class="col">
                <RouterLink to="/cadastrar"><button type="button" class="btn btn-success">Cadastrar</button></RouterLink>
            </div>
        </div>
     


     <div class="col-12">
        <div class="card">
            <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                </tr>
            </tbody>
        </table>
        </div>

</div>


</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MarcaClient } from '@/client/marca.client';

export default defineComponent({
    name: 'MarcaListaView'


});


</script>

<strong scoped lans="scss">


</strong>
