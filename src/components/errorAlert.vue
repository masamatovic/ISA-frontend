<template>
<div>
  <b-alert show class="d-flex justify-content-center" variant="danger" >
    <h5>
        {{poruka}}
    </h5>
  </b-alert>
</div>
</template>

<script>
    export default {
        props: {
            poruka: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style scoped>

</style>