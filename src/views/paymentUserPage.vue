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

        <div class="regular-price-control">
          <div class="regular-price-control-board">
            <div class="regular-price-text">
              Regular
            </div>

            <div class="regular-price-amount">
              N5000
            </div>

            <div class="regular-price-quantity">
              <button class="minus-background"> -</button>
              <span> 2 </span>
              <button class="plus-background"> +</button>
            </div>
          </div>
        </div>

        <div class="vip-price-control">
          <div class="vip-price-control-board">
            <div class="vip-price-text">
              VIP
            </div>

            <div class="vip-price-amount">
              N100,000
            </div>

            <div class="vip-price-quantity">
              <button class="minus-background"> -</button>
              <span> 1 </span>
              <button class="plus-background"> +</button>
            </div>
          </div>
        </div>

        <div class="table-price-control">
          <div class="table-price-control-board">
            <div class="table-price-text">
              Table for 5
            </div>

            <div class="table-price-amount">
              N100,000,000
            </div>

            <div class="table-price-quantity">
              <button class="minus-background"> -</button>
              <span> 0 </span>
              <button class="plus-background"> +</button>
            </div>

          </div>
        </div>
        <p class="ticket-sale-text">Ticket sales ends on 22nd November 2019</p>
      </div>

      <div class="payment-control-second-side">
        <p class="go-back-text">Go back</p><i class="fa fa-arrow-left" aria-hidden="true"></i>
        <div class="go-back-border"></div>
        <label>Full name</label><br>
        <input type="text" alt="text-box" class="payment-name-boxes"><br>
        <label>Email address</label><br>
        <input type="text" alt="text-box" class="payment-name-boxes"><br>
        <label>Phone number</label><br>
        <input type="text" alt="text-box" class="payment-name-boxes">

        <div class="total-payment-control">
          <div class="total-payment-control-alpha">
            TOTAL PAYMENT
          </div>

          <div class="total-payment-control-beta">
            N111,000
          </div>
        </div>

        <div class="payment-botton-control">
          <button class="payment-botton">PAY N111,000</button>
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
export default {
  name: 'paymentPage'
}
</script>

<style scoped>
  .regular-price-control-board, .vip-price-control-board, .table-price-control-board {
    display: flex;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  .regular-price-text, .vip-price-text, .table-price-text {
    width: 35%;
  }

  .regular-price-amount, .vip-price-amount, .table-price-amount {
    width: 40%;
  }

  .payment-control-board {
    display: flex;
  }

  .payment-control-first-side {
    width: 75%;
  }

  .total-payment-control {
    display: flex;
    margin-bottom: 2em;
  }

  .total-payment-control-alpha {
    width: 80%;
    font-weight: 600;
  }

  .total-payment-control-beta {
    font-weight: 600;
  }

  .total-payment-control {
    margin-top: 1em;
  }

  .payment-botton {
    background-color: #F5A623;
    color: white;
    /*padding: 12px 70px;*/
    /*font-size: 10pt;*/
    border-radius: .3em;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    border: 0;
  }

  .payment-botton-control {
    margin-top: 1em;
  }

  .blue-mark-sign-control {
    display: flex;
    margin-top: 1em;
  }

  .blue-mark-sign-control-alpha {
    width: 8%;
    margin-right: .5em;
  }

  .payment-control-second-side {
    background-color: white !important;
    padding: 1em;
    height: 100vh;
    width: 25%;
  }

  .payment-control-first-side {
    margin-left: 7%;
  }

  .close-button-control {
    background-color: white;
    border-radius: 2em;
    border: 0;
    padding: 10px 20px;
    margin-top: 2em;
  }

  .cole-text-header {
    font-weight: 800;
    font-size: 30px;
    line-height: 34px;
    color: #12122C;
    margin-bottom: 0px;
  }

  .february-date {
    margin-top: 8px;
    margin-bottom: 40px;
  }

  .regular-price-control, .vip-price-control, .table-price-control {
    border-bottom: 1px solid #BDBDBD;
    margin-right: 20%;
  }

  .minus-background {
    background-color: white;
    border-radius: 6em;
    padding: .4em;
    outline: 0;
    border: 0;
  }

  .plus-background {
    background-color: white;
    border-radius: 6em;
    padding: .4em;
    outline: 0;
    border: 0;
  }

  .ticket-sale-text {
    color: #828282;
    font-size: 14px;
    line-height: 28px;
  }

  .payment-name-boxes {
    background: #FDFDFD;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    margin-bottom: 1em;
  }

  .customer-protection-text {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
  }

  .money-guarantee-text {
    font-size: 13px;
    line-height: 14px;
    margin-top: 4px;
  }

  .go-back-text {
    margin-bottom: 6px;
  }

  .go-back-border {
    border-bottom: 1px solid #BDBDBD;
    margin-bottom: 1em;
  }
</style>
