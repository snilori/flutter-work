<template>
  <div class="modal-control-board">
    <div class="modal" id="myModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h5>REGISTER FOR FREE</h5>
        <div class="line-adjustment">
        </div>
        <label>Full name</label><br>
        <input type="text" alt="text-box" class="name-boxes"><br>
        <label>Email address</label><br>
        <input type="text" alt="text-box" class="name-boxes"><br>
        <label>Phone number</label><br>
        <input type="text" alt="text-box" class="name-boxes"><br>
        <button class="registration-button">
          REGISTER
        </button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TheRegisterFreeModal',
  methods: {
    closeModal () {
      let modal = document.getElementById('myModal')
      modal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: lightgray; /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 30px;
    border: 1px solid #888;
    width: 24%;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  .line-adjustment{
    border-bottom: 1px solid lightgray;
    margin-bottom: 1.5em;
    margin-top: 4px;
  }
  .name-boxes{
    width: 100%;
    background-color:#FDFDFD;
    padding: 10px 0px ;
    margin-bottom: 1em;
    border: 1px solid #E0E0E0;
  }
  .registration-button{
    margin-top: 1em;
    background-color:#F5A623;
    color: white;
    padding: 12px 70px;
    font-size: 10pt;
    border-radius: .3em;
    border: 0;
    width: 100%;
  }
  h5{
    margin-bottom: 10px;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
</style>
