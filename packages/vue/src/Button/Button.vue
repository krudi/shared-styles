<script setup lang="ts">
defineProps<{
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon' | 'link' | 'close';
    size?: 'default' | 'sm';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}>();
</script>

<template>
    <button
        :type="type ?? 'button'"
        :class="['btn', `btn-${variant ?? 'default'}`, size === 'sm' && 'btn-sm']"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>
