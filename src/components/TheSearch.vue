<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
import { ref } from 'vue'
import SearchIcon from '@/assets/images/icon-search.svg?component'

type propsTypes = {
  hasError: boolean
}

defineProps<propsTypes>()
const emits = defineEmits<{
  (e: 'submit', search: string): void
}>()

const search = ref('')

const handleSubmit = () => {
  emits('submit', search.value)
  search.value = ''
}
</script>

<template>
  <form @submit.prevent.trim="handleSubmit" autoComplete='off'>
    <div class="search">
      <label htmlFor='search' class="search__label">
        <SearchIcon />
      </label>
      <input
        v-model="search"
        type='text'
        class="search__textField"
        id='search'
        name='username'
        placeholder='Search Github username...' />
        <div v-if="hasError" class="search__error">
          No result
        </div>
      <Button class="search__button">Search</Button>
    </div>
  </form>
</template>

<style>
.search {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 10px 10px 10px 16px;
  background-color: var(--search-bg, white);
  display: flex;
  align-items: center;
  box-shadow: var(--search-shadow);
  border-radius: 15px;
}

.search__button {
  flex-shrink: 0;
}

.search__label {
  cursor: pointer;
}

.search__textField {
  padding: 0 10px;
  flex-grow: 5;
  height: 60px;
  max-width: calc(100% - 100px - 20px);
  border: none;
  color: var(--search-color);
  font-size: 0.75rem;
  line-height: 1.5;
  cursor: pointer;
  background-color: var(--search-bg);
}

.search__textField::placeholder {
  color: var(--search-placeholder-color);
}

.search__textField:focus {
  outline: none;
}

.search__error {
  position: absolute;
  right: 50%;
  bottom: 5px;
  color: var(--error-color);
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
}

@media (min-width: 767px) {
  .search {
    padding: 10px 10px 10px 30px;
  }

  .search__textField {
    margin: 0 5px;
    font-size: 1.25rem;
    margin: 0 20px;
  }

  .search__error {
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    bottom: unset;
  }
}
</style>