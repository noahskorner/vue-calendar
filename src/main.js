import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC6lxv2ODx5SH-ifA_EexZcNGytw9nJWT0",
  authDomain: "vue-calendar-77342.firebaseapp.com",
  databaseURL: "https://vue-calendar-77342.firebaseio.com",
  projectId: "vue-calendar-77342",
  storageBucket: "vue-calendar-77342.appspot.com",
  messagingSenderId: "308589737306",
  appId: "1:308589737306:web:3f4afeb1db8a8314972f63"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
