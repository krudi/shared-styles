<script setup lang="ts">
defineProps<{
    title: string;
    open?: boolean;
}>();
</script>

<template>
    <details class="accordion-details" :open="open">
        <summary class="accordion-summary">
            <span class="accordion-summary-title">{{ title }}</span>
            <span class="accordion-summary-icon" aria-hidden="true" />
        </summary>
        <div class="accordion-content">
            <slot />
        </div>
    </details>
</template>
