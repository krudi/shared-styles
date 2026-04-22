<script setup lang="ts">
defineProps<{
    variant?: 'white' | 'primary' | 'secondary';
}>();
</script>

<template>
    <div :class="['card', variant && `card-${variant}`]">
        <slot />
    </div>
</template>
