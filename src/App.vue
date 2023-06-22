<template>
  <nav class="nav-v">
    <div class="container text-center c">
      <div class="row">
        <div class="col d-flex align-items-center">
            <img class="w-50" src="./assets/imagem_2023-06-20_012623562-removebg-preview.png" alt="">
        </div>
        <div class="col-10">
          <nav class="nav-v">
            <div class="d-flex h-100 d-inline-block">
              <div class="div-nav h-100 d-inline-block d-flex align-items-end">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link text-white">
                      HOME
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-marca" class="nav-link text-white">
                      Marcas
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-modelo" class="nav-link text-white">
                      Modelos
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-veiculo" class="nav-link text-white">
                      Veiculo
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-condutor" class="nav-link text-white">
                      Condutor
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-movimentacao" class="nav-link text-white">
                      Movimentacao
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/listar-configuracao" class="nav-link text-white">
                      Configuracao
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col">
          
        </div>
      </div>
    </div>
  </nav>

  <div class="dv">

  </div>
  <router-view />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  color: rgb(12, 12, 12);
  background-color: rgb(229, 229, 229);
}

.nav-v {
  padding: 0px;
  background-color: #242222;
  height: 7vh;
  color: white;
}


::selection {
  background-color: pink;
  color: blue;
}

.cv{
  color: white;
}

</style>
