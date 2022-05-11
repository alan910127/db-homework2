<template>
  <form @submit.prevent="onSubmit">
    <div class="header">
      <h3 class="signin">Sign In</h3>
      <h3 class="signup" @click="changePage">Sign Up</h3>
    </div>
    <div class="input">
      <input
        v-model="form.account"
        :class="getInputClass('account')"
        name="account"
        id="account"
        type="text"
      />
      <label for="account" class="placeholder">
        <span>Account</span>
      </label>
    </div>
    <div class="input">
      <input
        v-model="form.password"
        :class="getInputClass('password')"
        name="password"
        id="password"
        type="password"
      />
      <label for="password" class="placeholder">
        <span>Password</span>
      </label>
    </div>
    <button type="submit">Login</button><br />
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!this.form.account || !this.form.password) {
        alert("Please fill in all fields!");
        return;
      }

      const response = await axios
        .post("login", {
          account: this.form.account,
          password: this.form.password,
        })
        .catch((error) => {
          const status = error.response.status;
          if (status === 444) {
            // user-defined error
            alert(error.response.data.error);
            this.form.account = this.form.password = "";
            return;
          } else {
            throw error;
          }
        });

      console.log(response.data);

      this.$store.dispatch("user", response.data);

      console.log(this.$store.state.user);

      this.$router.push({ name: "homepage" });
    },
    changePage() {
      this.$router.push({ name: "signup" });
    },
    getInputClass(fieldName) {
      return this.form[fieldName].length ? "filled" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

form {
  @include flex;
  gap: 20px;
  width: clamp(300px, 30%, 400px);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 14px 20px 12px #00000012;
  border-radius: 8px;
  color: var(--text-color);
  .header {
    @include flex-row;
    justify-content: space-between;
    h3 {
      margin: 0;
      &.signin {
        margin-bottom: 0;
        font-size: 26px;
        font-weight: 500;
        cursor: default;
      }
      &.signup {
        color: var(--gray-color);
        font-size: 20px;
        font-weight: 300;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      &.signup:hover {
        color: var(--text-color);
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .input {
    position: relative;
    @include flex;
    input {
      border: 2px solid var(--secondary-color);
      border-radius: 8px;
      background-color: var(--secondary-color);
      outline: none;
      color: var(--text-color);
      padding: 10px 12px;
      box-sizing: border-box;
      font-size: 14px;
      transition: all 0.3s ease;
      &:focus,
      &:hover,
      &.filled {
        border: 2px solid var(--info-color);
      }
      &:focus + .placeholder span,
      &.filled + .placeholder span {
        transform: translateY(-100%);
      }
    }
    .placeholder {
      @include flex;
      position: absolute;
      width: calc(100% - 24px);
      top: 10px;
      left: 12px;
      pointer-events: none;
      overflow: hidden;
      span {
        transition: all 0.3s ease;
        font-size: 14px;
      }
    }
  }
  button {
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    background-color: var(--info-color);
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }
}
</style>