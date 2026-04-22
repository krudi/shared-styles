<script setup lang="ts">
defineProps<{
    href?: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon' | 'link' | 'close';
    size?: 'default' | 'sm';
}>();
</script>

<template>
    <a :href="href" :class="['btn', `btn-${variant ?? 'link'}`, size === 'sm' && 'btn-sm']">
        <slot />
    </a>
</template>
