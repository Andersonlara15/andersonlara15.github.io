export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Analista de Datos",
    company: "Pear Solutions",
    dates: "2025 - Presente",
    description: [
      "Gestión y control de bases de datos.",
      "Elaboración y presentación de informes para la toma de decisiones.",
      "Automatización de procesos para las diferentes áreas de la compañía.",
      "Procesamiento ETL para los diferentes ejercicios de datos.",
      "Presentación y gestión de tableros de control de ingresos y egresos para los clientes de la compañía.",
    ]
  },
  {
    title: "Analista de ventas y gestion comercial",
    company: "Gi Group",
    dates: "2020 - 2025",
    description: [
      "Elaboración de reportes de ventas mostrando ingresos y egresos de la compañía.",
      "Procesamiento ETL para el cálculo de KPIs comerciales.",
      "Gestión, validación y presentación de análisis de ranking comerciales.",
      "Seguimiento y control de eventos de marketing.",
      "Creación de cuadros de mando para análisis comercial y de productos.",
      "Colaboración en el desarrollo de informes y presentaciones a nivel gerencial."
    ]
  }
];