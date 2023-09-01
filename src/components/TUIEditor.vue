<!-- source: https://github.com/nhn/tui.editor/issues/2596#issuecomment-1179532418 -->
<template>
    <div>
      <div ref="editor" />
    </div>
</template>

<script setup>
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { ref, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);
const editor = ref();
onMounted(() => {
  const e = new Editor({
    el: editor.value,
    height: 'auto',
    initialEditType: 'wysiwyg',
    events: {
      change: () => emit('update:modelValue', e.getHTML()),
    },
  });
});
</script>


