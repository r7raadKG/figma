<template>
  <v-app theme="dark" class="metro-app">
    <v-main class="d-flex justify-center">
      <div class="device-shell">
        <div class="device-shell__inner">
          <div class="status-bar">
            <span class="status-bar__time">9:41</span>
            <div class="status-bar__icons">
              <img :src="statusIcons.cellular" alt="Уровень сигнала" />
              <img :src="statusIcons.wifi" alt="Wi‑Fi" />
              <img :src="statusIcons.battery" alt="Заряд батареи" />
            </div>
          </div>

          <header class="screen-header">
            <button class="icon-button" aria-label="Назад">
              <img :src="headerIcons.chevron" alt="" />
            </button>
            <span class="screen-header__title">МЕТRO БОНУС</span>
            <button class="icon-button" aria-label="Закрыть">
              <img :src="headerIcons.close" alt="" />
            </button>
          </header>

          <div class="scroll-area">
            <section class="hero">
              <div class="hero__banner">
                <img class="hero__image" :src="heroImage" alt="Праздничное блюдо" />
                <div class="chip chip--blue">{{ heroContent.label }}</div>
                <h1 class="hero__title" v-html="formatMultiline(heroContent.title)"></h1>
                <p class="hero__subtitle">{{ heroContent.subtitle }}</p>
                <p class="hero__description">{{ heroContent.description }}</p>
                <span class="chip chip--yellow">{{ heroContent.deadline }}</span>
              </div>
            </section>

            <section class="progress-card">
              <div class="progress-card__header">
                <span class="progress-card__label">{{ progressCard.label }}</span>
                <span class="progress-card__amount">{{ progressCard.amount }}</span>
              </div>
              <div class="progress-card__track">
                <div
                  class="progress-card__fill"
                  :style="{ width: `${progressCard.progress * 100}%` }"
                ></div>
                <span class="progress-card__dot progress-card__dot--start"></span>
                <span class="progress-card__dot progress-card__dot--end"></span>
              </div>
            </section>

            <section class="grand-prize">
              <img
                class="grand-prize__background"
                :src="grandPrize.background"
                alt="Chef's Table"
              />
              <span class="chip chip--yellow">{{ grandPrize.badge }}</span>
              <h2 class="grand-prize__title" v-html="formatMultiline(grandPrize.title)"></h2>
              <p class="grand-prize__subtitle">{{ grandPrize.subtitle }}</p>
              <p class="grand-prize__count">{{ grandPrize.count }}</p>
              <p class="grand-prize__description">{{ grandPrize.description }}</p>
            </section>

            <section class="prize-grid">
              <div
                class="prize-row"
                v-for="(row, rowIndex) in chunkedPrizeCards"
                :key="`row-${rowIndex}`"
              >
                <article
                  v-for="card in row"
                  :key="card.id"
                  class="prize-card"
                  :class="card.className"
                >
                  <div class="prize-card__glow"></div>
                  <div class="prize-card__content">
                    <p class="prize-card__title" v-html="formatMultiline(card.title)"></p>
                    <p v-if="card.helper" class="prize-card__helper">
                      {{ card.helper }}
                    </p>
                  </div>
                  <div class="prize-card__count">
                    <span v-for="line in card.countLines" :key="`${card.id}-${line}`">
                      {{ line }}
                    </span>
                  </div>
                  <div class="prize-card__art">
                    <img
                      v-for="art in card.images"
                      :key="`${card.id}-${art.className}`"
                      :src="art.src"
                      :alt="art.alt"
                      :class="art.className"
                    />
                  </div>
                </article>
              </div>
            </section>

            <section class="brand-banner">
              <span class="brand-banner__eyebrow">А также</span>
              <h3 class="brand-banner__title">призы от брендов:</h3>
              <div class="brand-banner__grid">
                <div
                  v-for="(logo, index) in brandLogos"
                  :key="index"
                  class="brand-logo-card"
                >
                  <img
                    :src="logo"
                    :alt="`Логотип партнёра ${index + 1}`"
                    class="brand-logo-card__image"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </div>

          <nav class="tabbar">
            <button
              v-for="tab in navTabs"
              :key="tab.id"
              class="tabbar__item"
              :class="{ 'tabbar__item--active': tab.active }"
              type="button"
            >
              <span class="tabbar__icon-wrapper">
                <img :src="tab.icon" :alt="tab.label" />
                <span v-if="tab.badge" class="tabbar__badge">{{ tab.badge }}</span>
              </span>
              <span class="tabbar__label">{{ tab.label }}</span>
            </button>
          </nav>

          <div class="home-indicator"></div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const assetUrl = (file: string) =>
  new URL(`./assets/MobileBonusNov25/${file}`, import.meta.url).href;

type PrizeArt = {
  src: string;
  alt: string;
  className: string;
};

type PrizeCard = {
  id: string;
  title: string;
  helper?: string;
  countLines: string[];
  className: string;
  images: PrizeArt[];
};

type NavTab = {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
};

const heroImage = assetUrl('hero-main.png');

const heroContent = {
  label: 'год c METRO бонус',
  title: 'РАЗЫГРЫВАЕМ\n20 000 призов!',
  subtitle: 'Совершите покупки на сумму 250 000 ₽',
  description: 'и участвуйте в розыгрыше призов',
  deadline: 'до 21.12.2025 года',
};

const progressCard = {
  label: 'Ваш прогресс:',
  amount: '250 000₽',
  progress: 0.78,
};

const grandPrize = {
  badge: 'Главный приз',
  title: 'Сертификат\nна ужин',
  subtitle: 'в ресторане-театре Chef\'s Table',
  count: '40 мест',
  description:
    'Chef’s Table — это формат ужина на 20 персон, где кухня становится центром события. Гости располагаются у открытого стола рядом с шефом и его командой, наблюдая за приготовлением каждого блюда.',
  background: assetUrl('grand-prize-bg.png'),
};

const prizeCards: PrizeCard[] = [
  {
    id: 'suppliers',
    className: 'card--suppliers',
    title: 'Купон на покупку продуктов\nот поставщиков\nза 1 рубль',
    countLines: ['2 500', 'призов'],
    images: [
      {
        src: assetUrl('prize-suppliers.png'),
        alt: 'Продукты от поставщиков',
        className: 'art--suppliers',
      },
    ],
  },
  {
    id: 'bonus',
    className: 'card--bonus',
    title: '1 000 бонусных рублей\nна карту METRO',
    countLines: ['5 000', 'призов'],
    images: [
      {
        src: assetUrl('prize-bonus-1.png'),
        alt: 'Бонусная карта 1',
        className: 'art--bonus-left',
      },
      {
        src: assetUrl('prize-bonus-2.png'),
        alt: 'Бонусная карта 2',
        className: 'art--bonus-center',
      },
      {
        src: assetUrl('prize-bonus-3.png'),
        alt: 'Бонусная карта 3',
        className: 'art--bonus-right',
      },
    ],
  },
  {
    id: 'discount-suppliers',
    className: 'card--discount-suppliers',
    title: 'Купон на покупку со скидкой\nдо 50% от поставщиков',
    countLines: ['4 500', 'призов'],
    images: [
      {
        src: assetUrl('prize-discount-1.png'),
        alt: 'Ассорти продуктов',
        className: 'art--discount-platter',
      },
      {
        src: assetUrl('prize-discount-illustration.svg'),
        alt: 'Иконка скидки',
        className: 'art--discount-icon',
      },
    ],
  },
  {
    id: 'discount-metro',
    className: 'card--discount-metro',
    title: 'Купон METRO на скидку\nдо 20% на весь чек',
    countLines: ['7 000', 'призов'],
    images: [
      {
        src: assetUrl('prize-metro-1.png'),
        alt: 'Стейк лосося',
        className: 'art--metro-salmon',
      },
      {
        src: assetUrl('prize-metro-2.png'),
        alt: 'Деликатесное мясо',
        className: 'art--metro-meat',
      },
      {
        src: assetUrl('prize-metro-3.png'),
        alt: 'Брокколи',
        className: 'art--metro-broccoli',
      },
      {
        src: assetUrl('prize-metro-4.png'),
        alt: 'Ягоды',
        className: 'art--metro-berries',
      },
    ],
  },
  {
    id: 'berti',
    className: 'card--berti',
    title: 'Керамическая посуда от\nбренда BERTI за 1 рубль',
    countLines: ['1 100', 'призов'],
    images: [
      {
        src: assetUrl('prize-berti-1.png'),
        alt: 'Сотейник BERTI',
        className: 'art--berti-pot',
      },
      {
        src: assetUrl('prize-berti-2.png'),
        alt: 'Форма для рыбы',
        className: 'art--berti-fish',
      },
      {
        src: assetUrl('prize-berti-3.png'),
        alt: 'Керамическая миска',
        className: 'art--berti-bowl',
      },
    ],
  },
  {
    id: 'vacuum',
    className: 'card--vacuum',
    title: 'Пылесос вертикальный\nPolaris PVCS 0725',
    countLines: ['5', 'призов'],
    images: [
      {
        src: assetUrl('prize-vacuum.png'),
        alt: 'Пылесос Polaris',
        className: 'art--vacuum',
      },
    ],
  },
  {
    id: 'iron',
    className: 'card--iron',
    title: 'Утюг Polaris\nPIR 2883AK',
    countLines: ['5', 'призов'],
    images: [
      {
        src: assetUrl('prize-iron-main.png'),
        alt: 'Утюг Polaris',
        className: 'art--iron-main',
      },
      {
        src: assetUrl('prize-iron-detail.png'),
        alt: 'Подошва утюга',
        className: 'art--iron-detail',
      },
    ],
  },
  {
    id: 'rowenta',
    className: 'card--rowenta',
    title: 'Техника для красоты\nот Rowenta в ассортименте',
    countLines: ['100', 'призов'],
    images: [
      {
        src: assetUrl('prize-rowenta-1.png'),
        alt: 'Фен Rowenta',
        className: 'art--rowenta-left',
      },
      {
        src: assetUrl('prize-rowenta-2.png'),
        alt: 'Стайлер Rowenta',
        className: 'art--rowenta-right',
      },
    ],
  },
];

const brandLogos = [
  assetUrl('brands/row1_01.png'),
  assetUrl('brands/row2_01.png'),
  assetUrl('brands/row2_02.png'),
  assetUrl('brands/row2_03.png'),
  assetUrl('brands/row2_04.png'),
  assetUrl('brands/row2_05.png'),
  assetUrl('brands/row2_06.png'),
  assetUrl('brands/row3_01.png'),
];

const headerIcons = {
  chevron: assetUrl('icon-chevron.svg'),
  close: assetUrl('icon-close.svg'),
};

const statusIcons = {
  cellular: assetUrl('status-cellular.svg'),
  wifi: assetUrl('status-wifi.svg'),
  battery: assetUrl('status-battery.svg'),
};

const navTabs: NavTab[] = [
  { id: 'deals', label: 'Акции', icon: assetUrl('icon-deal.svg'), active: true },
  { id: 'catalog', label: 'Каталог', icon: assetUrl('icon-catalog.svg') },
  { id: 'cart', label: '3 165₽', icon: assetUrl('icon-cart.svg'), badge: '32' },
  { id: 'profile', label: 'Профиль', icon: assetUrl('icon-profile.svg') },
];

const chunkedPrizeCards = computed(() => {
  const result: PrizeCard[][] = [];
  for (let i = 0; i < prizeCards.length; i += 2) {
    result.push(prizeCards.slice(i, i + 2));
  }
  return result;
});

const formatMultiline = (value: string) => value.replace(/\n/g, '<br />');
</script>

<style scoped lang="scss">
.metro-app {
  background: radial-gradient(circle at top, rgba(63, 93, 255, 0.2), transparent 55%)
      fixed,
    #050916;
  min-height: 100vh;
  padding: 32px 0 48px;
  font-family: 'Lato', 'Roboto Condensed', system-ui, -apple-system, sans-serif;
}

.device-shell {
  width: 100%;
  display: flex;
  justify-content: center;
}

.device-shell__inner {
  position: relative;
  width: min(414px, calc(100% - 32px));
  min-height: 896px;
  border-radius: 40px;
  background: linear-gradient(180deg, #1c2347 0%, #0e132c 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 40px 120px rgba(3, 6, 20, 0.8),
    inset 0 0 40px rgba(71, 104, 255, 0.08);
  overflow: hidden;
}

.status-bar {
  position: absolute;
  inset: 0 0 auto;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.status-bar__icons {
  display: flex;
  gap: 10px;

  img {
    width: 26px;
    height: auto;
  }
}

.screen-header {
  position: absolute;
  top: 48px;
  left: 0;
  right: 0;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color: #fff;
  font-size: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.screen-header__title {
  font-weight: 700;
  text-align: center;
}

.icon-button {
  width: 38px;
  height: 38px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  img {
    width: 20px;
    height: 20px;
  }
}

.scroll-area {
  padding: 116px 16px 220px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero__banner {
  position: relative;
  min-height: 400px;
  border-radius: 18px;
  padding: 40px 24px 48px;
  overflow: hidden;
  background: #041837;
  color: #fff;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(210deg, rgba(4, 24, 55, 0.2), #041837 70%);
  }
}

.hero__image {
  position: absolute;
  top: -80px;
  left: -120px;
  width: 180%;
  max-width: none;
  object-fit: cover;
  opacity: 0.8;
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.6));
  pointer-events: none;
}

.chip {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 120px;
  padding: 10px 18px;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &--blue {
    background: #1d51ae;
  }

  &--yellow {
    background: #ffe500;
    color: #041837;
  }
}

.hero__title,
.hero__subtitle,
.hero__description {
  position: relative;
  z-index: 1;
}

.hero__title {
  margin: 18px 0 12px;
  font-size: 2.8rem;
  line-height: 0.95;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.hero__subtitle {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.hero__description {
  margin-bottom: 18px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.progress-card {
  border-radius: 18px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-card__header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
}

.progress-card__amount {
  color: #ffe500;
  font-size: 1.2rem;
}

.progress-card__track {
  position: relative;
  height: 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}

.progress-card__fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #ffe500 0%, #ff6a13 100%);
}

.progress-card__dot {
  position: absolute;
  top: 50%;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 4px solid #0f1f3f;
  background: #1a3c7a;
  transform: translateY(-50%);

  &--start {
    left: -6px;
  }

  &--end {
    right: -6px;
    background: #ffe500;
  }
}

.grand-prize {
  position: relative;
  border-radius: 18px;
  padding: 32px 24px 40px;
  background: #003063;
  overflow: hidden;
  color: #fff;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.grand-prize__background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  filter: saturate(1.1);
}

.grand-prize__title,
.grand-prize__subtitle,
.grand-prize__count,
.grand-prize__description {
  position: relative;
  z-index: 1;
}

.grand-prize__title {
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
}

.grand-prize__subtitle {
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
}

.grand-prize__count {
  font-size: 1.6rem;
  font-weight: 900;
  color: #ffe500;
}

.grand-prize__description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
}

.prize-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.prize-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.prize-card {
  position: relative;
  border-radius: 18px;
  padding: 18px 14px 26px;
  background: #003063;
  color: #fff;
  min-height: 220px;
  overflow: hidden;
}

.prize-card__content {
  position: relative;
  z-index: 2;
}

.prize-card__title {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.prize-card__helper {
  margin-top: 8px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.72);
}

.prize-card__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08), transparent 70%);
}

.prize-card__count {
  position: absolute;
  bottom: 16px;
  right: 12px;
  width: 82px;
  height: 82px;
  border-radius: 100%;
  background: #ffe500;
  color: #00244f;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  z-index: 3;
  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 0 3px rgba(255, 255, 255, 0.4);

  span:first-child {
    font-size: 1.2rem;
  }

  span:last-child {
    font-size: 0.65rem;
  }
}

.prize-card__art img {
  position: absolute;
  pointer-events: none;
  filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.45));
  z-index: 1;
}

.card--suppliers::before,
.card--bonus::before,
.card--discount-suppliers::before,
.card--discount-metro::before,
.card--berti::before,
.card--vacuum::before,
.card--iron::before,
.card--rowenta::before {
  content: '';
  position: absolute;
  width: 180px;
  height: 140px;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.6;
  z-index: 0;
}

.card--suppliers::before {
  background: rgba(45, 135, 230, 0.6);
  top: 60px;
  left: 20px;
}

.card--bonus::before {
  background: rgba(255, 237, 0, 0.35);
  top: 50px;
  left: 40px;
}

.card--discount-suppliers::before {
  background: rgba(255, 15, 112, 0.25);
  top: 40px;
  left: 10px;
}

.card--discount-metro::before {
  background: rgba(0, 168, 255, 0.28);
  top: 60px;
  right: 20px;
}

.card--berti::before {
  background: rgba(255, 255, 255, 0.25);
  bottom: 20px;
  left: 40px;
}

.card--vacuum::before {
  background: rgba(88, 144, 255, 0.25);
  top: 30px;
  left: 60px;
}

.card--iron::before {
  background: rgba(255, 102, 0, 0.32);
  top: 30px;
  left: 40px;
}

.card--rowenta::before {
  background: rgba(255, 107, 158, 0.28);
  top: 40px;
  left: 50px;
}

.art--suppliers {
  width: 160px;
  left: -6px;
  top: 78px;
  transform: rotate(-4deg);
}

.art--bonus-left {
  width: 98px;
  left: 0;
  top: 70px;
  transform: rotate(-10deg);
}

.art--bonus-center {
  width: 110px;
  left: 30px;
  top: 70px;
}

.art--bonus-right {
  width: 106px;
  right: -6px;
  top: 70px;
  transform: rotate(12deg);
}

.art--discount-platter {
  width: 160px;
  left: -4px;
  top: 90px;
}

.art--discount-icon {
  width: 120px;
  left: -10px;
  bottom: -8px;
}

.art--metro-salmon {
  width: 110px;
  left: 34px;
  top: 64px;
}

.art--metro-meat {
  width: 120px;
  left: 10px;
  top: 112px;
}

.art--metro-broccoli {
  width: 84px;
  right: 12px;
  top: 96px;
}

.art--metro-berries {
  width: 140px;
  left: 52px;
  top: 126px;
}

.art--berti-pot {
  width: 150px;
  left: 10px;
  top: 105px;
}

.art--berti-fish {
  width: 160px;
  left: -6px;
  top: 150px;
}

.art--berti-bowl {
  width: 110px;
  left: 10px;
  bottom: 26px;
}

.art--vacuum {
  width: 210px;
  left: -20px;
  top: -20px;
}

.art--iron-main {
  width: 170px;
  left: -30px;
  top: 70px;
}

.art--iron-detail {
  width: 150px;
  left: -20px;
  top: 60px;
}

.art--rowenta-left {
  width: 120px;
  left: 10px;
  top: 90px;
}

.art--rowenta-right {
  width: 150px;
  right: -10px;
  top: 90px;
}

.brand-banner {
  border-radius: 18px;
  padding: 28px 20px 32px;
  background: #003063;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-banner__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.7);
}

.brand-banner__title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 900;
  text-transform: uppercase;
}

.brand-banner__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 12px;
}

.brand-logo-card {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 66px;
}

.brand-logo-card__image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.tabbar {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 62px;
  border-radius: 32px;
  background: #1a3c7a;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  padding: 12px 12px 24px;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.tabbar__item {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.72);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  padding: 4px 0;
  border-radius: 20px;
}

.tabbar__item--active {
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
}

.tabbar__icon-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }
}

.tabbar__badge {
  position: absolute;
  top: 4px;
  right: 4px;
  min-width: 24px;
  padding: 2px 6px;
  border-radius: 999px;
  background: #ffed00;
  color: #1a2a44;
  font-size: 0.65rem;
  font-weight: 800;
}

.home-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.4);
}

@media (max-width: 430px) {
  .device-shell__inner {
    width: 100%;
    border-radius: 0;
  }

  .tabbar {
    left: 12px;
    right: 12px;
  }
}
</style>