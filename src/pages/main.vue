<script setup lang="ts">
import modal from "../widgets/ui/modal/modal.vue";
import panel from "../widgets/ui/panel/panel.vue";
import task from "../widgets/ui/task/task.vue";
</script>

<template>
  <div class="cont">
    <panel />
    <task />
    <modal />
  </div>
</template>

<style scoped lang="scss">
.cont {
  display: flex;
  justify-content: space-between;
}
</style>
