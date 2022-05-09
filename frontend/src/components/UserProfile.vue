<template>
  <h3>
    Account: {{ realname }}, {{ role }} | PhoneNumber: {{ phone }} | location:
    Not implemented
  </h3>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      realname: "",
      role: "",
      phone: "",
      location: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>