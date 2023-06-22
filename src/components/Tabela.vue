<template>
    <table class="table table-dark table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col" v-for="column in columns" :key="column.field"
                    :class="{ 'w-10 text-center': column.field === 'id' }">{{ column.label }}</th>
                <th class="w-10"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in itens" :key="item.id">
                <td v-for="column in columns" :class="{ 'text-center': column.field === 'id' }" :key="column.field"> {{item[column.field] }}</td>
                <td class="text-center">
                    <RouterLink class="btn" to="/editar/id" v-if="$route.path !== '/'">
                        <i class="bi bi-pencil-square text-warning"></i>
                    </RouterLink>
                    <RouterLink class="btn" to="/deletar/id" v-if="$route.path !== '/'">
                        <i class="bi bi-trash-fill text-danger"></i>        
                    </RouterLink>
                    <RouterLink class="btn" to="/sair/id" v-if="$route.path !== '/'">
                        <i class="bi bi-box-arrow-in-right text-warning fw-semibold"></i>       
                    </RouterLink>
                </td>
            </tr>

        </tbody>
    </table>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface tColuna {
    label: string;
    field: string;
}

interface tItems {
    id: number;
    [key: string]: any; //deixa que tenha items na tabela de outros tipo ex: (placa: string) (ano: number)
}

export default defineComponent({
    props: {
        itens: {
            type: Array as PropType<tItems[]>,
            required: true
        },
        columns: {
            type: Array as PropType<tColuna[]>,
            required: true
        }
    }

});


</script>