<template>
  <dl class="row align-items-center justify-content-center">
    <dt class="col-12 text-center mb-3">Наши проекты</dt>
    <dd v-for="{name, logoSrc} in items" class="col-6 col-sm text-center mb-4">
      <img :src="SITE_TEMPLATE_PATH + logoSrc"
           :alt="`Логотип компании «${name}»`"
           loading="lazy">
    </dd>
  </dl>
</template>

<script>
const {SITE_TEMPLATE_PATH} = window.bxConstants;

export default {
  name: `Projects`,
  data() {
    return {
      SITE_TEMPLATE_PATH,
      items: [
        {
          name: `iPort`,
          logoSrc: `/images/projects-logos/iport-dark.svg`,
        },
        {
          name: `NBCom`,
          logoSrc: `/images/projects-logos/nb-dark.png`,
        },
        {
          name: `Sony Centre`,
          logoSrc: `/images/projects-logos/sony-dark.svg`,
        },
        {
          name: `Samsung Store`,
          logoSrc: `/images/projects-logos/samsung-dark.svg`,
        },
      ]
    }
  }
}
</script>
