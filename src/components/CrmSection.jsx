import ArrowIcon from "./ArrowIcon";
import { applicationLinks } from "../config/contact";
import { assetPath } from "../config/assets";
import "./CrmSection.css";

const services = [
  {
    title: "XML, YML та фіди",
    description: "Автоматичне завантаження товарів",
  },
  {
    title: "Sarafan Parser",
    description: "Парсинг із Telegram-груп та Instagram",
  },
  {
    title: "Sarafan Publisher",
    description: "Автоматична публікація товарів з SARA CRM",
  },
];

export default function CrmSection() {
  return (
    <section
      className="crm-section relative isolate"
      aria-labelledby="crm-title"
    >
      <div className="crm-section__inner">
        <h2
          id="crm-title"
          className="crm-title text-center font-extrabold"
          data-reveal
        >
          SARA CRM - операційна система ринку
        </h2>

        <div className="crm-layout grid items-center">
          <figure className="crm-laptop relative min-w-0" data-reveal="left">
            <img
              className="block h-auto w-full"
              src={assetPath("laptop.webp")}
              alt="Інтерфейс SARA CRM на ноутбуці"
              width="499"
              height="388"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div
            className="crm-apps relative min-w-0"
            data-reveal="scale"
            data-reveal-delay="1"
          >
            <img
              className="crm-apps__curve pointer-events-none absolute"
              src={assetPath("arrow-curve.svg")}
              alt=""
              aria-hidden="true"
              width="75"
              height="171"
            />
            <ul
              className="crm-apps__grid grid grid-cols-2"
              aria-label="Інтеграції SARA"
            >
              <li className="crm-app-tile grid place-items-center bg-white">
                <img
                  className="crm-app-tile__icon object-contain"
                  src={assetPath("inst.webp")}
                  alt="Instagram"
                  width="183"
                  height="168"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li className="crm-app-tile grid place-items-center bg-white">
                <img
                  className="crm-app-tile__icon object-contain"
                  src={assetPath("tg.webp")}
                  alt="Telegram"
                  width="189"
                  height="177"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li className="crm-app-tile grid place-items-center bg-white font-bold">
                <span aria-label="SARA CMS">CMS</span>
              </li>
              <li className="crm-app-tile grid place-items-center bg-white font-bold">
                <span aria-label="SARA CRM">CRM</span>
              </li>
            </ul>
          </div>

          <div className="crm-divider relative self-stretch" aria-hidden="true">
            <img
              className="absolute"
              src={assetPath("divider-dashed.svg")}
              alt=""
              width="5"
              height="353"
            />
          </div>

          <ul
            className="crm-services grid min-w-0"
            aria-label="Можливості SARA CRM"
          >
            {services.map(({ title, description }, index) => (
              <li
                key={title}
                className="crm-service min-w-0 bg-white"
                data-reveal="right"
                data-reveal-delay={String(index)}
              >
                <h3 className="font-bold">{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="crm-banner grid items-center bg-gradient-to-r from-[#FFE743] to-[#FFDE2D] text-black no-underline hover:opacity-90 active:scale-95"
          href={applicationLinks.cms}
          data-reveal
        >
          <p className="text-center font-bold">
            Власний Інтернет Магазин на SARA CMS
          </p>
          <ArrowIcon className="crm-banner__arrow" />
        </a>
      </div>
    </section>
  );
}
