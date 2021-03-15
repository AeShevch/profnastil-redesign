<template>
  <li class="mobile-main-menu__item"
      :class="{
            'mobile-main-menu__item_catalog': item.label === 'Каталог',
            'mobile-main-menu__item_sales': item.label === 'Акции'
          }">

    <!--
     Если есть подразделы -> показываем button,
     Если подразделов нет -> показываем ссылку
     -->
    <button
        type="button"
        class="mobile-main-menu__link"
        @click="$emit('navigate')"
        ref="link"
        v-if="item.hasItems"
    >
      <ItemIcon
          :currentLevelDepth="currentLevelDepth"
          :name="item.label"
          :src="``"
      />
      {{ item.label }}
    </button>

    <a
        href=""
        v-else
        :href="item.url"
        class="mobile-main-menu__link"
    >
      <ItemIcon
          :currentLevelDepth="currentLevelDepth"
          :name="item.label"
          :src="``"
      />
      {{ item.label }}
    </a>

  </li>
</template>

<script>
import ItemIcon from "./ItemIcon";

export default {
  name: `SubmenuItem`,
  props: [`item`, `currentLevelDepth`],
  components: {
    ItemIcon
  }
}
</script>
