<template>
  <div class="menu-mobile-contacts d-flex flex-column align-items-center">
    <div class="menu-mobile-contacts__item">
      <a href="tel:88123183836"
         title="Позвонить нам"
         class="menu-mobile-contacts__link">
        <svg width="16" height="16">
            <use xlink:href="#icon_phone"></use>
        </svg>
        8 (812) 318-38-36
      </a>
    </div>
    <div class="menu-mobile-contacts__item">
      <a href="mailTo:corporate@nbcom.ru"
         title="Написать нам на email"
         class="menu-mobile-contacts__link">
        <svg width="16" height="16">
          <use xlink:href="#icon_letter"></use>
        </svg>
        corporate@nbcom.ru
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
