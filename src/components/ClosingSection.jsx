import { useState } from "react";
import { applicationLinks, contact } from "../config/contact";
import "./ClosingSection.css";

function SupplierForm() {
  const [showContact, setShowContact] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setShowContact(true);
  }

  return (
    <form
      id="supplier-form"
      className="supplier-form grid min-w-0"
      aria-label="Отримати умови для постачальника"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="sr-only">Ім’я</span>
        <input
          className="supplier-form__input block w-full bg-white"
          name="name"
          type="text"
          placeholder="Ім’я"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          pattern=".*\S.*"
        />
      </label>
      <label className="block">
        <span className="sr-only">Назва компанії</span>
        <input
          className="supplier-form__input block w-full bg-white"
          name="company"
          type="text"
          placeholder="Назва Компанії"
          autoComplete="organization"
          required
          maxLength={150}
          pattern=".*\S.*"
        />
      </label>
      <label className="block">
        <span className="sr-only">Телефон чи Telegram</span>
        <input
          className="supplier-form__input block w-full bg-white"
          name="contact"
          type="text"
          placeholder="Телефон чи Telegram"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          required
          minLength={5}
          maxLength={100}
          pattern=".*\S.*"
        />
      </label>
      <button
        className="supplier-form__submit cursor-pointer text-left font-bold text-white transition-colors hover:bg-slate-700"
        type="submit"
      >
        Отримати Умови
      </button>
      <div role="status" aria-live="polite" aria-atomic="true">
        {showContact && (
          <p className="supplier-form__notice">
            Заявку ще не надіслано. Щоб отримати умови, зверніться до менеджера:{" "}
            <a className="font-bold underline" href={`tel:${contact.phone}`}>
              {contact.phoneLabel}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function StoreBadge({ href, src, label, width, height }) {
  const image = (
    <img
      className="download-store__image"
      src={src}
      alt={label}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );

  return href ? (
    <a className="download-store relative block shrink-0" href={href}>
      {image}
    </a>
  ) : (
    <span
      className="download-store relative block shrink-0"
      aria-disabled="true"
    >
      {image}
    </span>
  );
}

export default function ClosingSection() {
  return (
    <section
      className="closing-section relative isolate"
      aria-labelledby="invitation-title"
    >
      <div className="supplier-invitation bg-[#FFE338]">
        <h2
          id="invitation-title"
          className="supplier-invitation__title text-center font-bold uppercase"
        >
          Запрошуємо стати частиною єдиної зони вільної торгівлі
        </h2>
        <div className="supplier-invitation__body grid items-start">
          <ul
            className="supplier-invitation__roles min-w-0 font-bold uppercase"
            aria-label="Для кого"
          >
            <li>Виробник?</li>
            <li>Імпортер?</li>
            <li>Дистриб’ютор?</li>
          </ul>
          <SupplierForm />
        </div>
      </div>

      <div
        className="download-panel grid items-center text-white"
        aria-labelledby="download-title"
      >
        <img
          className="closing-section__phone pointer-events-none absolute z-10 h-auto"
          src="/iPhone%2016%20Pro.webp"
          width="429"
          height="773"
          alt="Магазин постачальника в застосунку Сарафан 7км"
          loading="lazy"
          decoding="async"
        />

        <img
          className="download-panel__sticker h-auto w-full"
          src="/sticker-7km-sparks.webp"
          width="379"
          height="328"
          alt="Сарафан 7км"
          loading="lazy"
          decoding="async"
        />

        <div className="download-panel__content min-w-0">
          <h3 id="download-title" className="download-panel__title font-bold">
            <span className="block">ВЕСЬ 7км -</span>
            <span className="block">у вашому смартфоні!</span>
          </h3>
          <div className="download-panel__stores flex items-center bg-[var(--yellow)] text-black">
            <p className="download-panel__label font-bold">
              Завантажити <br />
              Застосунок
            </p>
            <div className="download-panel__badges flex items-center">
              <StoreBadge
                href={applicationLinks.appStore}
                src="/app-store.webp"
                label="Завантажити в App Store"
                width="166"
                height="77"
              />
              <StoreBadge
                href={applicationLinks.googlePlay}
                src="/google.webp"
                label="Завантажити в Google Play"
                width="146"
                height="49"
              />
            </div>
          </div>

          {applicationLinks.presentation ? (
            <a
              className="download-panel__video block w-fit font-bold no-underline"
              href={applicationLinks.presentation}
            >
              Відео Презентація
            </a>
          ) : (
            <span
              className="download-panel__video block w-fit font-bold"
              aria-disabled="true"
            >
              Відео Презентація
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
