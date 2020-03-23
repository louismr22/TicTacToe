import bouton from './components/bouton'
import jeux from './components/jeux'
import victoire from './components/victoire'
import draw from './components/draw'

Vue.component('bouton', bouton)

/**
 * Chaque route est défini par un object literal
 *  - La clé path représente l'url
 *  - La clé component doit être un object literal de component 
 *         Ce qui irait habituellement dans Vue.component('nom', _____)
 */
export default new VueRouter({
    routes: [
        { path: '/', component: bouton },
        { path: '/jeux', component: jeux },
        { path: '/victoire/:tourActuel', component: victoire },
        { path: '/draw', component: draw }
    ]
})