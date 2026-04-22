<script setup lang="ts">
defineProps<{
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}>();
</script>

<template>
    <span :class="['badge', `badge-${variant ?? 'default'}`]">
        <slot />
    </span>
</template>
