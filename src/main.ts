import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { AddressList } from 'vant'
import { AddressEdit } from 'vant';
import { ConfigProvider } from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.use(CellGroup)
app.use(Cell)
app.use(AddressList)
app.use(AddressEdit)
app.use(ConfigProvider)

app.mount('#app')
