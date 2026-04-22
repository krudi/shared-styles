<script setup lang="ts">
defineProps<{
    href?: string;
    current?: boolean;
}>();

const emit = defineEmits<{
    select: [];
}>();
</script>

<template>
    <li class="dropdown-list-item">
        <a
            v-if="href"
            :href="href"
            class="dropdown-list-item-link"
            :aria-current="current ? 'page' : undefined"
        >
            <slot />
        </a>
        <button
            v-else
            type="button"
            class="dropdown-list-item-link"
            @click="emit('select')"
        >
            <slot />
        </button>
    </li>
</template>
