// Il form contatti si mostra solo se almeno un canale di consegna è
// configurato: la riga su Notion o la mail di notifica via Google Workspace.
// Letto lato server al build: dopo aver cambiato le variabili serve un redeploy.

export function notionConfigured(): boolean {
  return Boolean(process.env.NOTION_SITE_TOKEN && process.env.NOTION_LEADS_DB_ID);
}

export function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_APP_PASSWORD);
}

export function isContactConfigured(): boolean {
  return notionConfigured() || smtpConfigured();
}
