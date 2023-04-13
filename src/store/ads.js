export default {
  state: {
      ads: [
          {
            title: "First",
            desc: "First Desc",
            promo: true,
            src: "https://www.msu.ru/images/depts/hm-1.jpg",
            id: "1"
          },
          {
            title: "Second",
            desc: "Second Desc",
            promo: true,
            src: "https://киммерия-волошина.рф/images/museums/lkhm/08_1600x1060.jpg",
            id: "2"
          },
          {
            title: "Third",
            desc: "Thitd Desc",
            promo: true,
            src: "https://mkugmk.ru/upload/medialibrary/969/e8wvu2loux1uqc5bha34ny7bdo1rk78i/DIV_5210.jpg",
            id: "3"
          },
          {
            title: "Fouth",
            desc: "Fouth Desc",
            promo: true,
            src: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Natural-History-Museum-of-London.jpg",
            id: "4"
          }
        ]
      },
  mutations: {
    createAd(state, payload){
      state.ads.push(payload)
    }
  },
  actions: {
    createAd({commit},payload){
      payload.id = Math.random()
      commit('createAd', payload)
    }
  },
  getters: {
    ads(state) {return state.ads},
    promoAds(state) {
      return state.ads.filter(ad => {return ad.promo})
    },
    myAds(state) {return state.ads},
    adById(state) {return id => {
      return state.ads.find(ad => ad.id == id)
    }}  
  }
}
    