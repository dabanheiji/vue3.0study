import { createApp } from 'vue'
import App from './App.vue';
import { 
    ElButton, 
    ElInput, 
    ElCard, 
    ElForm, 
    ElFormItem,
    ElLink,
    ElDivider,
    ElPageHeader 
} from 'element-plus';
import router from './router/index'
import './index.css'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.component(ElButton.name, ElButton);
app.component(ElInput.name, ElInput);
app.component(ElCard.name, ElCard);
app.component(ElFormItem.name, ElFormItem);
app.component(ElForm.name, ElForm);
app.component(ElLink.name, ElLink);
app.component(ElDivider.name, ElDivider);
app.component(ElPageHeader.name, ElPageHeader);

app.use(router)

app.mount('#app')
