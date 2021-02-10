<template>
    <div ref='editor'></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue';
import WangEditor from '/@modules/wangeditor';
export default {
    name: 'app',
    setup(props, {emit}) {
        const editor = ref();
        const content = reactive({
            html: '',
            text: '',
        });
        let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            Object.assign(instance.config, {
                height: 600,
                onchange() {
                    const contentHTML = instance.txt.html();
                    emit('my-change', contentHTML);
                },
            });
            instance.create();
        });
        onBeforeUnmount(() => {
            instance.destroy();
            instance = null;
        });
        const syncHTML = () => {
            content.html = instance.txt.html();
        };
        return {
            syncHTML,
            editor,
            content,
        };
    },
};
</script>