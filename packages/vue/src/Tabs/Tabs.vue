<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { TABS_KEY, type TabsContext } from './tabs-context.js';

const props = defineProps<{
    defaultTab?: string;
}>();

const modelActive = defineModel<string>('activeTab');
const internalActive = ref(props.defaultTab ?? '');
const activeTab = computed(() => modelActive.value ?? internalActive.value);

function setActiveTab(id: string) {
    internalActive.value = id;
    if (modelActive.value !== undefined) {
        modelActive.value = id;
    }
}

provide<TabsContext>(TABS_KEY, { activeTab, setActiveTab });
</script>

<template>
    <div class="tabs">
        <slot />
    </div>
</template>
