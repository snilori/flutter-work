<template>
  <div id="event" class="container">
    <div class="event-control">
      <div class="event-control-alpha">
        <p class="event-date-text">{{dateFormater( event.tickets_sale_end_date)}}</p>
        <div class="event-title"><p class="nathan-cole-header">{{event.name}}</p></div>
        <p class="nathan-cole-sub-text">Two-Time Grammy Award winner, Nathaniel Cole, who’s also<br>
          just released an album, Into The Wild, will be having his first<br>
          concert in Lagos, Nigeria!<br>
          Fans have waited so long for this announcement, and it<br>
          promises to be everything anyone has imagined.
        </p>
        <p class="event-figure-text-one" v-if="!event.is_free">{{eventPrice.regular + ' ' + '-' + ' '+
          eventPrice.vvip}} </p>
        <a href="" class="tickets-payment">BUY TICKETS </a>
      </div>

      <div class="event-control-beta">
        <img :src="event.image" class="flutter-vertical-Image">
      </div>

    </div>

    <div class="line-separation">
    </div>

    <div class="location-event-control">
      <div class="location-event-control-alpha">
        <p class="venue-text">Venue </p>
        <p class="eko-atlantic-text">Eko Atlantic Beach, Off Ahmadu<br>
          Bello way, Victoria Island,<br>
          Lagos.</p>
        <p class="map-show-control">
            <span>
              <img src="../assets/Images/map-show.png" alt="map-show" class="map-show">
            </span>

          <span class="map-direction-beta">
                View map for directions
            </span>
        </p>
      </div>

      <div class="location-event-control-beta">
        <p class="timing-text">DATE AND TIME</p>
        <p class="february-text">Friday, February 8th 2019, 10:00pm</p>
        <p>SOCIAL LINKS</p>
        <ul class="nathaniel-cole-listing-group">
          <li class="nathaniel-cole-listing-sub-group">http://www.nathanielcole.com</li>
          <li class="nathaniel-cole-listing-sub-group">https://twitter.com/nathanielcole</li>
          <li class="nathaniel-cole-listing-sub-group">https://instagram.com/nathanielcole/</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import EventServices from '../services/events'

export default {
  name: 'eventPage',
  data () {
    return {
      event: {}
    }
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
    }
  },

  computed: {
    ...mapState(['eventPrice'])
  },

  async mounted () {
    try {
      let id = this.$route.params.eventId

      let {data} = await EventServices.getIndividualEvent({
        id
      })
      this.event = data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
  .event-control {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3em;
  }

  .event-control-beta {
    width: 40%;
    height: 26vw;
    margin: 20px;
  }

  .event-control-beta img {
    width: 100%;
    height: 100%;
  }

  .event-date-text {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  .nathan-cole-header {
    font-weight: 800;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 6px;
  }

  .nathan-cole-sub-text {
    color: #4A4A4A;
    margin-top: 14px;
    margin-bottom: 24px;
  }

  .event-figure-text-one {
    margin-top: 3em;
    margin-bottom: 2em;
  }

  .tickets-payment {
    background-color: #F5A623;
    color: white;
    padding: 12px 70px;
    text-decoration: none;
    font-size: 10pt;
    border-radius: .3em;
  }

  .line-separation {
    border-bottom: 1px solid #CCB7B1;
    /*margin-left: 4%;*/
    /*margin-right: 4%;*/
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .nathaniel-cole-listing-group {
    list-style: none;
    padding-left: 0 !important;
  }

  .location-event-control {
    display: flex;
    flex-wrap: wrap;
  }

  .event-control-alpha {
    width: 50%;
  }

  .location-event-control-alpha {
    width: 50%;
    /*margin-left: 7%;*/
  }

  .venue-text {
    text-transform: uppercase;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  .eko-atlantic-text {
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    color: #333333;
  }

  .map-direction-beta {
    font-size: 16px;
    line-height: 18px;
    /* identical to box height, or 112% */
    color: #F5A623;
  }

  .timing-text {
    font-size: 18px;
    line-height: 16px;
    /* identical to box height, or 89% */
    color: #333333;
  }

  .february-text {
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    color: #333333;
  }

  .nathaniel-cole-listing-sub-group {
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */
    color: #12122C;
    opacity: 80%;
  }

  /*.flutter-vertical-Image{*/
  /*  height: ;*/
  /*}*/
  .event-title {
    width: 80%;
  }
</style>
