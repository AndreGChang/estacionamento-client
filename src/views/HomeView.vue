<template>
  <div class="home d">
    <div>
      <h1>Estacionamento do Flamengo</h1>
      <RouterLink to="/listar-movimentacao" class="btn">
        <button type="button" class="btn btn-primary">Movimentacoes</button>
      </RouterLink>
    </div>

    <img alt="Vue logo" class="w-25" src="../assets/shadow.png">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  methods: {

  }
});
</script>

<style scoped lang="scss">
.d{
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
}
</style>
