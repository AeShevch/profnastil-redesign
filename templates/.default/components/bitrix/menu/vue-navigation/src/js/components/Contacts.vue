<template>
  <div class="menu-mobile-contacts d-flex flex-column align-items-center">
    <div class="menu-mobile-contacts__item">
      <a href="tel:+74242777566"
         title="Позвонить нам"
         class="menu-mobile-contacts__link">
        <svg width="16" height="16">
            <use xlink:href="#icon_phone"></use>
        </svg>
        +7 (4242) 777-566
      </a>
    </div>
    <div class="menu-mobile-contacts__item">
      <a href="mailTo:tdprofnastil@mail.ru"
         title="Написать нам на email"
         class="menu-mobile-contacts__link">
        <svg width="16" height="16">
          <use xlink:href="#icon_letter"></use>
        </svg>
        tdprofnastil@mail.ru
      </a>
    </div>
    <div class="menu-mobile-contacts__item">
      <SocialLinks/>
    </div>
  </div>
</template>

<script>
import SocialLinks from "./SocialLinks";

export default {
  name: 'Contacts',
  components: {
    SocialLinks
  }
};
</script>
