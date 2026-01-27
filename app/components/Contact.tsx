"use client";

import { useActionState } from "react";
import { submitContact, ContactFormState } from "../actions/contact";
import { useLanguage } from "../i18n";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const officeAddresses = {
  korea: [
    {
      key: "hanam",
      address:
        "(SKYPOLIS) DA-1041 135, Misagangbyeonhangang-ro hanam-si, Gyeonggi-do",
    },
    {
      key: "seoulIfc",
      address:
        "Two IFC Building, 10 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul",
    },
    {
      key: "gangnam",
      address: "(WeWork BLDG) 8F-112, 507. Teheran-ro, Gangnam-gu, Seoul",
    },
  ],
  usa: [
    { key: "irvine", address: "43 Corporate Park STE 201, Irvine CA 92606" },
    { key: "raleigh", address: "4030 Wake Forest Rd, Raleigh, NC 27609" },
  ],
  singapore: [
    {
      key: "singapore",
      address: "111 Somerset, #06-01I, 111 Somerset, 276306",
    },
  ],
};

export function Contact() {
  const { t } = useLanguage();
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  const successMessage = state.success ? t.contact.form.success : "";

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">
            {t.contact.title}
            <br />
            <em>{t.contact.titleHighlight}</em>
          </h2>
          <p className="section-description">{t.contact.description}</p>
        </div>

        <div className="contact-grid animate-on-scroll">
          <div className="contact-form-wrapper">
            {state.success ? (
              <div className="contact-success">
                <span className="success-icon">✓</span>
                <p>{successMessage}</p>
              </div>
            ) : (
              <form action={formAction} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      className="form-input"
                      placeholder={t.contact.form.namePlaceholder}
                      disabled={isPending}
                    />
                    {state.errors?.name && (
                      <span className="form-error">
                        {t.contact.form.validation.nameRequired}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder={t.contact.form.emailPlaceholder}
                      disabled={isPending}
                    />
                    {state.errors?.email && (
                      <span className="form-error">
                        {t.contact.form.validation.emailRequired}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input"
                      placeholder={t.contact.form.companyPlaceholder}
                      disabled={isPending}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      {t.contact.form.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      disabled={isPending}
                    >
                      <option value="general">
                        {t.contact.form.subjects.general}
                      </option>
                      <option value="logistics">
                        {t.contact.form.subjects.logistics}
                      </option>
                      <option value="technology">
                        {t.contact.form.subjects.technology}
                      </option>
                      <option value="finance">
                        {t.contact.form.subjects.finance}
                      </option>
                      <option value="trade">
                        {t.contact.form.subjects.trade}
                      </option>
                      <option value="property">
                        {t.contact.form.subjects.property}
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    className="form-textarea"
                    placeholder={t.contact.form.messagePlaceholder}
                    disabled={isPending}
                  />
                  {state.errors?.message && (
                    <span className="form-error">
                      {t.contact.form.validation.messageRequired}
                    </span>
                  )}
                </div>

                {state.message && !state.success && (
                  <div className="form-message form-message-error">
                    {t.contact.form.validation.fixErrors}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={isPending}
                >
                  <span>
                    {isPending ? (
                      <>
                        <span className="spinner" />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      t.contact.form.submit
                    )}
                  </span>
                  {!isPending && <span className="btn-arrow">→</span>}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="contact-block">
              <h3>{t.contact.info.title}</h3>
              <a href="tel:+82021800-9584" className="contact-link">
                +82 02 1800-9584
              </a>
              <a href="tel:+82031-8028-7110" className="contact-link">
                +82 031-8028-7110
              </a>
              <a href="mailto:admin@inus-group.com" className="contact-link">
                admin@inus-group.com
              </a>
            </div>

            <div className="contact-block">
              <h3>{t.contact.info.southKorea}</h3>
              {officeAddresses.korea.map((office) => (
                <div key={office.key} className="address-group">
                  <span className="address-label">
                    {
                      t.contact.info.offices[
                        office.key as keyof typeof t.contact.info.offices
                      ]
                    }
                  </span>
                  <p className="address-text">{office.address}</p>
                </div>
              ))}
            </div>

            <div className="contact-block">
              <h3>{t.contact.info.usa}</h3>
              {officeAddresses.usa.map((office) => (
                <div key={office.key} className="address-group">
                  <span className="address-label">
                    {
                      t.contact.info.offices[
                        office.key as keyof typeof t.contact.info.offices
                      ]
                    }
                  </span>
                  <p className="address-text">{office.address}</p>
                </div>
              ))}
            </div>

            <div className="contact-block">
              <h3>{t.contact.info.singapore}</h3>
              {officeAddresses.singapore.map((office) => (
                <div key={office.key} className="address-group">
                  <span className="address-label">
                    {
                      t.contact.info.offices[
                        office.key as keyof typeof t.contact.info.offices
                      ]
                    }
                  </span>
                  <p className="address-text">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
