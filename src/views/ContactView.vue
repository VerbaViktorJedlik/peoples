<script setup lang="ts">
import data_people from '@/data/data_people';
import { useRoute, useRouter } from 'vue-router';
import type People from '@/types/People';
import {onMounted, ref } from 'vue';

const route = useRoute();
const router = useRouter();
const person = ref(null);
const id = route.params.id;

onMounted(() => {
  person.value = data_people.getPeople().find((p) => p.id == id);
});
const goBack = () => {
  router.back();
};

</script>

<template>
     <div class="container mt-5">
    <button @click="goBack" class="btn btn-secondary mb-3">Vissza</button>
    <div v-if="person" class="card" style="width: 24rem; margin: auto;">
      <img :src="person.avatar" class="card-img-top" alt="Avatar" />
      <div class="card-body">
        <h5 class="card-title">{{ person.first_name }} {{ person.last_name }}</h5>
        <p class="card-text">Email: {{ person.email }}</p>
      </div>
    </div>
    <div v-else>
      <p>Adatok betöltése...</p>
    </div>
  </div>
</template>


<style scoped>

</style>