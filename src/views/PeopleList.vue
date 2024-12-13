<script setup lang="ts">
import PeopleCard from '@/components/PeopleCard.vue';
import data_people from '@/data/data_people';
import type People from '@/types/People';
import { ref } from 'vue';

const people = ref<People[]>();
people.value = data_people.getPeople();

</script>

<template>
  <h1 class="display-5">Emberek</h1>
  <div class="row">
    <PeopleCard v-for="p in people" :p="p" class="m-2">
    </PeopleCard>
  </div>
</template>


<style scoped></style>