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
    <div role="tabpanel" :class="['tabs-panel', isActive && 'is-active']">
        <slot />
    </div>
</template>
