
<template>
  <v-card
    class="mx-auto grey darken-4 "
    max-width="800"
    width="800"
  >
  <v-form
    ref="form"
    lazy-validation
  >
  <v-col cols="12" md="12" sm="6">
    <v-card-text>
      <h2>Insert New Note:</h2>
          <v-text-field
            v-model="note.author"
            :counter="100"
            label="Author"
            required
          ></v-text-field>

          <v-text-field
            v-model="note.title"
            :counter="100"
            label="Title"
            required
          ></v-text-field>

        <v-textarea
          outlined
          name="input-7-4"
          :counter="500"
          label="Your Text"
          value=""
        ></v-textarea>

    </v-card-text>
    <v-card-actions>
        <v-btn
          color="primary"
          @click="submit"
        >
          Submit
        </v-btn>

    </v-card-actions>
  </v-col>
  </v-form>
  </v-card>
</template>


<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
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
        methods: {
          makeid: function(length=16) {
              var result = '';
              var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
              var charactersLength = characters.length;
              for (var i = 0; i < length; i++) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
              }
              return result;
          },
          LogNote(){
            console.log(this.note);
          },
          submit(){
            this.note.id = this.makeid();
            this.LogNote();
            this.$store.dispatch('pushNote', this.note);
          }

        }
    }
</script>
