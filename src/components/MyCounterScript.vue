<template>
  <section class="p">
    <h3 >Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="p-1 bg-green-600 hover:bg-green-400 rounded mr-2"  @click="counter += 1">+ 1</button>
      <button class="p-1 bg-red-600 hover:bg-red-400 rounded mr-2"  @click="counter -= 1">- 1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { userCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {type: Number, required: true},
  },

  setup(props) {

    const {counter,squareCounter} = userCounter(props.value);

    /* const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value); */

    return {
    counter,
    squareCounter,
  }
  },


});





</script>


