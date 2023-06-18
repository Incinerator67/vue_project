export default {
  state: {
      ads: [
          {
            title: "First",
            desc: "First Desc",
            promo: true,
            src: "https://www.msu.ru/images/depts/hm-1.jpg",
            id: "1",
            userId: "1"
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
    },
    loadAds (state, payload) {
      state.ads = payload
    },  
    updateAd (state, {title, desc, id}) {
      const ad = state.ads.find(a => {return a.id === id})
      ad.title = title
      ad.desc = desc
    }
  },
  actions: {
    createAd({commit, getters},payload){
      payload.id = Math.random()
      payload.userId = getters.user != null ? getters.user.id : '1'
    }
  },
  async updateAd ({commit},{title,desc,id}) {
    commit('clearError')
    commit('setLoading', true)
    //Заглушка запроса
    let isRequestOk = true
    let promise = new Promise(function(resolve) {resolve('Done')});
    if (isRequestOk) {
      await promise.then(()=> {
        commit('updateAd',{ title, desc, id})
        commit('setLoading', false)
      })
    } 
    else {
      await promise.then(()=> {
        commit('setLoading', false)
        commit('setError', 'Ошибка редактирования объявления')
        throw 'Упс... Ошибка редактирования объявления'
      })
    }  
  },
  getters: {
    ads(state) {return state.ads},
    promoAds(state) {
      return state.ads.filter(ad => {return ad.promo})
    },
    myAds(state, getters) {
      return state.ads.filter(ad => {
      return ad.userId == getters.user.id
      })
    },
    adById(state) {
      return id => {return state.ads.find(ad => ad.id == id)}
    }, 
    async createAd({commit, getters},payload){
      payload.id = Math.random()
      payload.userId = getters.user != null ? getters.user.id : '1'
      commit('clearError')
      commit('setLoading', true)
      //Заглушка запроса
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
      setTimeout(() => resolve('Done')
      , 3000);
      });
      if (isRequestOk) {
        await promise.then(()=> {
          commit('createAd', payload)
          commit('setLoading', false)
        })
      } 
      else {
        await promise.then(()=> {
          commit('setLoading', false)
          commit('setError', 'Ошибка создания объявления')
          throw 'Упс... Ошибка создания объявления'
        })
      }
    },
  }
}
    