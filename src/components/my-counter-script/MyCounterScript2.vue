<template>
  <section >
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="p-1 bg-green-600 hover:bg-green-400 rounded mr-2" @click="counter += 1">+ 1</button>
      <button class="p-1 bg-red-600 hover:bg-red-400 rounded mr-2"  @click="counter -= 1">- 1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>


