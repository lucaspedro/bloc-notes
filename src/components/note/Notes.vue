<template>
  <v-row>
        <appnote v-for="note in notes" :key="note.id" :noteID="note.id"></appnote>
  </v-row>
</template>

<script>
    import Note from './Note.vue';

    export default {
        components: {
            appnote: Note
        },
        computed: {
          notes(){
              return this.$store.getters.notes;
          }
        }
    }
</script>
