<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const open = defineModel<boolean>({ default: false });
const dialogRef = ref<HTMLDialogElement>();

watch(open, (val) => {
    if (!dialogRef.value) return;
    if (val) {
        dialogRef.value.showModal();
    } else {
        dialogRef.value.close();
    }
});

onMounted(() => {
    if (open.value) dialogRef.value?.showModal();
});

function handleClose() {
    open.value = false;
}
</script>

<template>
    <dialog ref="dialogRef" class="modal" @close="handleClose">
        <slot />
    </dialog>
</template>
