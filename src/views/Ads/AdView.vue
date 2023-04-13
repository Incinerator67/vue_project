<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img height="300px"	:src="ad.src"></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" variant="flat">Edit</v-btn>
            <v-btn color="success" variant="flat">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
  export default {
    props: ['id'],
    computed: {ad() {
      const id = this.id
      return this.$store.getters.adById(id)
		}}
  } 
</script>
  