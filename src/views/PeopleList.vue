<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue';
import data_people from '@/data/data_people';
import type People from '@/types/People';
import { ref } from 'vue';

const people = ref<People[]>();
people.value = data_people.getPeople();
const isAscending = ref(true);


const sortByName = () => {
  people.value.sort((a, b) => {
    return isAscending.value
      ? a.last_name.localeCompare(b.last_name) // A-Z
      : b.last_name.localeCompare(a.last_name); // Z-A
  });
};
const toggleSortDirection = () => {
  isAscending.value = !isAscending.value; // Átkapcsolás
  sortByName(); // Újrendezés az új irány szerint
};
</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <button @click="toggleSortDirection" class="btn btn-primary m-2">
    Rendezés: {{ isAscending ? 'A-Z' : 'Z-A' }}
  </button>
  <div class="row">
    <PeopleCard v-for="p in people" :p="p" class="m-2">
    </PeopleCard>
  </div>
</template>


<style scoped></style>