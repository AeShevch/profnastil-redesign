<template>
  <div class="mobile-nav" @click.stop>
    <div class="container">
      <transition-group
          :name="transitionName"
          tag="nav"
          class="mobile-nav__levels mobile-main-menu"
          ref="levels">
        <div class="mobile-nav__inner pb-5"
             tabindex="-1"
             :ref="`level-${getPathName(currentLevel.path)}`"
             :key="getPathName(currentLevel.path)">

          <!-- Главное меню (Каталог, Акции...)-->
          <div class="mobile-nav__level mobile-nav__item p-0"
               v-if="currentLevel"
               :aria-labelledby="`mobile-nav-level-label-${getPathName(currentLevel.path)}`" role="group"
          >
            <!-- Подразделы текущего раздела -->
            <ul class="mobile-main-menu__list list-reset">
              <!-- Кнопка «Назад»-->
              <GoBackButton
                  v-if="currentLevelDepth > 0"
                  @navigate="navigate(currentLevel.path.slice(0, currentLevelDepth - 1))"
                  :prevSectionName="levels[currentLevelDepth - 1].label"
              />
              <!-- Пункт меню -->
              <SubmenuItem
                  v-for="item in currentLevel.items"
                  @navigate="navigate(item.path)"
                  :key="item.path.join()"
                  :item="item"
                  ref="link"
                  :currentLevelDepth="currentLevelDepth"
              />
            </ul>
          </div>

          <!-- Контакты и соцсети -->
          <div class="mobile-nav__item" v-if="!currentLevelDepth">
            <Contacts/>
          </div>

          <!-- Меню страниц -->
          <div class="mobile-nav__item" v-if="!currentLevelDepth">
            <PagesMenu/>
          </div>

        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import smoothReflow from "vue-smooth-reflow";

import Contacts from "./Contacts";
import PagesMenu from "./PagesMenu";
import SubmenuItem from "./SubmenuItem";
import UserBlock from "./UserBlock";
import GoBackButton from "./GoBackButton";
import Projects from "./Projects";

const menuLinks = window.menuItems;
console.log(menuLinks);
export default {
  mixins: [smoothReflow],

  data() {
    return {
      menuItems: window.menuItems,
      currentPosition: [],
      levels: [],
      currentLevel: [],
      prevLevelDepth: 0,
      currentLevelDepth: 0
    };
  },

  computed: {
    transitionName() {
      return 'slide-' + (this.currentLevelDepth > this.prevLevelDepth ? 'left' : 'right');
    }
  },

  methods: {
    navigate(path) {
      this.currentPosition = path;
      this.recalculateItems();
    },

    recalculateItems() {
      let items = this.menuItems;
      let levels = [];

      levels.push(this.getLevel([], null, items));

      this.currentPosition.forEach((index, depth) => {
        const path = [...this.currentPosition].slice(0, depth + 1);
        const label = items[index] && items[index].label || null;
        items = items[index] && items[index].items || [];
        levels.push(this.getLevel(path, label, items));
      });

      this.levels = levels;
      this.currentLevel = levels[levels.length - 1];
      this.prevLevelDepth = this.currentLevelDepth;
      this.currentLevelDepth = levels.length - 1;
    },

    getLevel(path, label, items) {
      console.log(items);
      return {
        path: path,
        label: label,
        items: items.map((item, index) => {
          return {
            path: [...path, index],
            label: item.label,
            url: item.url,
            hasItems: item.items && item.items.length > 0
          }
        })
      };
    },

    getPathName(path) {
      if (!path || path.length < 0) {
        return 0;
      }

      return [0, ...path].join('-');
    },
  },

  mounted() {
    this.recalculateItems();
  },

  components: {
    Contacts, PagesMenu, SubmenuItem, UserBlock, GoBackButton, Projects
  },
}

</script>

