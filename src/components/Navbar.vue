 <template>
  <div>
     <DropDown v-model="selected" :options="options"></DropDown>

    <router-link :to="{ path: '/' }" class="product-link">
      Главная
    </router-link>

    <router-link :to="{ path: '/basket' }" class="product-link">
      Корзина
    </router-link>
    <input v-model="value" placeholder="Введите товар" />
  </div>
</template>

<script>
import DropDown from '@/components/DropDown.vue'
export default {
  components: {DropDown},  
  name: "Navbar",
  props: ['modelValue', 'options', 'select'],
  emits: ['update:modelValue'],
  
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
};
 </script>

<style></style> -->
