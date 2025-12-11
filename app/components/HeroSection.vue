<script setup>
import { ref } from "vue";
import ArrowIcon from "~/assets/icons/ArrowIcon.svg";
import ProductImage from "~/assets/images/hero-product.png";

const currentSlide = ref(0);

const slides = [
  {
    category: "NATURALS BY WATSONS",
    title: "The new 2021 collection",
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: "SHOP NOW",
    image: ProductImage,
  },
  {
    category: "NATURALS BY WATSONS 2",
    title: "The new 2021 collection 2",
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: "SHOP NOW",
    image: ProductImage,
  },
  {
    category: "NATURALS BY WATSONS 3",
    title: "The new 2021 collection 3",
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: "SHOP NOW",
    image: ProductImage,
  },
];

const nextSlide = () => (currentSlide.value += 1);
const prevSlide = () => (currentSlide.value -= 1);
const goToSlide = (index) => (currentSlide.value = index);
</script>

<template>
  <section class="hero-container">
    <button
      class="nav-arrow left"
      @click="prevSlide"
      aria-label="Previous Slide"
      :disabled="currentSlide === 0"
    >
      <ArrowIcon />
    </button>

    <div class="container content-wrapper">
      <div :key="currentSlide" class="slide">
        <div class="text-content">
          <h3 class="subtitle">{{ slides[currentSlide].category }}</h3>
          <h2 class="font-secondary title">{{ slides[currentSlide].title }}</h2>
          <p class="description">{{ slides[currentSlide].description }}</p>

          <button class="cta-button">
            {{ slides[currentSlide].buttonText }}
          </button>

          <div class="dots">
            <span
              v-for="(s, i) in slides"
              :key="i"
              class="dot"
              :class="{ active: i === currentSlide }"
              @click="goToSlide(i)"
            ></span>
          </div>
        </div>

        <div class="visual-content">
          <img
            :src="slides[currentSlide].image"
            :alt="slides[currentSlide].title"
            class="product-image"
          />
        </div>
      </div>
    </div>

    <button
      class="nav-arrow right"
      @click="nextSlide"
      aria-label="Next Slide"
      :disabled="currentSlide === slides.length - 1"
    >
      <ArrowIcon />
    </button>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  min-height: 400px;
  background: linear-gradient(0deg, #f2f0ff, #f2f0ff),
    linear-gradient(
      87.81deg,
      #f2f0ff 35.04%,
      rgba(255, 255, 255, 0.67) 53.63%,
      rgba(252, 252, 255, 0.96) 64.78%,
      #f2f0ff 90.91%
    );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
}

.content-wrapper .slide {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav-arrow {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.nav-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-arrow.left {
  left: 1.25rem;
}
.nav-arrow.right {
  right: 1.25rem;
  transform: rotate(180deg);
}

.nav-arrow svg {
  fill: #bdc3c7;
  width: 1rem;
  height: 2rem;
}

.text-content {
  flex: 1;
  max-width: 500px;
}

.subtitle {
  font-size: 14px;
  font-weight: 700;
  color: #8493a8;
  text-transform: uppercase;
}

.title {
  font-size: 34px;
  color: var(--text-primary);
  font-weight: 700;
  margin-bottom: 1rem;
}

.description {
  font-size: 14px;
  color: #485363;
  font-weight: 300;
  margin-bottom: 1rem;
}

.cta-button {
  background-color: #ff27ad;
  color: #fff;
  border: none;
  padding: 1rem;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s, transform 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.dots {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: #8493a866;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #505357;
  width: 8px;
  height: 8px;
}

.visual-content {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.product-image {
  position: relative;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .hero-container {
    padding: 2rem 0;
  }

  .content-wrapper .slide {
    flex-direction: column-reverse;
    text-align: center;
  }

  .visual-content {
    height: 300px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dots {
    justify-content: center;
  }

  .nav-arrow {
    display: none;
  }
}
</style>
