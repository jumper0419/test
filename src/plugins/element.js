import Vue from 'vue'
import {Container, Header, Aside, Main, Footer, Icon, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Icon)
Vue.use(Button)

