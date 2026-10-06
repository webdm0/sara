import "./App.css";
import ArrowIcon from "./components/ArrowIcon";
import MarketComparison from "./components/MarketComparison";
import SupplierSection from "./components/SupplierSection";
import CrmSection from "./components/CrmSection";
import SupplierFitSection from "./components/SupplierFitSection";
import ClosingSection from "./components/ClosingSection";
import SiteFooter from "./components/SiteFooter";
import { contact } from "./config/contact";

const benefits = [
  {
    title: "РОЗДРІБ",
    image: "/rozdrib.webp",
    imageAlt: "Одяг, взуття та аксесуари для роздрібних покупок",
    width: 260,
    height: 196,
    imageClassName: "benefit-card__image benefit-card__image--retail",
  },
  {
    title: "ОПТ",
    image: "/opt.webp",
    imageAlt: "Коробки з товарами для оптових покупок",
    width: 282,
    height: 188,
    imageClassName: "benefit-card__image benefit-card__image--wholesale",
  },
  {
    title: "ДРОП",
    image: "/drop.webp",
    imageAlt: "Логотип Like Drop",
    width: 300,
    height: 300,
    imageClassName: "benefit-card__image benefit-card__image--drop",
  },
];

function Header() {
  return (
    <header className="site-header relative z-20 text-white">
      <div className="header-content flex items-center justify-between">
        <a
          className="brand-link flex min-w-0 items-center no-underline"
          href="#top"
          aria-label="Зона вільної торгівлі — на головну"
        >
          <img
            className="brand-logo shrink-0 object-contain"
            src="/logo.mini%202.webp"
            width="69"
            height="69"
            alt=""
          />
          <span className="brand-name font-semibold">
            ЗОНА ВІЛЬНОЇ ТОРГІВЛІ
          </span>
        </a>

        <a
          href={contact.supplierRegistration}
          className="supplier-link flex shrink-0 items-center justify-between bg-gradient-to-r from-[#FFE743] to-[#FFDE2D] font-bold text-black no-underline transition-opacity hover:opacity-90 active:scale-95"
        >
          <span>Стати Постачальником</span>
          <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

function BenefitCard({
  title,
  image,
  imageAlt,
  imageClassName,
  width,
  height,
}) {
  return (
    <li className="benefit-card">
      <p className="benefit-card__label flex flex-col">
        <strong>0%</strong>
        <span>{title}</span>
      </p>
      <img
        className={imageClassName}
        src={image}
        alt={imageAlt}
        width={width}
        height={height}
      />
    </li>
  );
}

function App() {
  return (
    <div id="top" className="site-shell w-full min-h-svh">
      <Header />

      <main>
        <section
          className="hero-section relative isolate"
          aria-labelledby="hero-title"
        >
          <div className="hero-stage grid relative">
            <div className="hero-copy">
              <h1 id="hero-title" className="hero-title">
                <span className="hero-title__line">
                  ПРОДАВАЙТЕ <mark>ОПТОМ</mark>,
                </span>{" "}
                <span className="hero-title__line">У РОЗДРІБ І ЧЕРЕЗ</span>{" "}
                <span className="hero-title__line">ДРОПЕРІВ</span>
              </h1>

              <p className="hero-commission">
                <strong>Комісія 0%</strong>
                <span>назавжди.</span>
              </p>
            </div>

            <div className="hero-artwork min-w-0">
              <img
                className="hero-group block w-full h-auto"
                src="/hero-group.webp"
                alt="Застосунок Sarafan: роздрібні покупки та товари для бізнесу"
                width="681"
                height="779"
                fetchPriority="high"
              />
            </div>

            <img
              className="hero-tag hero-tag--large absolute pointer-events-none"
              src="/tag-big.svg"
              width="235"
              height="242"
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="hero-market">
            <div className="hero-market__inner">
              <div className="market-copy relative">
                <p>Не маркетплейс.</p>
                <strong>ЦИФРОВИЙ РИНОК</strong>
              </div>

              <div className="hero-bottom relative">
                <div className="trade-zone-row relative flex items-center justify-end">
                  <img
                    className="hero-tag hero-tag--small absolute pointer-events-none"
                    src="/tag-small.svg"
                    width="106"
                    height="87"
                    alt=""
                    aria-hidden="true"
                  />
                  <p className="trade-zone-title">
                    <mark>Єдина</mark> зона вільної торгівлі в Україні
                  </p>
                </div>

                <ul className="benefits-grid grid grid-cols-3" id="supplier">
                  {benefits.map((benefit) => (
                    <BenefitCard key={benefit.title} {...benefit} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MarketComparison />
        <SupplierSection />
        <CrmSection />
        <SupplierFitSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
