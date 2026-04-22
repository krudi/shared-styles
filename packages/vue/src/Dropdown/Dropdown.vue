<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const open = ref(false);
const dropdownRef = ref<HTMLDivElement>();

function onClickOutside(e: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        open.value = false;
    }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside));
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside));
</script>

<template>
    <div ref="dropdownRef" :class="['dropdown', open && 'is-open']">
        <button
            type="button"
            class="dropdown-trigger"
            :aria-expanded="open"
            aria-haspopup="listbox"
            @click="open = !open"
        >
            <slot name="trigger" />
            <span class="dropdown-summary-icon" aria-hidden="true" />
        </button>
        <ul
            v-if="open"
            class="dropdown-list"
            role="listbox"
            style="display: flex; flex-direction: column; opacity: 1"
        >
            <slot />
        </ul>
    </div>
</template>
