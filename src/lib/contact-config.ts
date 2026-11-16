// Il form contatti si mostra solo se almeno un canale di consegna è
// configurato: la riga su Notion o la mail di notifica via Google Workspace.
// Letto lato server al build: dopo aver cambiato le variabili serve un redeploy.

// ID del DB "Pipeline macro-clienti": non è un segreto (senza token non dà
// accesso a nulla), quindi resta come riserva se la variabile manca.
export const NOTION_LEADS_DB_ID =
  process.env.NOTION_LEADS_DB_ID?.trim() || "3d870b37-d4c5-8104-9d49-cfc637052cbc";

export function notionConfigured(): boolean {
  return Boolean(process.env.NOTION_SITE_TOKEN?.trim());
}

export function missingNotionEnv(): string {
  const missing = [
    !process.env.NOTION_SITE_TOKEN?.trim() && "NOTION_SITE_TOKEN",
    !process.env.NOTION_LEADS_DB_ID?.trim() && "NOTION_LEADS_DB_ID",
  ].filter(Boolean);
  return missing.length ? `variabili vuote: ${missing.join(", ")}` : "";
}

export function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_APP_PASSWORD);
}

export function isContactConfigured(): boolean {
  return notionConfigured() || smtpConfigured();
}
