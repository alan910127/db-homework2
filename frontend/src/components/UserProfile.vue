<template>
  <div>
    <h3>
      Account: {{ user.realname }}, {{ user.role }} | PhoneNumber:
      {{ user.phone }} | location: ({{ user.longitude }}, {{ user.latitude }})
    </h3>
    <button type="submit" value="Edit">edit location</button>
    <h3>walletbalance: {{ user.balance }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({ user: (state) => state.user }),
  },
};
</script>

<style>
</style>