<template>
  <div>
    <TheNavBar />
     <slot></slot>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar'
import TheFooter from '../components/TheFooter'
export default {
  name: 'Private',
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style scoped>

</style>
