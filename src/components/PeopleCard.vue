<script setup lang="ts">

import type People from '@/types/People';
const prop = defineProps(['p']);

</script>

<template>

   <div class="card" style="width: 16rem;">
      <img class="card-img-top" :src="prop['p'].avatar" alt="Card image cap">
      <div class="card-body">
         <h5 class="card-title">{{ prop['p'].first_name }} {{ prop['p'].last_name }}</h5>
         <h6 class="card-text">{{ prop['p'].email }}</h6>
      </div>
   </div>
</template>


<style scoped></style>
