<template>
  <dl class="social row mb-0">
    <dd class="col mb-0" v-for="item in items">
      <a class="social__link"
         :href="item.link"
         :title="`Перейти в наш «${item.name}»`">
        <img :src="item.icon"
             class="social__icon"
             :alt="`Лого ${item.name}`"
             loading="lazy"
             width="24" height="24">
      </a>
    </dd>
  </dl>
</template>

<script>
const {SITE_TEMPLATE_PATH} = window.bxConstants;

export default {
  data() {
    return {
      items: [
        // {
        //   name: `Telegram`,
        //   link: `/`,
        //   icon: `${SITE_TEMPLATE_PATH}/images/social/telegram.svg`,
        // },
        {
          name: `Whatsapp`,
          link: `https://api.whatsapp.com/send/?phone=74242777566`,
          icon: `${SITE_TEMPLATE_PATH}/images/social/whatsapp.svg`,
        },
        // {
        //   name: `Viber`,
        //   link: `/`,
        //   icon: `${SITE_TEMPLATE_PATH}/images/social/viber.svg`,
        // },
      ]
    }
  }
}
</script>
