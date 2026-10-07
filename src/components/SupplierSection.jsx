import { assetPath } from "../config/assets";
import "./MarketSections.css";

const supplierBenefits = [
  {
    title: "Віртуальний Магазин",
    description: "На вулиці вашої спеціалізації",
  },
  {
    title: "Оптові клієнти та дропери",
    description: "Україна, Молдова, Румунія",
  },
  {
    title: "Біржа Викупу Залишків",
    description:
      "Можливість ліквідувати залишки товарів та доступ до заявок на закупівлю (RFQ)",
  },
  {
    title: "Безкоштовний фулфілмент",
    description:
      "Квота на зберігання дрібногабариту та спеціальні умови повернення",
  },
  {
    title: "Цифровізація асортименту",
    description: "Сучасний шлюз для перенесення товарів у е-комерс",
  },
  {
    title: "Сучасна SARA CRM + AI",
    description:
      "Єдина операційна система ринку з інтегрованим AI помічником та b2b маркетом",
  },
];

export default function SupplierSection() {
  return (
    <section
      className="supplier-section"
      aria-labelledby="digital-market-title"
    >
      <div className="supplier-section__heading" data-reveal>
        <h2 id="digital-market-title">
          <span className="supplier-section__title">Цифровий Ринок</span>{" "}
          <span className="supplier-section__subtitle">
            <span>Центр сучасної оптової торгівлі</span>
          </span>
        </h2>
      </div>

      <div className="supplier-section__content">
        <p className="supplier-section__intro" data-reveal>
          Створіть ВАШ Віртуальний Магазин
        </p>

        <div className="supplier-showcase">
          <div className="supplier-showcase__market-wrap" data-reveal="left">
            <figure className="supplier-showcase__market">
              <img
                src={assetPath("virtual-shop.webp")}
                alt="Торгові вулиці з категоріями одягу, взуття та господарчих товарів"
                width="903"
                height="453"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="supplier-showcase__street-label">
                на реальній вулиці зі спеціалізацією
              </figcaption>
            </figure>
            <img
              className="supplier-showcase__logo"
              src={assetPath("big-logo.webp")}
              alt=""
              aria-hidden="true"
              width="280"
              height="280"
              loading="lazy"
              decoding="async"
            />
          </div>

          <figure
            className="supplier-showcase__shop"
            data-reveal="right"
            data-reveal-delay="1"
          >
            <img
              src={assetPath("digital-shop.webp")}
              alt="Магазин у застосунку Sarafan з картою ринку та картками товарів"
              width="574"
              height="567"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="supplier-showcase__shop-label">
              Мій Діджитал Магазин
            </figcaption>
          </figure>
        </div>

        <section
          className="supplier-rewards"
          aria-labelledby="supplier-rewards-title"
        >
          <h3
            id="supplier-rewards-title"
            className="supplier-rewards-title"
            data-reveal
          >
            Що отримує постачальник
          </h3>
          <ol className="supplier-benefits-grid" role="list">
            {supplierBenefits.map(({ title, description }, index) => (
              <li
                className="supplier-benefit"
                key={title}
                data-reveal
                data-reveal-delay={String(index % 2)}
              >
                <span className="supplier-benefit__number" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="supplier-benefit__copy">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}
