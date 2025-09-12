import { SlideData } from '@/types/presentation';

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Aprobación del Reglamento Interno de Negocios",
    subtitle: "Hacia una gestión ágil, transparente y rentable",
    type: "title",
    content: {
      text: [
        "Entidad: Sociedad de Beneficencia de Puno",
        "Fecha: 12 de septiembre de 2025"
      ]
    }
  },
  {
    id: 2,
    title: "¿Qué buscamos con este reglamento?",
    type: "content",
    content: {
      visual: [
        { type: "icon", content: "Establecer reglas claras y formales para la operación de nuestros negocios (tienda, canchas, cocheras, etc.)", style: "rules" },
        { type: "icon", content: "Dar al Área de Marketing y Negocios la agilidad necesaria para operar eficientemente", style: "agility" },
        { type: "icon", content: "Garantizar la transparencia total en el uso de los recursos", style: "transparency" },
        { type: "icon", content: "Cumplir con la normativa contable y de tesorería del Estado", style: "compliance" }
      ]
    }
  },
  {
    id: 3,
    title: "¿Por qué necesitamos este cambio?",
    type: "content",
    content: {
      visual: [
        { type: "warning", content: "Burocracia Excesiva: Demoras en compras menores que frenan la operación diaria" },
        { type: "warning", content: "Falta de Capital de Trabajo: Negocios operando sin un fondo asignado, generando informalidad" },
        { type: "warning", content: "Riesgo Contable: Utilidades mal registradas y falta de sustento en gastos" },
        { type: "warning", content: "Gestión Desarticulada: Roles poco definidos entre Marketing, Contabilidad y Tesorería" },
        { type: "warning", content: "Imposibilidad de Crecer: Sin un marco normativo, es imposible reinvertir utilidades de forma legal" }
      ]
    }
  },
  {
    id: 4,
    title: "Un Modelo de Gestión Moderno y Controlado",
    subtitle: "3 Pilares Fundamentales",
    type: "content",
    content: {
      visual: [
        { type: "highlight", content: "Fondo Rotatorio: Asignar un capital de trabajo fijo y exclusivo para cada negocio. Administrado por Marketing y Negocios." },
        { type: "highlight", content: "Rendiciones Mensuales Simplificadas: Formatos estándar para reportar ingresos y gastos. Proceso de validación claro por Contabilidad y reposición por Tesorería." },
        { type: "highlight", content: "Utilidades Claras y Reinversión: Las ganancias se transfieren a Tesorería como RDR. Se habilita un mecanismo formal para aprobar la reinversión en mejoras." }
      ]
    }
  },
  {
    id: 5,
    title: "Separación de Funciones para un Mejor Control",
    type: "table",
    content: {
      table: {
        headers: ["Rol", "Función Principal"],
        rows: [
          ["Marketing/Negocios", "Gestiona y Rinde: Opera el día a día y reporta"],
          ["Contabilidad", "Valida y Registra: Verifica la corrección de las rendiciones"],
          ["Tesorería", "Controla y Repone: Custodia los fondos y repone el gasto"],
          ["Gerencia", "Aprueba y Supervisa: Autoriza fondos y decisiones estratégicas"]
        ]
      }
    }
  },
  {
    id: 6,
    title: "¿Cómo funcionará en la práctica?",
    type: "diagram",
    content: {
      diagram: {
        type: "flow",
        steps: [
          { id: "1", label: "Marketing/Negocios", description: "Realiza ventas y compras menores con su Fondo Rotatorio", position: { x: 0, y: 0 }, connections: ["2"] },
          { id: "2", label: "Fin de Mes", description: "Consolida ingresos y egresos en formatos y los envía a Contabilidad", position: { x: 1, y: 0 }, connections: ["3"] },
          { id: "3", label: "Contabilidad", description: "Revisa, valida los comprobantes y da conformidad", position: { x: 2, y: 0 }, connections: ["4"] },
          { id: "4", label: "Tesorería", description: "Con la conformidad, transfiere el monto gastado para reponer el fondo", position: { x: 3, y: 0 }, connections: ["5"] },
          { id: "5", label: "Utilidad Neta", description: "Se transfiere a la cuenta central de la Beneficencia", position: { x: 4, y: 0 } }
        ]
      }
    }
  },
  {
    id: 7,
    title: "Garantizando la Transparencia y el Cumplimiento",
    type: "content",
    content: {
      items: [
        "Control Interno: Rendición mensual obligatoria con comprobantes",
        "Auditoría Interna: Revisiones semestrales a cargo de la OCI",
        "Supervisión Externa: Cumplimiento de las normativas de la Contraloría General de la República"
      ]
    }
  },
  {
    id: 8,
    title: "Impacto Positivo para la Institución",
    type: "list",
    content: {
      visual: [
        { type: "highlight", content: "Agilidad Operativa: Respuesta rápida a las necesidades del mercado (comprar productos, reparaciones menores)" },
        { type: "highlight", content: "Orden Administrativo: Se eliminan los riesgos de observaciones y sanciones" },
        { type: "highlight", content: "Autonomía Regulada: El área de Negocios opera con respaldo normativo, no con improvisación" },
        { type: "highlight", content: "Crecimiento Sostenible: Capacidad real de reinvertir las ganancias para mejorar los servicios" },
        { type: "highlight", content: "Toma de Decisiones Informada: Datos financieros fiables para la Gerencia y el Directorio" }
      ]
    }
  },
  {
    id: 9,
    title: "Herramientas para una Gestión Sencilla",
    type: "content",
    content: {
      text: [
        "Se ha diseñado un archivo Excel con formatos prácticos para:",
        "• Rendición diaria de ingresos y egresos",
        "• Flujo de caja mensual",
        "• Control de inventarios",
        "• Solicitud de reposición",
        "",
        "Estos formatos automatizan los cálculos y facilitan el trabajo del personal"
      ]
    }
  },
  {
    id: 10,
    title: "Pasos para Poner en Marcha el Reglamento",
    type: "content",
    content: {
      items: [
        "Paso 1 (Hoy): Aprobación del Reglamento por el Directorio",
        "Paso 2 (Semana 1): Difusión y capacitación a las áreas involucradas (Marketing, Contabilidad, Tesorería)",
        "Paso 3 (Semana 2): Gerencia aprueba los montos de los Fondos Rotatorios iniciales",
        "Paso 4 (Mes 1): Puesta en marcha oficial y primera rendición bajo el nuevo modelo"
      ]
    }
  },
  {
    id: 11,
    title: "Solicitud al Directorio",
    type: "content",
    content: {
      text: [
        "Se solicita la aprobación del Reglamento Interno de Negocios para formalizar y potenciar la gestión de nuestras unidades generadoras de recursos.",
        "",
        "Este es un paso estratégico para el fortalecimiento financiero y la modernización de la Sociedad de Beneficencia de Puno.",
        "",
        "¿Preguntas?"
      ]
    }
  }
];