"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const defaultFaqData = [
  {
    id: "faq1",
    question: "¿Qué certificaciones internacionales posee iTCS S.A.?",
    answer:
      "Contamos con ISO 9001:2015 (Sistema de Gestión de la Calidad) e ISO 27001:2022 (Seguridad de la Información), con alcance sobre consultoría, implementación y soporte técnico.",
    delay: ".3s",
  },
  {
    id: "faq2",
    question: "¿Ofrecen soporte 24/7?",
    answer:
      "El soporte 24/7 está disponible exclusivamente para clientes con acuerdo de nivel de servicio (SLA) activo, según lo indicado en la información de contacto de la empresa.",
    delay: ".5s",
  },
  {
    id: "faq3",
    question: "¿Dónde están ubicados y cuál es el horario de atención?",
    answer:
      "Nuestras oficinas están en el Barrio Virgen del Huerto, Asunción, Paraguay. Atención general: lunes a viernes de 08:00 a 18:00 hs.",
    delay: ".5s",
  },
  {
    id: "faq4",
    question: "¿Cómo solicito una propuesta o consultoría?",
    answer:
      "Puede escribir a info@itcs.com.py, llamar al +595 21 728-8222 o completar el formulario en la página de contacto, indicando asunto (infraestructura, ciberseguridad, productos, etc.).",
    delay: ".5s",
  },
];

export const itcsFaqCalidad = [
  {
    id: "c1",
    question: "¿En qué se basa la Política de Calidad (ISO 9001)?",
    answer:
      "Satisfacer las necesidades de nuestros clientes con servicios y soluciones de TI de alta calidad, cumplir requisitos legales y contractuales, mejorar continuamente el sistema de gestión, desarrollar competencias del personal y fomentar la cultura de calidad.",
    delay: ".3s",
  },
  {
    id: "c2",
    question: "¿Qué ejemplos de objetivos de calidad manejan?",
    answer:
      "Mantener satisfacción del cliente superior al 90%, reducir el tiempo de respuesta a incidentes críticos a menos de 2 horas, alta disponibilidad de soporte, capacitación anual del personal técnico y cumplimiento de plazos en proyectos.",
    delay: ".5s",
  },
  {
    id: "c3",
    question: "¿Cómo se relaciona la calidad con sus servicios en Paraguay?",
    answer:
      "El alcance de la ISO 9001 cubre los servicios de consultoría, implementación y soporte técnico, con procesos estandarizados, mejora continua y trazabilidad de proyectos.",
    delay: ".5s",
  },
];

export const itcsFaqSeguridad = [
  {
    id: "s1",
    question: "¿Qué principios define la Política de Seguridad (ISO 27001)?",
    answer:
      "Proteger la confidencialidad, integridad y disponibilidad de la información; cumplir requisitos legales; gestionar riesgos de forma proactiva; asegurar continuidad del negocio; capacitar al personal; y revisar periódicamente controles y políticas.",
    delay: ".3s",
  },
  {
    id: "s2",
    question: "¿Qué beneficio obtiene el cliente con la ISO 27001?",
    answer:
      "Protección estructurada de datos, gestión de riesgos, marco de cumplimiento normativo y planes de continuidad y recuperación alineados a buenas prácticas internacionales.",
    delay: ".5s",
  },
  {
    id: "s3",
    question: "¿Cómo se revisan las políticas?",
    answer:
      "Las políticas de calidad y de seguridad de la información son revisadas anualmente por la Alta Dirección para asegurar su adecuación y eficacia.",
    delay: ".5s",
  },
];

export const Home2Accordion = ({ items = defaultFaqData }) => {
  const [toggle, setToggle] = useState(items[0]?.id ?? "faq1");
  return (
    <Accordion className="accordion" id="accordion" defaultActiveKey={toggle}>
      {items.map(({ id, question, answer, delay }) => (
        <div
          key={id}
          className="accordion-item wow fadeInUp"
          data-wow-delay={delay}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${toggle === id ? "" : "collapsed"}`}
              eventKey={id}
              aria-expanded={toggle === id ? "true" : "false"}
              onClick={() => setToggle(id)}
            >
              {question}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse eventKey={id} className="accordion-collapse">
            <div className="accordion-body">{answer}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
