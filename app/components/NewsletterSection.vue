<template>
  <section class="newsletter-container">
    <div class="container newsletter-wrapper">
      <div class="text-content">
        <h2 class="title">Sign up to our newsletter</h2>
        <p class="subtitle">Be the first to hear about the latest offers.</p>
      </div>

      <form class="form-content">
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          class="email-input"
          required
        />
        <button type="submit" class="subscribe-btn">SUBSCRIBE</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.newsletter-container {
  width: 100%;
  background-color: #f2f0ff;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;
}

.newsletter-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
}

.text-content {
  flex: 1;
}

.title {
  color: var(--text-primary);
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #2a2a4899;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

.form-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.email-input {
  flex: 1;
  max-width: 412px;
  height: 3rem;
  padding: 0.75rem 1rem;
  border: 1px solid #ececec;
  border-radius: 0.25rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.email-input:focus {
  border-color: var(--color-secondary);
}

.email-input::placeholder {
  color: #2a2a4899;
  font-weight: 300;
}

.subscribe-btn {
  background-color: var(--color-secondary);
  color: #fff;
  border: none;
  padding: 0.75rem 1.75rem;
  font-size: 14px;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

@media (max-width: 768px) {
  .newsletter-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .form-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .email-input,
  .subscribe-btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>
