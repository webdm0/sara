import { assetPath } from "../config/assets";
import "./SupplierFitSection.css";

const supplierTypes = [
  {
    title: "Виробник",
    description: "Українські виробники та власні торгові марки",
  },
  {
    title: "Імпортер",
    description: (
      <>
        Маєте власний імпорт <br /> нон-фуд товарів
      </>
    ),
  },
  {
    title: "Дистриб’ютор",
    description: "Офіційні представники міжнародних брендів та оптові компанії",
  },
];

const advantages = [
  {
    title: "Безумовна увага Б2С",
    lines: ["Ціни нижче на 20–70%", "Безкоштовна Доставка", "Групові Покупки"],
    color: "blue",
  },
  {
    title: "Оптові клієнти не тільки з України",
    lines: [
      "Прямі Ціни від Імпортерів та Виробників",
      "Актуальний асортимент і Бізнес Сервіс",
      "Україна, Молдова та Румунія",
    ],
    color: "yellow",
  },
  {
    title: "Найбільша дроп опт платформа",
    lines: [
      "Відкриваємо двері для сучасної моделі продажу через зручну, потужну та інноваційну систему взаємодії",
    ],
    color: "blue",
  },
];

export default function SupplierFitSection() {
  return (
    <section
      className="supplier-fit relative isolate overflow-hidden bg-white"
      aria-labelledby="supplier-fit-title"
    >
      <div className="supplier-fit__inner">
        <h2
          id="supplier-fit-title"
          className="supplier-fit__title text-center font-extrabold uppercase"
        >
          Хто може стати постачальником
        </h2>

        <div className="supplier-fit__types relative bg-gradient-to-r from-[#E8F8FF] to-[#DBF3FD]">
          <ul className="supplier-fit__types-grid grid">
            {supplierTypes.map(({ title, description }) => (
              <li className="supplier-fit__type min-w-0 bg-white" key={title}>
                <h3 className="font-semibold">{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>

          <img
            className="supplier-fit__crown pointer-events-none absolute"
            src={assetPath("crown-1.webp")}
            width="259"
            height="230"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>

        <p className="supplier-fit__question text-center font-extrabold uppercase">
          Підходите за параметрами?
        </p>

        <p className="supplier-fit__offer bg-gradient-to-r from-[#FFE743] to-[#FFDE2D] text-center font-bold uppercase">
          Отримайте власну адресу на цифровому ринку
        </p>

        <div className="supplier-fit__advantages relative">
          <ul className="supplier-fit__advantages-grid grid">
            {advantages.map(({ title, lines, color }) => (
              <li
                className={`supplier-fit__advantage supplier-fit__advantage--${color} min-w-0`}
                key={title}
              >
                <h3 className="font-extrabold uppercase">{title}</h3>
                <p>
                  {lines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>

          <img
            className="supplier-fit__girl pointer-events-none"
            src={assetPath("girl.webp")}
            width="213"
            height="345"
            alt="Представниця постачальника"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
