<script setup lang="ts">
import { computed, inject } from 'vue';
import { TABS_KEY, type TabsContext } from './tabs-context.js';

const props = defineProps<{
    tabId: string;
}>();

const tabs = inject<TabsContext>(TABS_KEY)!;
const isActive = computed(() => tabs.activeTab.value === props.tabId);
</script>

<template>
    <button
        type="button"
        role="tab"
        :aria-selected="isActive"
        :class="['tabs-trigger', isActive && 'is-active']"
        @click="tabs.setActiveTab(tabId)"
    >
        <slot />
    </button>
</template>
