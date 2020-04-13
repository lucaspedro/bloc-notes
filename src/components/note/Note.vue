
<template>
  <v-col >
  <v-card
    class="mx-auto grey lighten-4 "
    max-width="344"
  >
    <v-card-text>
      <div class="black--text ">{{ note.author }}</div>
      <p class="display-1 black--text ">
        {{ note.title }}
      </p>
      <div class="black--text ">
        {{ note.text }}
      </div>
    </v-card-text>
    <hr>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        edit
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        delete
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</template>

<style scoped>
</style>

<script>
    export default {
        props: ['noteID'],
        data(){
          return {
            note: {
              id: '',
              title: '',
              text: '',
              author: ''
            }
          }
        },
        created() {
          this.note = this.$store.getters.search(this.noteID);
        }
    }
</script>
