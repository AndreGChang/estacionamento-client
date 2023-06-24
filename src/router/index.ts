import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listar-marca',
    name: 'marca-lista-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaListaView.vue')
  },
  {
    path: '/cadastrar-marca',
    name: 'cadastrar-marca-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/CadastrarMarcaForm.vue'),
    children: [
      {
        path: '/cadastrar-marca',
        name: 'cadastrar-marca-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/CadastrarMarcaForm.vue')
      },
      {
        path: '/cadastrar-marca',
        name: 'cadastrar-marca-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/CadastrarMarcaForm.vue')
      }
    ]
  },
  {
    path: '/listar-modelo',
    name: 'modelo-lista-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloListaView.vue')
  },
  {
    path: '/cadastrar-modelo',
    name: 'cadastrar-modelo-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/CadastrarModeloView.vue'),
    children: [
      {
        path: '/cadastrar-modelo',
        name: 'cadastrar-modelo-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/CadastrarModeloView.vue')
      },
      {
        path: '/cadastrar-modelo',
        name: 'cadastrar-modelo-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/CadastrarModeloView.vue')
      }

    ]
  },
  {
    path: '/listar-veiculo',
    name: 'veiculo-lista-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoListaView.vue')
  },
  {
    path: '/cadastrar-veiculo',
    name: 'cadastrar-veiculo-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoCadastrarView.vue'),
    children: [
      {
        path: '/cadastrar-veiculo',
        name: 'cadastrar-veiculo-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoCadastrarView.vue')
      },
      {
        path: '/cadastrar-veiculo',
        name: 'cadastrar-veiculo-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/VeiculoCadastrarView.vue')
      }

    ]
  },
  {
    path: '/listar-condutor',
    name: 'condutor-lista-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorListaView.vue')
  },
  {
    path: '/cadastrar-condutor',
    name: 'cadastrar-condutor-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CadastrarCondutorView.vue'),
    children:[
      {
        path: '/cadastrar-condutor',
        name: 'cadastrar-condutor-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CadastrarCondutorView.vue')
      },
      {
        path: '/cadastrar-condutor',
        name: 'cadastrar-condutor-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CadastrarCondutorView.vue')
      }
    ]
  },
  {
    path: '/listar-movimentacao',
    name: 'movimentacao-listar-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacaoListarView.vue')
  },
  {
    path: '/cadastrar-movimentacao',
    name: 'cadastrar-movimentacao-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/CadastrarMovimentacaoView.vue'),
    children:[
      {
        path: '/cadastrar-movimentacao',
        name: 'cadastrar-movimentacao-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/CadastrarMovimentacaoView.vue')
      },
      {
        path: '/cadastrar-movimentacao',
        name: 'cadastrar-movimentacao-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/CadastrarMovimentacaoView.vue')
      }
    ]
  },
  {
    path: '/teste-tabela',
    name: 'teste-tabela-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TabelaView.vue')
  },
  {
    path: '/configuracao',
    name: 'configuracao-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoListarView.vue')
  },
  {
    path: '/cadastrar-configuracao',
    name: 'cadastrar-configuracao-view',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/CadastrarConfiguracaoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
