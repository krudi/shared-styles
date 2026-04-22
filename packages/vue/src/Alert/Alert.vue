<script setup lang="ts">
defineProps<{
    variant?: 'default' | 'destructive';
}>();
</script>

<template>
    <div role="alert" :class="['alert', variant === 'destructive' && 'alert-destructive']">
        <slot />
    </div>
</template>
