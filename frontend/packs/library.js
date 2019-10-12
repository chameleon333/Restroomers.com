import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import { ValidationProvider } from 'vee-validate';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';


Vue.use(VueOnsen);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('star-rating', VueStarRating.default);


// rules for Veevalidate
extend(
  'required', {
  ...required,
  message: 'This field is required'
});
