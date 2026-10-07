import { assetPath } from "../config/assets";
import "./MarketSections.css";

export default function MarketComparison() {
  return (
    <section className="comparison-section" aria-labelledby="comparison-title">
      <h2 id="comparison-title" className="sr-only">
        Від фізичного ринку до цифрового
      </h2>

      <div className="comparison-grid">
        <figure className="market-panel market-panel--physical">
          <figcaption>
            <h3 className="market-panel__title">Ринок 7км 2000х</h3>
          </figcaption>
          <div className="market-visual">
            <img
              className="market-visual__image"
              src={assetPath(
                "Оптовый%20рынок%20с%20контейнерными%20рядами%201.webp",
              )}
              alt="Контейнерні ряди та складська інфраструктура ринку 7км"
              width="634"
              height="290"
              loading="lazy"
              decoding="async"
            />
            <div className="physical-labels">
              <p>Фізичний Ринок 7км</p>
              <p>складська інфраструктура</p>
            </div>
          </div>
        </figure>

        <div className="comparison-arrow" aria-hidden="true">
          <img
            src={assetPath("arrow.svg")}
            alt=""
            width="331"
            height="162"
          />
        </div>

        <figure className="market-panel market-panel--digital">
          <figcaption>
            <h3 className="market-panel__title market-panel__title--digital">
              <span>Цифровий Ринок XXI -</span> Сарафан 7км
            </h3>
          </figcaption>
          <div className="market-visual">
            <img
              className="market-visual__image"
              src={assetPath(
                "Цифровая%20карта%20над%20оптовым%20рынком%201.webp",
              )}
              alt="Цифрова карта ринку з позначками категорій товарів"
              width="691"
              height="347"
              loading="lazy"
              decoding="async"
            />
            <p className="digital-market-label">
              Цифровий Шар - Сарафан 7км
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
