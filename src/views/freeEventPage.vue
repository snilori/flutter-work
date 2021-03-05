<template>
  <div id="event">
    <div class="event-control">
      <div class="event-control-alpha">
        <p class="event-date-text">8th February 2019</p>
        <p class="nathan-cole-header">The Nathan Cole<br>
          Experience</p>
        <p class="nathan-cole-sub-text-second">Two-Time Grammy Award winner, Nathaniel Cole, who’s also<br>
          just released an album, Into The Wild, will be having his first<br>
          concert in Lagos, Nigeria!<br>
          Fans have waited so long for this announcement, and it<br>
          promises to be everything anyone has imagined.
        </p>
        <button class="free-registration" id="free-registration-modal-btn" @click="modalHandler">REGISTER FOR FREE </button>
      </div>

      <div class="event-control-beta">
        <img src="../assets/Images/flutter-vertical-image.png" alt="flutter-vertical-image" class="flutter-vertical-Image">
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
      <TheRegisterFreeModal />
  </div>
</template>

<script>
import TheRegisterFreeModal from '../components/TheRegisterFreeModal'
export default {
  name: 'freeEventPage',
  components: {TheRegisterFreeModal},
  methods: {
    modalHandler () {
      let modal = document.getElementById('myModal')
      modal.style.display = 'block'
    }

  }
}

</script>

<style scoped>
  .event-control{
    display: flex;
    justify-content: space-around;
    margin-top: 3em;
  }
  .event-date-text{
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  .nathan-cole-header{
    font-weight: 800;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 6px;
  }
  .nathan-cole-sub-text-second{
    color: #4A4A4A;
    margin-top: 14px;
    margin-bottom: 40px;
  }
  .event-figure-text-one{
    margin-top: 3em;
    margin-bottom: 2em;
  }
  .free-registration{
    background-color:#F5A623;
    color: white;
    padding: 12px 70px;
    text-decoration: none;
    font-size: 10pt;
    border-radius: .3em;
    border: 0;
  }
  .line-separation{
    border-bottom: 1px solid #CCB7B1;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 4%;
  }
  .nathaniel-cole-listing-group{
    list-style: none;
    padding-left: 0 !important;
  }
  .location-event-control{
    display: flex;
  }
  .location-event-control-alpha{
    width: 50%;
    margin-left: 7%;
  }
  .venue-text{
    text-transform: uppercase;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }
  .eko-atlantic-text{
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    color: #333333;
  }
  .map-direction-beta{
    font-size: 16px;
    line-height: 18px;
    /* identical to box height, or 112% */
    color: #F5A623;
  }
  .timing-text{
    font-size: 18px;
    line-height: 16px;
    /* identical to box height, or 89% */
    color: #333333;
  }
  .february-text{
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    color: #333333;
  }
  .nathaniel-cole-listing-sub-group{
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */
    color: #12122C;
    opacity: 80%;
  }

</style>
