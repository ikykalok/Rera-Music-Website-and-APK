import fs from 'fs';
import path from 'path';

export interface ProductionMeta {
  slug: string;
  title: string;
  desc: string;
}

const dataDir = path.join(process.cwd(), 'src/data');

export function getProductionList(): ProductionMeta[] {
  const jsonPath = path.join(dataDir, 'productions_index.json');
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

export function getProduction(slug: string) {
  const list = getProductionList();
  const meta = list.find(p => p.slug === slug);
  if (!meta) return null;

  const htmlPath = path.join(dataDir, 'productions', `${slug}.html`);
  if (!fs.existsSync(htmlPath)) return null;

  let fullHtml = fs.readFileSync(htmlPath, 'utf8');
  // Strip outer <main...> and </main>
  fullHtml = fullHtml.replace(/^<main\b[^>]*>/i, '').replace(/<\/main>\s*$/i, '');

  return {
    ...meta,
    innerHtml: fullHtml,
  };
}

export function getFilmsInnerHtml(): string {
  const htmlPath = path.join(dataDir, 'films_main.html');
  const fullHtml = fs.readFileSync(htmlPath, 'utf8');
  return fullHtml.replace(/^<main\b[^>]*>/i, '').replace(/<\/main>\s*$/i, '');
}

export function getTvInnerHtml(): string {
  const htmlPath = path.join(dataDir, 'tv_main.html');
  const fullHtml = fs.readFileSync(htmlPath, 'utf8');
  return fullHtml.replace(/^<main\b[^>]*>/i, '').replace(/<\/main>\s*$/i, '');
}
