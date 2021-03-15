<template>
  <li class="mobile-main-menu__item mobile-main-menu__item_muted">
    <button
        type="button"
        class="mobile-main-menu__link"
        @click="$emit(`navigate`)"
        ref="back"
    >
      <ItemIcon :name="`Назад`"/>

       {{ prevSectionName ? prevSectionName : `Назад` }}
    </button>
  </li>
</template>

<script>
import ItemIcon from "./ItemIcon";

export default {
  name: `GoBackButton`,
  props: {
    prevSectionName: {
      type: String,
    }
  },
  components: {
    ItemIcon
  }
}
</script>
