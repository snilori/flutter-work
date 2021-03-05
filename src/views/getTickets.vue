<template>
    <div id="get-tickets">
      <div class="get-tickets-control">
        <p class="get-ticket-first-text">Enter your email and we’ll send your<br>
          tickets right away!</p>
        <div class="white-background-board">
          <div class="email-boarder">
<!--            <p class="white-background-board-control">-->
              <label>Email address</label><br>
              <input type="text" alt="email-border" class="email-write-on">
              <button class="confirm-ticket-click">
                CONFIRM AND SEND TICKET
              </button>
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'getTickets'
}
</script>

<style scoped>
  .get-tickets-control{
    text-align: center;
  }
  .get-ticket-first-text{
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    margin-top: 3em;
    margin-bottom: 2em;
  }
  .email-boarder{
    text-align: left;
    margin-left: 34.5%;
    margin-right: 34.5%;
    background-color: white;
    padding: 2em;
  }
  .email-write-on{
    margin-top: 1em;
    margin-bottom: 1em;
    /*padding: 10px 40px;*/
    padding-top: 10px;
    padding-bottom: 10px;
    width: 97%;
    outline: 0;

  }
  .confirm-ticket-click{
    background-color:#F5A623;
    color: white;
    /*padding: 12px 70px;*/
    /*font-size: 10pt;*/
    border-radius: .3em;
    border: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
  }
  /*.white-background-board-control{*/
  /*  background-color: white;*/
  /*  padding: 2em;*/
  /*}*/
</style>
