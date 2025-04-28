import React from "react";
import { Form, Field } from "react-final-form";

export default function Contact({ section }) {
  const { title, description } = section?.content || {};

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const onSubmit = async (values) => {
    const hhEndpoint = `https://api.headlesshost.com/sites/${process.env.REACT_APP_SITE_ID}/contact`;
    await postData(hhEndpoint, values);
  };

  const FormInputField = ({ name, label, type = "text" }) => {
    return (
      <Field name={name}>
        {({ input, meta }) => (
          <div className="col-md-6">
            <div className="form-floating mb-4 input-group-meta">
              <input {...input} type={type} id={name} className={`form-control ${meta.error && meta.touched ? "is-invalid" : ""}`} />
              <label htmlFor={name}>{label}</label>
              {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
            </div>
          </div>
        )}
      </Field>
    );
  };

  return (
    <section className="wrapper">
      <div className="contact-section-four mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 m-auto">
              <div className="title-style-one text-center">
                <h2 className="title">{title}</h2>
                <p className="text-lg pt-30 lg-pt-20 mr-prewrap">{description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-11 m-auto mt-5">
              <div className="form-style-one">
                <Form
                  onSubmit={onSubmit}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Please enter your first name.";
                    }
                    if (!values.surname) {
                      errors.surname = "Please enter your last name.";
                    }
                    if (!values.email) {
                      errors.email = "Please provide a valid email address.";
                    }
                    if (!values.message) {
                      errors.message = "Please enter your messsage.";
                    }
                    return errors;
                  }}
                  render={({ handleSubmit, submitSucceeded }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row gx-4">
                        {submitSucceeded && (
                          <div className="col-12 mb-4">
                            <div className="alert alert-success" role="alert">
                              Thank you for your enquiry. We will get back to you shortly.
                            </div>
                          </div>
                        )}

                        <FormInputField name="name" label="first name *" type="text" />
                        <FormInputField name="surname" label="surname *" type="text" />
                        <FormInputField name="email" label="email *" type="email" />
                        <Field name="message">
                          {({ input, meta }) => (
                            <div className="col-12">
                              <div className="form-floating mb-4 input-group-meta">
                                <textarea {...input} id="message" className={`form-control ${meta.error && meta.touched ? "is-invalid" : ""}`} style={{ height: "150px" }} />
                                {meta.error && meta.touched && <div className="invalid-feedback">{meta.error}</div>}
                                <label htmlFor="message">message</label>
                              </div>
                            </div>
                          )}
                        </Field>
                        <div className="col-12">
                          <input type="submit" className="btn btn-primary btn-lg px-4 me-md-2" value="Send message" />
                          <p className="text-muted">
                            <strong>*</strong> These fields are required.
                          </p>
                        </div>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
