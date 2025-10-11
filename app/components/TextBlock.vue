<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  label: string
  title: string
  quote: string
  text: string
  buttonText: string
}>()
</script>

<template>
  <div class="block-header">
    <div class="block-header__label">{{ label }}</div>
    <h1 class="block-header__title">{{ title }}</h1>
    <div class="block-header__text">
      <blockquote>{{ quote }}</blockquote>
      <p>
        {{ text }}
      </p>
    </div>
    <a href="#" class="block-header__button button">
      <span>{{ buttonText }}</span>
    </a>
  </div>
</template>
