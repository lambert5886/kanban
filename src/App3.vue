<template>
  <div id="app" class="layout">
    <editor class="editor" 
    :value="content"  
    :setting="editorSetting"
    id='tinymce'
     @input="(content)=> content = content"></editor>
       
  </div>
</template>
<script>
    import editor from '@/components/editor/editor.vue'
    export default {
        name: "editor-demo",
        data: function () {
            return {
                content:'我是富文本编辑器的内容',
                //tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
                editorSetting:{
                    height:400,
                }
            }
        },
        components:{
            'editor':editor
        }
    }
</script>
