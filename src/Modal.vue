<template>
  <div v-if="show" class="w-full h-full bg-opacity-60 bg-gray-200 blur-lg absolute top-0 left-0">
    <div
      class="flex flex-col justify-center w-1/2 mx-auto my-0 rounded-xl h-2/3 bg-white"
      style="margin-top: 100px"
    >
      <h2 class="text-3xl">Hey there!</h2>
      <div>
        <div>
          <slot />
        </div>
        <button
          class="mt-20 py-1 px-4 text-xl text-green-600 underline focus:ring-1 focus:ring-green-60060 rounded"
          data-testid="closeButton"
          @click="$emit('close')"
        >Got it!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['show']
})
</script>