<template>
  <div class="addmeal">
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model="form.mealname"
          :class="getInputClass('mealname')"
          name="mealname"
          id="mealname"
          type="text"
        />
        <label for="mealname" class="placeholder">
          <span>mealname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.price"
          :class="getInputClass('price')"
          name="price"
          id="price"
          type="number"
        />
        <label for="price" class="placeholder">
          <span>price</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.quantity"
          :class="getInputClass('quantity')"
          name="quantity"
          id="quantity"
          type="number"
        />
        <label for="quantity" class="placeholder">
          <span>quantity</span>
        </label>
      </div>
      <div class="input">
        <input type="file" id="fileupload" />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {};
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
  h3 {
    font-size: 26px;
    font-weight: 400;
    margin: 0;
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