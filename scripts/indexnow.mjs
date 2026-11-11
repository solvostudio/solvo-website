#!/usr/bin/env node
// Notifica a IndexNow (Bing, Yandex, Seznam, Naver...) le URL della sitemap.
// Da lanciare SOLO dopo che la versione con il file chiave è in produzione:
//   node scripts/indexnow.mjs            -> tutte le URL della sitemap live
//   node scripts/indexnow.mjs /insights  -> solo i path indicati
// La chiave è pubblica per design: il file public/<chiave>.txt ne prova il possesso.

const HOST = "solvo.studio";
const KEY = "508ebd6b47ef8b376fb20f17822a967a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function urlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const check = await fetch(KEY_LOCATION);
  if (!check.ok || (await check.text()).trim() !== KEY) {
    throw new Error(`file chiave non raggiungibile su ${KEY_LOCATION}: il deploy è in produzione?`);
  }
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((p) => `https://${HOST}${p.startsWith("/") ? p : "/" + p}`)
    : await urlsFromSitemap();

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  // 200 = ricevuto, 202 = accettato con verifica chiave in corso.
  console.log(`IndexNow: HTTP ${res.status} per ${urlList.length} URL`);
  urlList.forEach((u) => console.log("  " + u));
  if (res.status >= 400) process.exit(1);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
