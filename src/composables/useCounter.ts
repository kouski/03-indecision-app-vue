import { computed, ref } from "vue";

/* const counter = ref(10); */

export const userCounter = (initialValue: number = 0)=>{

  const counter = ref(initialValue);

  const squareCounter = computed(() => counter.value * counter.value);

  return {
    counter,
    squareCounter
  }
}

