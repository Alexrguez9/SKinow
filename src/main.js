import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from "vue-router";


import PortadaComponent from './components/PortadaComponent.vue';
import Pagina2Component from './components/Pagina2Component.vue';
import DestinationsComponent from './components/DestinationsComponent.vue';
import AboutComponent from './components/AboutComponent'
import HomeComponent from './components/HomeComponent'
import FestivalComponent from './components/FestivalComponent'
import SnowboardComponent from './components/SnowboardComponent'
<<<<<<< Updated upstream
=======
import SkisComponent from './components/SkisComponent'
import LodgingComponent from './components/LodgingComponent'
import HelmetsComponent from './components/HelmetsComponent'

>>>>>>> Stashed changes

/* FALLA: BUG
import ErrorComponent from './components/ErrorComponent.vue';
*/

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/home', name: "home", component: HomeComponent },
    { path: '/portada', name: "portada", component: PortadaComponent },
    { path: '/pagina2', component: Pagina2Component },
    { path: '/about', component: AboutComponent },
    { path: '/destinations', name: 'destinations', component: DestinationsComponent },
    { path: '/festival', component: FestivalComponent },
    { path: '/snowboards', component: SnowboardComponent},
<<<<<<< Updated upstream
=======
    { path: '/skis', component: SkisComponent},
    { path: '/lodging', component: LodgingComponent},
    { path: '/helmets', component: HelmetsComponent},
>>>>>>> Stashed changes
    /* FALLA: BUG
    { path: '*', component: ErrorComponent },
    */
]

// crear objeto de rutas de vue router -- objeto de VR
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// instancia de vue
const app = createApp(App)

app.use(router)

app.mount('#app')