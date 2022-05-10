<template>
  <div>
    <h3>
      Account: {{ realname }}, {{ role }} | PhoneNumber: {{ phone }} | location:
      Not implemented
    </h3>
    <button type="submit" value="Edit">edit location</button>
    <h3>walletbalance: {{ balance }}</h3>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      realname: "",
      role: "",
      phone: "",
      location: "",
      balance: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>