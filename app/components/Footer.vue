<script setup>
import MapIcon from "~/assets/icons/MapIcon.svg";
import PhoneIcon2 from "~/assets/icons/PhoneIcon2.svg";
import EmailIcon from "~/assets/icons/EmailIcon.svg";
import Facebook from "~/assets/icons/facebook.svg";
import Twitter from "~/assets/icons/Twitter.svg";
import Instagram from "~/assets/icons/instagram.svg";
import Youtube from "~/assets/icons/youtube.svg";
import Pinterest from "~/assets/icons/pinterest.svg";

const footerColumns = [
  {
    title: "CORPORATE",
    links: [
      { text: "About us", url: "#" },
      { text: "Press", url: "#" },
      { text: "Human resources", url: "#" },
      { text: "News from us", url: "#" },
    ],
  },
  {
    title: "SHOPPING",
    links: [
      { text: "Order and Payment", url: "#" },
      { text: "Cancellation and Refund", url: "#" },
      { text: "Delivery Conditions", url: "#" },
      { text: "Secure shopping", url: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { text: "Terms of Use", url: "#" },
      { text: "Privacy Policy", url: "#" },
      { text: "Membership Agreement", url: "#" },
      { text: "Distance Selling Contract", url: "#" },
    ],
  },
  {
    title: "HELP CENTER",
    links: [
      { text: "FAQ", url: "#" },
      { text: "Contact center", url: "#" },
    ],
  },
];

const contactInfo = {
  address:
    "Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768 Ümraniye/İstanbul",
  phone: "0850 755 9987",
  email: "info@watsons.com.tr",
};
</script>

<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-top">
        <div
          v-for="(col, index) in footerColumns"
          :key="index"
          class="footer-col"
        >
          <h4 class="col-title">{{ col.title }}</h4>
          <ul class="footer-list">
            <li v-for="(link, i) in col.links" :key="i">
              <a :href="link.url" class="footer-link">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h4 class="col-title">CONTACT US</h4>
          <ul class="footer-list">
            <li class="contact-item">
              <MapIcon class="contact-icon" />
              <span class="text">{{ contactInfo.address }}</span>
            </li>
            <li class="contact-item">
              <PhoneIcon2 class="contact-icon" />
              <span class="text">{{ contactInfo.phone }}</span>
            </li>
            <li class="contact-item">
              <EmailIcon class="contact-icon" />
              <span class="text">{{ contactInfo.email }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © WATSONS 2021 ALL RIGHTS RESERVED | A MEMBER OF CK HUTCHISON HOLDINGS
        </div>

        <div class="social-icons">
          <a href="#" class="social-btn facebook" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" class="social-btn twitter" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#" class="social-btn instagram" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" class="social-btn youtube" aria-label="Youtube">
            <Youtube />
          </a>
          <a href="#" class="social-btn pinterest" aria-label="Pinterest">
            <Pinterest />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  width: 100%;
  background-color: #fff;
  padding: 3rem 0;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.col-title {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 300;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--color-primary);
}

.contact-col {
  min-width: 360px;
}

.contact-item {
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 300;
  transition: color 0.2s;
  display: flex;
  align-items: start;
  gap: 0.5rem;
}

.contact-icon {
  width: 1rem;
  height: 1rem;
  min-width: max-content;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  gap: 1.5rem;
}

.copyright {
  font-size: 10px;
  color: var(--text-light);
  font-weight: 400;
  text-transform: uppercase;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: transform 0.2s;
}

.social-btn:hover {
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .footer-top {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-col {
    min-width: 100%;
  }

  .contact-item {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
