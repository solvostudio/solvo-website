// Un articolo è un file TS con metadati e blocchi tipizzati: niente
// dipendenze MDX, typecheck sul contenuto, HTML inline solo nostro.
export type Block =
  | { type: "p"; html: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | {
      type: "table";
      caption: string;
      head: string[];
      rows: string[][];
    }
  | { type: "callout"; html: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  /** ISO yyyy-mm-dd */
  date: string;
  updated?: string;
  readingMinutes: number;
  keywords: string[];
  blocks: Block[];
  sources?: { label: string; url: string }[];
};
