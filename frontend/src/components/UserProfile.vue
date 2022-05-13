<template>
  <div id="profile">
    <div class="profile-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      {{ user.realname }} ({{ user.role }})
    </div>

    <div class="profile-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-telephone-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
      {{ user.phone }}
    </div>

    <div class="profile-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-geo-alt-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        />
      </svg>
      (
      <input v-model="user.longitude" :disabled="!editing" />,
      <input v-model="user.latitude" :disabled="!editing" />
      )
      <button v-if="editing" type="submit" value="Done" @click="doneEdit">
        Done
      </button>
      <button v-else type="submit" value="Edit" @click="startEdit">Edit</button>
    </div>

    <div class="profile-item">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-piggy-bank-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      {{ user.balance }}
      <button type="submit" value="Add money">Add money</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { axios } from "axios";

export default {
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    startEdit() {
      this.editing = true;
    },
    async doneEdit() {
      this.editing = false;
      await axios.put("");
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

#profile {
  @include flex;
  gap: 20px;
  padding: 20px;
  width: clamp(200px, 20%, 300px);
  margin-left: 15px;
  margin-right: 50px;
  box-sizing: border-box;
  box-shadow: 0px 14px 20px 12px #00000012;
}

button {
  border: 2px solid var(--info-color);
  background-color: var(--info-color);
  color: var(--white-color);
  padding: 0 10px;
  transition-duration: 0.4s;
  border-radius: 2px;
  &:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
  }
}

input {
  outline: none;
  border: none;
  border-bottom: 0.05em solid var(--ternary-color);
  background-color: var(--primary-color);
  padding: 0;
  width: 50px;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  &:disabled {
    border-bottom: 0.05em solid var(--primary-color);
  }
}
</style>