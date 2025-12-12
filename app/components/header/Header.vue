<template>
  <header class="header-wrapper">
    <HeaderTop />

    <div class="container header-main">
      <NuxtLink to="/" class="logo-wrapper">
        <img class="logo-img" src="~/assets/images/logo.png" alt="Watsons" />
      </NuxtLink>

      <div class="desktop-search">
        <HeaderSearch />
      </div>

      <div class="header-actions">
        <button class="action-btn user-btn">
          <span class="user-info">
            <span class="user-greeting">Hello,</span> Clara Clara
          </span>
          <img
            class="profile-img"
            src="~/assets/images/profile.jpg"
            alt="Clara Clara"
          />
          <ChevronArrowIcon class="chevron-icon" />
        </button>

        <span class="separate"></span>

        <NuxtLink to="/checkout" class="action-btn cart-btn">
          <BasketIcon class="cart-icon" />
          <span class="cart-badge">2</span>
        </NuxtLink>
      </div>
    </div>

    <div class="container mobile-search">
      <HeaderSearch />
    </div>

    <HeaderCategories />
  </header>
</template>

<script setup>
import ChevronArrowIcon from "~/assets/icons/ChevronArrowIcon.svg";
import BasketIcon from "~/assets/icons/BasketIcon.svg";
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background: #fff;
}

.header-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  gap: 1rem;
}

.logo-img {
  height: 1.75rem;
  width: auto;
  object-fit: contain;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.action-btn {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.user-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  min-width: max-content;
}

.user-info .user-greeting {
  font-weight: 400;
  color: var(--text-light);
}

.profile-img {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  object-fit: cover;
}

.separate {
  display: flex;
  width: 1px;
  height: 1.5rem;
  background: #ececec;
}

.cart-btn {
  position: relative;
  display: flex;
}

.cart-badge {
  position: absolute;
  top: -0.5rem;
  right: -0.25px;
  background-color: #fa4c44;
  color: #fff;
  font-size: 0.75rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chevron-icon {
  width: 14px;
  height: 14px;
}

.cart-icon {
  width: 23px;
  height: 20px;
}

.desktop-search {
  width: 100%;
  display: flex;
  justify-content: end;
}

.mobile-search {
  display: none;
}

@media (max-width: 992px) {
  .logo-img {
    height: 1.5rem;
  }

  .user-info {
    display: none;
  }

  .header-actions {
    gap: 1rem;
  }
}

@media (max-width: 560px) {
  .desktop-search {
    display: none;
  }

  .mobile-search {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
