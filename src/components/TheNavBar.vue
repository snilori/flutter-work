<template>
  <div class="hero-section container">
    <div class="hero-section-container">
      <div class="flutter-logo-brand">
        <img src="../assets/Images/flutter-logo.png" alt="flutterwave-logo" class="flutterwave-logo">
      </div>

      <div class="flutter-buttons">
        <a href="" class="ticket-not-gotten">
          I didn’t get my tickets
        </a>

        <button class="orange-create-event">
          CREATE YOUR OWN EVENT
        </button>

        <button class="orange-create-event mobile">
          CREATE EVENT
        </button>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>

<style scoped>
  .hero-section-container {
    display: flex;
    flex-direction: row;
    margin-top: .4em;
    /*justify-content: space-evenly;*/
  }

  .flutter-logo-brand {
    margin-right: auto;
  }

  .orange-create-event {
    background-color: #F5A623;
    color: white;
    padding: 10px 20px;
    font-size: 10pt;
    margin-left: 1.5em;
    border-radius: .3em;
    outline: 0;
    border: 0;
  }

  .flutter-buttons {
    margin-top: .1em;
  }

  .ticket-not-gotten {
    text-decoration: none;
    color: #333333;
    font-weight: 600;
  }

  .mobile {
    display: none;
  }
</style>
