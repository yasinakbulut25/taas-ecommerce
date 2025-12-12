<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import PersonalCareImage from "~/assets/images/categories/personal-care.jpg";
import SkinCareImage from "~/assets/images/categories/skin-care.jpg";
import MakeUpImage from "~/assets/images/categories/make-up.jpg";
import MotherAndBabyImage from "~/assets/images/categories/mother-and-baby.jpg";

const categories = [
  {
    id: 1,
    title: "Personal Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    image: PersonalCareImage,
    link: "#",
  },
  {
    id: 2,
    title: "Skin Care",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    image: SkinCareImage,
    link: "#",
  },
  {
    id: 3,
    title: "Make - Up",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    image: MakeUpImage,
    link: "#",
  },
  {
    id: 4,
    title: "Mother & Baby",
    description: "Lorem ipsum dolor sit amet consectetu elit aliquam",
    image: MotherAndBabyImage,
    link: "#",
  },
];
</script>

<template>
  <section class="categories-section">
    <div class="container categories-container">
      <SectionTitle text="Featured categories" />

      <div class="category-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
          :style="{ backgroundImage: `url(${category.image})` }"
        >
          <div class="content-box">
            <h3 class="category-title">{{ category.title }}</h3>
            <p class="category-desc">{{ category.description }}</p>
            <NuxtLink :to="category.link" class="category-link">
              BROWSE
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-section {
  padding: 2.5rem 0;
}

.category-grid {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.category-card {
  position: relative;
  height: 280px;
  width: 360px;
  padding: 3.75rem 4rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.content-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #ffffffe5;
  transition: background-color 0.3s ease;
}

.category-card:hover .content-box {
  background-color: #fff;
}

.category-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 700;
}

.category-desc {
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 300;
  line-height: 1.75;
}

.category-link {
  background-color: var(--color-primary);
  width: max-content;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.category-link:hover {
  background-color: var(--color-primary-dark);
}
</style>
