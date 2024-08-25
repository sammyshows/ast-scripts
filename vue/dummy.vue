<template>
  <div class="app-container">
    <button @click="toggle">Toggle Message</button>
    <p v-if="isVisible">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const isVisible = ref(false);
    const message = ref('Hello, Vue!');

    function toggle() {
      isVisible.value = !isVisible.value;
    }

    return {
      isVisible,
      message,
      toggle
    };
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

button {
  margin: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}
</style>
