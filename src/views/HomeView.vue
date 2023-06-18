<template>
<div>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-carousel>
          <v-carousel-item v-for="ad in promoAds" :key="ad.id" :src="ad.src" cover>>
            <div class="ad-link">
              <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container grid-list-lg>
    <v-row>
      <v-col cols="4" v-for="ad in ads" :key="ad.id">
        <v-card>
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ ad.title }}</h3>
              <div>{{ ad.desc }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
            <buy-ad-modal :ad="ad"></buy-ad-modal>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  computed:  { 
    promoAds() {return this.$store.getters.promoAds},
	  ads() {return this.$store.getters.ads}
  }
}
</script>
<!-- только к элементам текущего компонента -->
<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>