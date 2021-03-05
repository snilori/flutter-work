<template>
  <div class="footer-control">
    <div class="footer-board">
      <div class="footer-board-text-control">
        <p class="copyright-flutter">Copyright 2019. Flutterwave inc.</p>
      </div>

      <div class="footer-list-text">
        <ul class="conditions-list">
          <li class="conditions-item">Terms & Conditions</li>
          <li class="conditions-item">Privacy Policy</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
  .footer-board{
    display: flex;
    justify-content: space-around;
    margin-top: 0em;
  }

  .conditions-list{
    list-style: none;
  }
  .conditions-item{
    display: inline;
    margin-left: 1em;
    color: #4A4A4A;
    /*opacity: 60%;*/
    font-size: 14px;
    line-height: 16px;
  }
  .copyright-flutter{
    color: #4A4A4A;
    /*opacity: 60%;*/
    font-size: 14px;
    line-height: 16px;
  }
</style>
