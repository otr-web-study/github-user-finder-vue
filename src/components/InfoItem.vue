<script setup lang="ts">
import { computed } from 'vue';

type PropTypes = {
  text?: string | null
  isLink?: boolean
}

const { text, isLink } = defineProps<PropTypes>()
const currentText = computed(() => (text || 'Not Available'));
const currentHref = computed(() => {
  if(!isLink) {
    return ''
  }
  return text && text.startsWith('http') ? text : `https://${text}`
});
</script>

<template>
  <div
    class="infoItem"
    :class="{
      'infoItem_empty': !text,
    }">
    <slot />
    <div>
      <a
        v-if="isLink && text"
        class="infoItem__link"
        :href="currentHref"
        target="_blank"
        rel="noreferrer">
        {{ currentText }}
      </a>
      <template v-else>
        {{ currentText }}
      </template>
    </div>
  </div>
</template>

<style>
.infoItem {
  color: var(--info-color);
  font-size: 0.75rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.infoItem_empty {
  opacity: 0.75;
}

.infoItem>svg {
  fill: var(--info-color);
  margin-right: 1rem;
  width: 20px;
}

.infoItem__link {
  text-decoration: none;
  color: var(--info-color);
}

.InfoItem__link:hover {
  text-decoration: underline;
}
</style>