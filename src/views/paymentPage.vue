<template>
  <div id="payment-control">
    <div class="payment-control-board">
      <div class="payment-control-first-side">
        <button class="close-button-control">
          <span>x</span>
          <span>close</span>
        </button>

        <p class="cole-text-header">The Nathan Cole Experience</p>
        <p class="february-date">8th February 2019</p>

        <div class="regular-price-control"  v-for="(value, key)  in eventPrice" :key="value">
          <div class="regular-price-control-board">
            <div class="regular-price-text">
              {{key == 'vvip' ? 'Table for 5' : key}}
            </div>

            <div class="regular-price-amount">
              {{value}}
            </div>

            <div class="regular-price-quantity" @click="reduce_Ticket(key)">
              <button class="minus-background"> - </button>
              <span> 2 </span>
              <button class="plus-background" @click="increase_Ticket(key)"> + </button>
            </div>
          </div>
        </div>

<!--        <div class="table-price-control">-->
<!--          <div class="table-price-control-board">-->
<!--            <div class="table-price-text">-->
<!--              Table for 5-->
<!--            </div>-->

<!--            <div class="table-price-amount">-->
<!--              N100,000,000-->
<!--            </div>-->

<!--            <div class="table-price-quantity">-->
<!--              <button class="minus-background"> - </button>-->
<!--              <span> 0 </span>-->
<!--              <button class="plus-background"> + </button>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
        <p class="ticket-sale-text">Ticket sales ends on 22nd November 2019</p>
      </div>

      <div class="payment-control-second-side">
        <p class="order-summary-page">Order summary</p>
        <div class="order-border"></div>
        <div class="regular-two-price-control">
          <div class="regular-two-price-text">
            2 - Regular
          </div>

          <div class="regular-two-price-figure">
            N10,000
          </div>
        </div>

        <div class="vip-one-price-control">
          <div class="vip-one-price-text">
            1 - VIP
          </div>

          <div class="vip-one-price-figure">
            N100,000
          </div>
        </div>

        <div class="order-border-two"></div>

        <div class="sub-total-price-control">
          <div class="sub-total-price-text">
            Sub-total
          </div>

          <div class="sub-total-price-figure">
            N110,000
          </div>
        </div>

        <div class="vat-total-price-control">
          <div class="vat-total-price-text">
            VAT
          </div>

          <div class="vat-total-price-figure">
            N1000
          </div>
        </div>

        <div class="collective-total-price-control">
          <div class="collective-total-price-text">
            Total payment
          </div>

          <div class="collective-total-price-figure">
            N111,000
          </div>
        </div>

        <div class="continue-botton-control">
          <button class="continue-botton">Continue</button>
        </div>

        <div class="blue-mark-sign-control">
          <div class="blue-mark-sign-control-alpha">
            <img src="../assets/Images/blue-mark-sign.png" alt="blue-mark-sign" class="blue-mark-sign">
          </div>

          <div class="blue-mark-sign-control-beta">
            <p class="customer-protection-text">100% customer protection</p>
            <p class="money-guarantee-text">Money back guarantee</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'paymentPage',

  computed: {
    ...mapState(['eventPrice'])
  },

  mounted () {
    console.log(this.eventPrice)
  },
  methods: {
    // ...mapActions(['increaseTicket', 'reduceTicket']),
    increase_Ticket (data) {
      this.$store.dispatch('increaseTicket', data)
    },
    reduce_Ticket (data) {
      this.$store.dispatch('reduceTicket', data)
    }

  }
}
</script>

<style scoped>
  .regular-price-control-board, .vip-price-control-board, .table-price-control-board{
    display: flex;
    margin-bottom: 1em;
    margin-top: 1em;
  }
  .regular-price-text, .vip-price-text, .table-price-text{
    width: 35%;
  }
  .regular-price-amount, .vip-price-amount, .table-price-amount{
    width: 40%;
  }
  .payment-control-board{
    display: flex;
  }
  .payment-control-first-side{
    width: 75%;
    margin-left: 7%;
  }
  .close-button-control{
    background-color: white;
    border-radius: 2em;
    border: 0;
    padding: 10px 20px;
    margin-top: 2em;
  }
  .cole-text-header{
    font-weight: 800;
    font-size: 30px;
    line-height: 34px;
    color: #12122C;
    margin-bottom: 0px;
  }
  .february-date{
    margin-top: 8px;
    margin-bottom: 40px;
  }
  .regular-price-control, .vip-price-control, .table-price-control{
    border-bottom: 1px solid #BDBDBD;
    margin-right: 20%;
  }
  .minus-background{
    background-color: white;
    border-radius: 6em;
    padding: .2em;
    outline: 0;
    border: 0;
  }
  .plus-background{
    background-color: white;
    border-radius: 6em;
    padding: .2em;
    outline: 0;
    border: 0;
  }
  .ticket-sale-text{
    color: #828282;
    font-size: 14px;
    line-height: 28px;
  }
  .payment-control-second-side{
    width: 25%;
    height: 100vh;
    background-color: white;
    padding: 2em;
  }
  .order-border{
    border: 1px solid #BDBDBD;
    margin-bottom: 1em;
  }
  .order-border-two{
    border: 1px solid #BDBDBD;
    margin-top: 6em;
    margin-bottom: 2em;
  }
  .continue-botton{
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
  .continue-botton-control{
    margin-top: 1em;
  }
  .blue-mark-sign-control{
    display: flex;
    margin-top: 1em;
  }
  .blue-mark-sign-control-alpha{
    width: 8%;
    margin-right: .7em;
  }
  .customer-protection-text{
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
  }
  .money-guarantee-text{
    font-size: 13px;
    line-height: 14px;
    margin-top: 4px;
  }
  .regular-two-price-control, .vip-one-price-control, .sub-total-price-control, .vat-total-price-control, .collective-total-price-control{
    display: flex;
  }
  .regular-two-price-text, .vip-one-price-text, .sub-total-price-text, .vat-total-price-text, .collective-total-price-text{
    width: 90%;
    margin-bottom: 1em;
    font-weight: 600;
  }

</style>
