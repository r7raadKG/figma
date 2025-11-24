<template>
  <v-app>
    <v-main>
      <section class="hero" :style="sectionBackground('/images/hero-bg.svg')">
        <v-container class="py-10">
          <v-row class="align-center">
            <v-col cols="12" class="text-center">
              <div class="d-inline-flex align-center px-4 py-2 gradient-chip rounded-pill mb-4 text-uppercase text-white">
                <v-icon icon="mdi-star-four-points" class="me-2" />Год с МЕТРО Бонус
              </div>
              <h1 class="text-h3 text-sm-h2 font-weight-black mb-2">
                РАЗЫГРЫВАЕМ 20 000 ПРИЗОВ
              </h1>
              <p class="text-subtitle-1 text-md-h6 font-weight-medium mb-4">
                Получайте мгновенные вознаграждения от партнёров и участвуйте в розыгрыше купонов 
                до 10 декабря 2024 года.
              </p>
              <v-chip color="primary" class="text-button px-6 py-4" size="large" variant="elevated">
                Участвуйте каждый день и увеличивайте шанс на приз
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="py-10" :style="sectionBackground('/images/ice-bg.svg')">
        <v-container>
          <div class="card-surface px-6 py-6">
            <div class="d-flex align-center justify-space-between flex-wrap mb-6">
              <div>
                <div class="text-subtitle-1 font-weight-bold text-primary">ДО 10 ДЕКАБРЯ</div>
                <h2 class="text-h4 text-sm-h3 section-title">СОВЕРШАЙТЕ ПОЕЗДКИ НА СУММУ 280 000 ₽</h2>
              </div>
              <v-btn color="primary" class="text-white" variant="flat" prepend-icon="mdi-ticket-confirmation-outline">
                Получать купон ежедневно
              </v-btn>
            </div>
            <v-row dense>
              <v-col cols="12" md="4" v-for="(step, index) in steps" :key="step.title">
                <v-card class="h-100" variant="flat" color="rgba(255,255,255,0.04)">
                  <v-card-text class="text-center py-6">
                    <div class="text-h5 font-weight-black text-primary">0{{ index + 1 }}</div>
                    <v-img :src="step.image" height="140" contain class="my-2" />
                    <h3 class="text-subtitle-1 section-subtitle mb-2">{{ step.title }}</h3>
                    <p class="text-body-2">{{ step.description }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </section>

      <section class="py-10" :style="sectionBackground('/images/certificate-bg.svg')">
        <v-container>
          <v-row class="align-center" justify="center">
            <v-col cols="12" lg="10">
              <div class="card-surface px-6 py-8">
                <v-row class="align-center" dense>
                  <v-col cols="12" md="6">
                    <v-chip class="mb-4" color="primary" text-color="#0C1E3A" size="large" variant="flat">
                      Главный приз
                    </v-chip>
                    <h2 class="text-h4 text-sm-h3 section-title mb-4">Сертификат на любые расходы до 1 650 000 ₽*</h2>
                    <ul class="text-body-1">
                      <li v-for="item in certificatePoints" :key="item" class="mb-2">{{ item }}</li>
                    </ul>
                    <p class="text-body-2 text-medium-emphasis mt-4">
                      *Деньги переводятся на карту МИР. Мы перечисляем все налоги.
                    </p>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-sheet class="d-flex flex-column justify-center align-center" color="rgba(255,255,255,0.02)" rounded="lg" height="320">
                      <v-icon icon="mdi-certificate" size="96" color="primary" class="mb-4" />
                      <p class="text-subtitle-1 text-center px-6">
                        5 сертификатов по 1 650 000 ₽ будут разыграны среди участников, завершивших все шаги.
                      </p>
                    </v-sheet>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="py-10" :style="sectionBackground('/images/galaxy-bg.svg')">
        <v-container>
          <div class="card-surface px-6 py-8 mb-6">
            <v-chip class="mb-4" color="secondary" variant="flat" prepend-icon="mdi-snowflake">
              От 20 поездок
            </v-chip>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <div>
                <p class="text-subtitle-1 font-weight-bold mb-2">ОХЛАДИТЕСЬ ПЕРЕД ВЗЛЁТОМ</p>
                <h3 class="text-h5 text-sm-h4 section-title">АРОМАТНЫЙ ПОЛЕЗНЫЙ ЧАЙ ИЛИ ГОРЯЧИЙ ШОКОЛАД ПО ПРОМОКОДУ</h3>
              </div>
              <v-btn variant="outlined" color="white" class="outline-pill mt-4 mt-sm-0">
                Получить промокод
                <v-icon icon="mdi-arrow-right" end />
              </v-btn>
            </div>
          </div>

          <div class="card-surface px-6 py-8 mb-6">
            <v-chip class="mb-4" color="secondary" variant="flat" prepend-icon="mdi-bus-clock">
              До 10 декабря
            </v-chip>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <div>
                <p class="text-subtitle-1 font-weight-bold mb-2">ПОЕЗЖАЙТЕ В НОВЫЕ ГАЛАКТИКИ</p>
                <h3 class="text-h5 text-sm-h4 section-title">ПОЛУЧАЙТЕ КУПОН ПОСЛЕ КАЖДОЙ ПОЕЗДКИ ПЕРЕД ПУТЕШЕСТВИЕМ</h3>
                <p class="text-body-2 mt-3">Проследуйте по купону в удобное место и взлетайте в космос!</p>
              </div>
              <v-btn color="primary" variant="flat" class="mt-4 mt-sm-0" prepend-icon="mdi-ticket-percent">
                Смотреть купоны
              </v-btn>
            </div>
          </div>

          <div class="card-surface px-6 py-8">
            <v-chip class="mb-4" color="secondary" variant="flat" prepend-icon="mdi-bank">
              До 10 декабря
            </v-chip>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <div>
                <p class="text-subtitle-1 font-weight-bold mb-2">ПОЛУЧАЙТЕ БОНУСЫ В БАНКЕ ПЕРЕД ВЫЛЕТОМ</p>
                <h3 class="text-h5 text-sm-h4 section-title">ПОПОЛНИТЕ СЧЁТ И ПОЛУЧИТЕ ВЫГОДНЫЕ БОНУСЫ</h3>
              </div>
              <v-btn variant="outlined" color="white" class="outline-pill mt-4 mt-sm-0">
                Получить купон
                <v-icon icon="mdi-arrow-right" end />
              </v-btn>
            </div>
          </div>
        </v-container>
      </section>

      <section class="py-10" :style="sectionBackground('/images/snow-bg.svg')">
        <v-container>
          <div class="d-flex align-center justify-space-between flex-wrap mb-6">
            <h2 class="text-h4 text-sm-h3 section-title">Призы от брендов:</h2>
            <p class="text-body-1 text-medium-emphasis">Получайте подарки каждый день</p>
          </div>
          <v-row dense>
            <v-col cols="6" sm="4" md="3" lg="2" v-for="logo in logos" :key="logo.src" class="mb-4">
              <div class="logo-tile">
                <v-img :src="logo.src" :alt="logo.alt" width="100%" contain />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Совершайте поездки на сумму 280 000 ₽',
    description: 'В поездки суммируются все ваши перемещения по городу.',
    image: '/images/hero-bg.svg',
  },
  {
    title: 'Участвуйте в розыгрыше призов',
    description: 'Получайте купон за каждые 4 поездки и увеличивайте шанс на победу.',
    image: '/images/galaxy-bg.svg',
  },
  {
    title: 'Получайте призы',
    description: 'Мы разыгрываем мгновенные призы и сертификаты до 1 650 000 ₽.',
    image: '/images/snow-bg.svg',
  },
];

const certificatePoints = [
  '5 сертификатов по 1 650 000 ₽ на любые нужды',
  'Оплачиваем НДФЛ за победителя',
  'Сертификат переведём на банковскую карту',
  'Выберете траты: путешествие, обучение, ремонт или подарки',
  'Для участия завершите все шаги до 10 декабря',
];

const logos = [
  { src: '/images/logos/yandex-plus.svg', alt: 'Яндекс Плюс' },
  { src: '/images/logos/diksi.svg', alt: 'Дикси' },
  { src: '/images/logos/burger-king.svg', alt: 'Burger King' },
  { src: '/images/logos/yalta-craft.svg', alt: 'Yalta Craft' },
  { src: '/images/logos/tele2.svg', alt: 'Tele2' },
  { src: '/images/logos/vkusno.svg', alt: 'Вкусно и точка' },
  { src: '/images/logos/maria.svg', alt: 'Мария' },
  { src: '/images/logos/kfc.svg', alt: 'KFC' },
  { src: '/images/logos/perekrestok.svg', alt: 'Перекрёсток' },
  { src: '/images/logos/cheesecake.svg', alt: 'Чизкейк' },
  { src: '/images/logos/shokoladnica.svg', alt: 'Шоколадница' },
  { src: '/images/logos/vkusvill.svg', alt: 'ВкусВилл' },
  { src: '/images/logos/stolovaya.svg', alt: 'Столовая Ильича' },
  { src: '/images/logos/coffeemachine.svg', alt: 'CoffeeMachine' },
  { src: '/images/logos/coffeemachine-dark.svg', alt: 'CoffeeMachine Black' },
  { src: '/images/logos/shashlykoff.svg', alt: 'Шашлыкофф' },
  { src: '/images/logos/samari.svg', alt: 'Самари' },
];

const sectionBackground = (image: string) => ({
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});
</script>
