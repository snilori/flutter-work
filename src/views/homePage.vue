<template>
   <div id="home" class="home container">
     <h3>
       The best events happening now.
     </h3>

       <div class="home-control">
         <div v-for ='(event, index) in events' :key="index">
           <div  v-if="event.image != null" class="events"  @click="viewEventDetails( event.id)" >
           <div class="home-control-picture-one">
             <img :src="event.image"  alt="flutter-event-image-one" >
             <p class="date-text">{{dateFormater( event.tickets_sale_end_date)}}</p>
             <p class="picture-text-header">{{event.name}}</p>
             <p class="figure-sum-text">{{eventPrice.regular + ' ' + '-'+ ' ' + eventPrice.vvip}}</p>
           </div>
          </div>
         </div>
     </div>

   </div>
</template>

<script>
import {mapState} from 'vuex'
import {EventServices} from '../services'
export default {
  name: 'homePage',
  data () {
    return {
      events: []
    }
  },

  computed: {
    ...mapState(['eventPrice'])
  },
  methods: {
    dateFormater (date) {
      let d = new Date(date)
      let reModelDate = d.toLocaleString(['en-Us'], {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      })

      return reModelDate
    },

    viewEventDetails (id) {
      this.$router.push('/event/' + id)
    }
  },

  async mounted () {
    let {data} = await EventServices.events()
    this.events = data.events
  }
}
</script>

<style scoped>
  .home {

  }
  .home-control{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto !important;
    /*justify-content: space-between;*/
  }

  .home-control .events {
    min-width: 250px;
    max-width: 320px;
    margin: 20px
  }

  .home-control .events img {
    width: 100%;
  }
  h3{
    margin-left: 2%;
    margin-top: 7%;
  }
  .picture-text-header{
    font-weight: 800;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .date-text{
    margin-bottom: 2px;
    margin-top: 1px;
    color: #4F4F4F;
  }
  .status-text{
    color: #EB5757;
    margin-top: 8px;
  }
  .status-text-two{
    color: #219653;
    margin-top: 8px;

  }
  .figure-sum-text{
    margin-top: 8px;
    color: #4F4F4F;
  }
  .home-control{
    margin-bottom: 1.6em;
  }
  .flutter-picture-one{
    width: 300px;
  }

</style>
