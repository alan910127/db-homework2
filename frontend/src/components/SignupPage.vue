<template>
  <div class="sign">
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model="form.realname"
          :class="getInputClass('realname')"
          @change="onInputChange($event, 'realname')"
          name="realname"
          id="realname"
          type="text"
        />
        <label for="realname" class="placeholder">
          <span>Real Name</span>
        </label>
        <ul v-if="errors.realname && errors.realname.length">
          <li v-for="(error, index) in errors.realname" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model.lazy="form.account"
          :class="getInputClass('account')"
          @change="onInputChange($event, 'account')"
          name="account"
          id="account"
          type="text"
        />
        <label for="account" class="placeholder">
          <span>Account</span>
        </label>
        <ul v-if="errors.account && errors.account.length">
          <li v-for="(error, index) in errors.account" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.phone"
          :class="getInputClass('phone')"
          @change="onInputChange($event, 'phone')"
          name="phone"
          id="phone"
          type="text"
        />
        <label for="phone" class="placeholder">
          <span>Phone Number</span>
        </label>
        <ul v-if="errors.phone && errors.phone.length">
          <li v-for="(error, index) in errors.phone" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.password"
          :class="getInputClass('password')"
          @change="onInputChange($event, 'password')"
          name="password"
          id="password"
          type="password"
        />
        <label for="password" class="placeholder">
          <span>Password</span>
        </label>
        <ul v-if="errors.password && errors.password.length">
          <li v-for="(error, index) in errors.password" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.confirm"
          :class="getInputClass('confirm')"
          @change="onInputChange($event, 'confirm')"
          name="confirm"
          id="confirm"
          type="password"
        />
        <label for="confirm" class="placeholder">
          <span>Confirm Password</span>
        </label>
        <ul v-if="errors.confirm && errors.confirm.length">
          <li v-for="(error, index) in errors.confirm" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.latitude"
          :class="getInputClass('latitude')"
          @change="onInputChange($event, 'latitude')"
          name="latitude"
          id="latitude"
          type="number"
          step="0.000000000000001"
        />
        <label for="latitude" class="placeholder">
          <span>Latitude</span>
        </label>
        <ul v-if="errors.latitude && errors.latitude.length">
          <li v-for="(error, index) in errors.latitude" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.longitude"
          :class="getInputClass('longitude')"
          @change="onInputChange($event, 'longitude')"
          name="longitude"
          id="longitude"
          type="number"
          step="0.000000000000001"
        />
        <label for="latitude" class="placeholder">
          <span>Longitude</span>
        </label>
        <ul v-if="errors.longitude && errors.longitude.length">
          <li v-for="(error, index) in errors.longitude" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit" :disabled="buttonClass">Sign Up</button>
    </form>
  </div>
</template>

<script>
import signupValidation from "@/mixins/signupValidation.js";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        realname: "",
        account: "",
        phone: "",
        password: "",
        confirm: "",
        latitude: null,
        longitude: null,
      },
      errors: {},
    };
  },
  methods: {
    async onSubmit() {
      for (const property in this.form) {
        const inputErrors = this.validateField(property, this.form[property]);
        if (inputErrors && inputErrors.length) {
          this.errors[property] = inputErrors;
        } else {
          this.errors[property] = null;
        }
      }

      if (this.buttonClass) return;

      if (this.form.password !== this.form.confirm) {
        alert("Please check your password!");
        this.form.password = this.form.confirm = "";
        return;
      }

      await axios.post("/register", {
        realname: this.form.realname,
        account: this.form.account,
        phone: this.form.phone,
        password: this.form.password,
        latitude: this.form.latitude,
        longitude: this.form.longitude,
      });

      alert("Registration succeed!");
      this.$router.push({ name: "signin" });
    },
    getInputClass(fieldName) {
      if (fieldName !== "longitude" && fieldName !== "latitude") {
        return (
          (this.form[fieldName].length ? "filled" : "") +
          (this.errors[fieldName] && this.errors[fieldName].length
            ? " danger"
            : "")
        );
      }
      return (
        (this.form[fieldName] !== null ? "filled" : "") +
        (this.errors[fieldName] && this.errors[fieldName].length
          ? " danger"
          : "")
      );
    },
    async onInputChange(e, field) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(field, inputValue);

      if (inputErrors && inputErrors.length) {
        this.errors[field] = inputErrors;
      } else {
        this.errors[field] = null;
      }

      if (field === "account") {
        const response = await axios.get(`/getuser/${inputValue}`);

        if (Object.keys(response.data).length > 0) {
          this.errors[field] = [
            ...(this.errors[field] ? this.errors[field] : []),
            "This account is registered",
          ];
        }
      } else if (field === "confirm") {
        if (this.form.password !== this.form.confirm) {
          this.errors[field] = [
            ...(this.errors[field] ? this.errors[field] : []),
            "Please check your password again",
          ];
        }
      }
    },
  },
  computed: {
    buttonClass() {
      for (const property in this.errors) {
        if (this.errors[property] && this.errors[property].length) return true;
      }
      return false;
    },
  },
  mixins: [signupValidation],
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
      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
      &.danger {
        border: 2px solid var(--danger-color);
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
  ul {
    color: var(--danger-color);
    list-style-type: none;
    padding: 0;
    margin: 5px;
    font-size: 12px;
    gap: 4px;
  }
  button {
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    background-color: var(--info-color);
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.3s ease;
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>