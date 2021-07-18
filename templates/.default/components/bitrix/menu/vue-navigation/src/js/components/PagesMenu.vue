<template>
  <nav role="navigation" class="mobile-pages-menu">
    <h4 class="mobile-pages-menu__title">
      Покупателям
    </h4>
    <ul class="mobile-pages-menu__list list-reset">
      <li class="mobile-pages-menu__item" v-for="{name, link} in pages">
        <a
            :href="link"
            :key="link"
            class="mobile-pages-menu__link"
            :title="`Перейти к странице ${name}`"
        >{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: `PagesMenu`,
  data() {
    return {
      pages: [
        {
          name: `Новинки`,
          link: `/`
        },
        {
          name: `Доставка и подъем`,
          link: `/`
        },
        {
          name: `Возврат`,
          link: `/`
        },
        {
          name: `Вопрос-ответ`,
          link: `/`
        },
        {
          name: `Как приобрести товар`,
          link: `/`
        },
        {
          name: `Полезная информация`,
          link: `/`
        },
        {
          name: `Контакты`,
          link: `/`
        },
      ]
    }
  }
}
</script>
