import { contact } from "../config/contact";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__contacts grid items-center bg-white font-bold">
        <address className="site-footer__address min-w-0 not-italic">
          <a
            className="block w-fit no-underline hover:underline"
            href={contact.website}
          >
            {contact.websiteLabel}
          </a>
          <a
            className="block w-fit no-underline hover:underline"
            href={`tel:${contact.phone}`}
          >
            {contact.phoneLabel}
          </a>
        </address>
        <img
          className="site-footer__planet h-auto"
          src="/network.webp"
          width="104"
          height="104"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <p className="site-footer__manager min-w-0">
          <span className="block">ВАШ b2b МЕНЕДЖЕР:</span>
          <span className="block">{contact.managerName}</span>
        </p>
      </div>
      <nav className="site-footer__bottom" aria-label="Посилання Sarafan">
        <a
          className="site-footer__brand-link"
          href={contact.website}
          aria-label="Sarafan — головна сторінка"
        >
          <img
            src="/big-logo.webp"
            width="69"
            height="69"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </a>
        <a className="site-footer__website-link" href={contact.website}>
          {contact.websiteLabel}
        </a>
        <a
          className="site-footer__social-link"
          href={contact.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <img
            src="/tg.webp"
            width="189"
            height="177"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          className="site-footer__social-link"
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img
            src="/inst.webp"
            width="183"
            height="168"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </a>
      </nav>
    </footer>
  );
}
