<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import type People from '@/types/People';
const prop = defineProps(['p']);


const router = useRouter();
const goToContact = () => {
  router.push(`/emberek/${prop['p'].id}`);
};

</script>

<template>

   <div class="card" style="width: 16rem;">
      <img class="card-img-top" :src="prop['p'].avatar" alt="Card image cap"  @click="goToContact"
      style="cursor: pointer;">
      <div class="card-body">
         <h5 class="card-title" style="cursor: pointer;" @click="goToContact">{{ prop['p'].first_name }} {{ prop['p'].last_name }}</h5>
         <h6 class="card-text">{{ prop['p'].email }}</h6>
      </div>
   </div>
</template>


<style scoped></style>
