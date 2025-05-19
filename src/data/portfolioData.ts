export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard de Ventas e Ingresos",
    summary: "El objetivo de este proyecto es unificar la información y generar un cuadro de control para el siguimiento de ventas e ingresos",
    images: [
      "https://raw.githubusercontent.com/Andersonlara15/andersonlara15.github.io/main/public/general.jpg",
      "https://raw.githubusercontent.com/Andersonlara15/andersonlara15.github.io/main/public/modelado.jpg",
      "https://raw.githubusercontent.com/Andersonlara15/andersonlara15.github.io/main/public/tendencia.jpg"
    ],
    tags: ["Power BI", "SQL", "Data Visualization", "Customer Analytics", "Business Intelligence", "Oracle"],
    details: {
      challenge: "La compañia requeria saber como podia unificar archivos de excel donde cada departamento pasaba la información por medio de correo a una sola persona y esta unificaba manualmente, es de resaltar que no tenian un sistema como CRM para la gestion de sus clientes y pedidos .",
      solution: "Al ser un proceso manual se sugirió a la compañia contratar un sistema CRM donde se pudiera gestionar y hacer seguimiento a todo su E-commerce, mientras esto sucedia la opcion más valida y rapida fue unificar esta información generando un repositorio en la nube (OneDrive) donde cada area dejara su archivo de acuerdo a una estructura de tablas e información ya definida, se creo una base de datos en Oracle donde se unificada automaticamente esta información de acuerdo a los datos registrados, adicional se creo un tablero en Power BI donde se podia hacer seguimiento de una manera más facil a las ventas y hacer un analisis más profundo en los ingresos de la compañia .",
      impact: [
        "Incremento en la velocidad de entrega de los pedidos debido a la.",
        "Visualización demografica de que regiones son los ingresos más altos .",
        "Conocer y entender que los productos más vendidos no significaba ser los que mayor cantidad de dinero ingresaban"
      ]
    }
  },
  {
    id: 2,
    title: "Automated Financial Reporting System",
    summary: "Created an automated ETL pipeline to streamline financial reporting, reducing manual data processing time for a financial services firm.",
    images: [
      "https://example.com/finance1.jpg",
      "https://example.com/finance2.jpg"
    ],
    tags: ["Python", "ETL", "Data Engineering", "Finance", "Power BI", "Automation"],
    details: {
      challenge: "The finance team spent excessive time manually aggregating and reconciling data from multiple sources for monthly reports.",
      solution: "Developed a Python-based ETL pipeline that extracted, cleaned, and loaded financial data into Power BI, automating report generation.",
      impact: [
        "Reduced reporting time from 5 days to a few hours, improving efficiency.",
        "Minimized errors in financial reports, ensuring data accuracy for decision-making."
      ]
    }
  }
];
