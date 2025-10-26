<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import Swiper from 'swiper'
import { Navigation, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'

const swiperRef = ref<Swiper | null>(null)

const sliderData = [
  {
    value: '01',
    index: 1,
    alt: 'Slide 1',
  },
  {
    value: '01',
    index: 2,
    alt: 'Slide 2',
  },
  {
    value: '01',
    index: 3,
    alt: 'Slide 3',
  },
  {
    value: '01',
    index: 4,
    alt: 'Slide 4',
  },
]

onMounted(async () => {
  await nextTick()

  const el = document.querySelector('.hero__slider')

  if (!el) {
    return
  }

  swiperRef.value = new Swiper(el as HTMLElement, {
    modules: [Navigation, Mousewheel],
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    speed: 800,
    spaceBetween: 0,
    centeredSlides: true,
    loop: false,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.hero__arrow--right',
      prevEl: '.hero__arrow--left',
    },
    on: {
      beforeSlideChangeStart: () => {
        console.log('Slide is about to change')
      },
    },
  })
})
</script>

<template>
  <section class="hero">
    <!-- CONTAINER -->
    <div class="hero__container">
      <!-- CONTENT -->
      <div class="hero__content">
        <h1 class="hero__title">A better world for pets</h1>
        <a href="#" class="hero__button button button--border">
          <span>Explore</span>
        </a>
      </div>

      <!-- SLIDER -->
      <ClientOnly>
        <div class="hero__slider swiper">
          <div class="hero__wrapper swiper-wrapper">
            <!-- Slide 1 -->
            <div
              v-for="slider in sliderData"
              :key="slider.index"
              class="hero__slide slide-hero swiper-slide"
            >
              <div class="slide-hero__body">
                <img
                  :src="`/hero/pets/${slider.value}.jpeg`"
                  class="slide-hero__image"
                  :alt="slider.alt"
                />
                />
              </div>
            </div>
          </div>

          <!-- CONTROLS -->
          <div class="hero__controll">
            <button
              type="button"
              class="hero__arrow hero__arrow--left"
            ></button>
            <button
              type="button"
              class="hero__arrow hero__arrow--right"
            ></button>
          </div>
        </div>
      </ClientOnly>
    </div>

    <!-- BACKGROUND -->
    <img src="/hero/bg.jpg" alt="Hero Background" class="hero__bg" />
  </section>
</template>
