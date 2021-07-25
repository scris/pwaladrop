import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
 
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  routes
})

export default router
