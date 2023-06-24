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
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col d-flex align-items-center justify-content-center ">
          <router-link to="/configuracao" class="link-light link-opacity-50-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gear-fill"
              viewBox="0 0 16 16">
              <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </router-link>
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

.cv {
  color: white;
}
</style>
