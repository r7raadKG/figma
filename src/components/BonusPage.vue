<template>
  <v-container class="page" fluid>
    <section class="hero" :style="heroStyle">
      <div class="hero__glass">
        <div class="hero__topline">
          <span class="pill">ГОД С METRO БОНУС</span>
          <div class="dates">до 23 марта 2026</div>
        </div>
        <h1 class="hero__headline">20 000<br />ПРИЗОВ</h1>
        <p class="hero__text">Каждые покупки по карте METRO БОНУС приближают к победе.</p>
        <div class="hero__cta">
          <v-btn class="btn-primary" color="#ffde59" rounded="lg" size="large">Участвовать</v-btn>
          <span class="helper">в мобильном приложении</span>
        </div>
      </div>

      <div class="hero__ticket">
        <div class="ticket__badge">ГЛАВНЫЙ ПРИЗ</div>
        <div class="ticket__sum">180 000 ₽</div>
        <div class="ticket__note">2 сертификата на покупки в METRO ежемесячно</div>
        <div class="ticket__rule">За каждые 20 000 ₽ в чеке выдаем купон</div>
      </div>
    </section>

    <section class="periods">
      <div class="periods__header">
        <h2>ПЕРИОДЫ РОЗЫГРЫША</h2>
        <p>Купоны копятся с 16 числа прошлого месяца до 15 числа текущего.</p>
      </div>
      <div class="periods__chips">
        <div v-for="period in periods" :key="period.label" class="period-chip">
          <div class="period-chip__title">{{ period.label }}</div>
          <div class="period-chip__dates">{{ period.range }}</div>
        </div>
      </div>
    </section>

    <section class="rules">
      <div class="rules__card">
        <div class="rules__badge">КАК ПОЛУЧИТЬ КУПОН</div>
        <ul class="rules__list">
          <li>Оплачивайте покупки по карте METRO БОНУС.</li>
          <li>Получайте купон в приложении за каждые 20 000 ₽ в чеке.</li>
          <li>Чем больше купонов, тем выше шанс выиграть призы.</li>
        </ul>
        <div class="rules__footer">Победители уведомляются в мобильном приложении METRO БОНУС.</div>
      </div>
    </section>

    <section class="products">
      <h3>ДОПОЛНИТЕЛЬНЫЕ КУПОНЫ ЗА ПОКУПКИ</h3>
      <div class="product-grid">
        <div v-for="product in products" :key="product.title" class="product-card">
          <div class="product-card__title">{{ product.title }}</div>
          <div class="product-card__brands">{{ product.brands }}</div>
          <p class="product-card__text" v-html="product.body" />
        </div>
      </div>
    </section>

    <section class="partners">
      <div class="partners__header">
        <div class="pill pill--light">ПРИЗЫ ОТ БРЕНДОВ</div>
        <p>Соберите купоны за покупки партнерских товаров.</p>
      </div>
      <div class="partners__grid">
        <v-img
          v-for="logo in brandLogos"
          :key="logo.alt"
          :src="logo.src"
          :alt="logo.alt"
          class="partners__logo"
          eager
        />
      </div>
    </section>
  </v-container>
</template>

<script setup lang="ts">
import heroBackground from '../assets/background-hero.svg';
import bounty from '../assets/logos/bounty.svg';
import lays from '../assets/logos/lays.svg';
import metro from '../assets/logos/metro.svg';
import oreo from '../assets/logos/oreo.svg';
import prime from '../assets/logos/prime.svg';
import sakmara from '../assets/logos/sakmara.svg';
import snickers from '../assets/logos/snickers.svg';
import twix from '../assets/logos/twix.svg';

const heroStyle = `background-image: radial-gradient(circle at 10% 10%, rgba(255, 222, 89, 0.18), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.12), transparent 40%), url(${heroBackground});`;

const periods = [
  { label: 'ДЕКАБРЬ–ЯНВАРЬ', range: '16.12.24 – 15.01.25' },
  { label: 'ЯНВАРЬ–ФЕВРАЛЬ', range: '16.01.25 – 15.02.25' },
  { label: 'ФЕВРАЛЬ–МАРТ', range: '16.02.25 – 15.03.25' },
  { label: 'МАРТ–АПРЕЛЬ', range: '16.03.25 – 15.04.25' },
];

const products = [
  {
    title: 'MARS WRIGLEY',
    brands: 'Twix · Snickers · Bounty · Mars',
    body: 'Покупайте любые товары брендов MARS WRIGLEY — за каждые 20 штук в чеке получаете один купон.',
  },
  {
    title: "LAY'S",
    brands: 'Серии MAXX и GUZO',
    body: 'Любые позиции Lay’s серий MAXX или GUZO — купон за каждую покупку от 1 единицы.',
  },
  {
    title: 'METRO CHEF',
    brands: 'Рафинад',
    body: 'Добавьте любой рафинад METRO CHEF в чек и получите дополнительный купон.',
  },
  {
    title: 'PRIME',
    brands: 'Маринованные грибочки',
    body: 'Купите от 5 единиц PRIME и получите дополнительный купон в приложении.',
  },
];

const brandLogos = [
  { src: lays, alt: "Lay's" },
  { src: twix, alt: 'Twix' },
  { src: bounty, alt: 'Bounty' },
  { src: snickers, alt: 'Snickers' },
  { src: oreo, alt: 'Oreo' },
  { src: prime, alt: 'Prime' },
  { src: metro, alt: 'Metro' },
  { src: sakmara, alt: 'Сакмара' },
];
</script>

<style scoped>
.page {
  padding: 0;
  background-color: #0c1833;
  color: #f7f9ff;
  max-width: 480px;
  margin: 0 auto;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}

.hero {
  position: relative;
  padding: 28px 20px 180px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 0 0 32px 32px;
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.45);
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 80% at 50% 0%, rgba(12, 24, 51, 0) 0%, rgba(12, 24, 51, 0.8) 70%);
}

.hero__glass {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
}

.hero__topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #e7edff;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(255, 222, 89, 0.16);
  color: #ffde59;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 12px;
}

.pill--light {
  background: rgba(255, 255, 255, 0.08);
  color: #f7f9ff;
}

.dates {
  font-size: 13px;
  color: #c7dcff;
}

.hero__headline {
  margin: 0;
  font-size: 36px;
  line-height: 1.05;
  text-transform: uppercase;
  color: #ffde59;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.55);
}

.hero__text {
  margin: 0;
  color: #e8f1ff;
  line-height: 1.5;
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-primary {
  color: #1a2350;
  font-weight: 800;
  text-transform: none;
  letter-spacing: 0.01em;
  box-shadow: 0 10px 25px rgba(255, 222, 89, 0.25);
}

.helper {
  font-size: 13px;
  color: #c7dcff;
}

.hero__ticket {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: -70px;
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(255, 222, 89, 0.96), rgba(255, 214, 82, 0.92));
  color: #0f1a3f;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: grid;
  gap: 6px;
  border: 2px dashed rgba(15, 26, 63, 0.25);
}

.ticket__badge {
  font-weight: 800;
  letter-spacing: 0.08em;
  font-size: 12px;
}

.ticket__sum {
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
}

.ticket__note {
  font-weight: 700;
}

.ticket__rule {
  color: #2f3253;
  font-size: 14px;
}

.periods {
  padding: 120px 18px 10px;
  background: #0f1e42;
}

.periods__header h2 {
  margin: 0 0 6px;
  color: #ffde59;
  letter-spacing: 0.08em;
}

.periods__header p {
  margin: 0 0 14px;
  color: #d6e5ff;
  line-height: 1.4;
}

.periods__chips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}

.period-chip {
  padding: 14px 12px;
  background: linear-gradient(145deg, #142750 0%, #1a325f 100%);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.period-chip__title {
  font-weight: 800;
  color: #ffde59;
  font-size: 13px;
  letter-spacing: 0.02em;
}

.period-chip__dates {
  color: #d6e5ff;
  margin-top: 4px;
}

.rules {
  padding: 16px 18px;
}

.rules__card {
  background: radial-gradient(120% 120% at 20% 20%, rgba(255, 222, 89, 0.08), rgba(18, 35, 77, 0.92));
  border-radius: 24px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
}

.rules__badge {
  display: inline-flex;
  padding: 8px 12px;
  background: rgba(255, 222, 89, 0.2);
  color: #ffde59;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 12px;
}

.rules__list {
  margin: 14px 0 12px;
  padding-left: 18px;
  line-height: 1.5;
  color: #e8f2ff;
}

.rules__footer {
  color: #b7d2ff;
  font-size: 14px;
}

.products {
  padding: 10px 18px 6px;
  display: grid;
  gap: 12px;
}

.products h3 {
  margin: 0;
  color: #ffde59;
  letter-spacing: 0.04em;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 12px;
}

.product-card {
  background: linear-gradient(120deg, #182a57 0%, #12305c 100%);
  border-radius: 18px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.product-card__title {
  font-weight: 800;
  color: #ffde59;
  font-size: 15px;
}

.product-card__brands {
  color: #cddfff;
  font-size: 12px;
  margin: 4px 0 10px;
}

.product-card__text {
  margin: 0;
  color: #e8f2ff;
  line-height: 1.5;
}

.partners {
  padding: 10px 18px 36px;
  display: grid;
  gap: 12px;
}

.partners__header p {
  margin: 6px 0 0;
  color: #d6e5ff;
}

.partners__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.partners__logo {
  background: #11264b;
  border-radius: 14px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (min-width: 520px) {
  .page {
    max-width: 520px;
  }

  .hero__headline {
    font-size: 44px;
  }

  .hero__ticket {
    left: 40px;
    right: 40px;
  }
}
</style>
