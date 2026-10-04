import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const allowed = new Set(['name', 'slug', 'phone', 'city', 'address']);
const args = {};
for (let i = 2; i < process.argv.length; i += 2) {
  const key = process.argv[i]?.replace(/^--/, '');
  const value = process.argv[i + 1];
  if (!allowed.has(key) || !value || !process.argv[i].startsWith('--')) {
    throw new Error('الاستخدام: node tools/create-salon-catalog.mjs --name "اسم المشغل" [--slug salon-name] [--phone 05xxxxxxxx] [--city المدينة] [--address العنوان]');
  }
  args[key] = value.trim().replace(/\s+/g, ' ');
}

if (!args.name || !/^[\p{L}\p{N}\s-]{2,80}$/u.test(args.name)) {
  throw new Error('أدخلي اسم المشغل (حروف وأرقام ومسافات فقط).');
}
const slug = args.slug || 'salon-' + Date.now().toString(36);
if (!/^[a-z0-9][a-z0-9-]{2,50}$/.test(slug)) throw new Error('رابط المشغل يجب أن يكون حروفًا إنجليزية صغيرة وأرقامًا وشرطات.');
const city = args.city || 'السعودية';
const address = args.address || 'أضيفي العنوان';
for (const value of [city, address]) {
  if (!/^[\p{L}\p{N}\s,،.-]{2,120}$/u.test(value)) throw new Error('اكتبي المدينة والعنوان كنص واضح دون رموز برمجية.');
}

let digits = (args.phone || '').replace(/[٠-٩۰-۹]/g, d => {
  const numbers = '٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹';
  return String(numbers.indexOf(d) % 10);
}).replace(/\D/g, '');
if (/^05\d{8}$/.test(digits)) digits = '966' + digits.slice(1);
if (digits && !/^9665\d{8}$/.test(digits)) throw new Error('رقم الجوال السعودي يجب أن يبدأ بـ 05 ويتكون من 10 أرقام.');

const pageUrl = 'https://aloooorrrr4-ops.github.io/MM/' + slug + '.html';
const phoneDisplay = digits ? '0' + digits.slice(3, 5) + ' ' + digits.slice(5, 8) + ' ' + digits.slice(8) : 'أضيفي رقم المشغل';
const replacements = {
  SALON_NAME: args.name,
  CITY: city,
  ADDRESS: address,
  PHONE_DIGITS: digits,
  PHONE_E164: digits ? '+' + digits : '',
  PHONE_DISPLAY: phoneDisplay,
  PAGE_URL: pageUrl,
  PAGE_URL_ENCODED: encodeURIComponent(pageUrl),
  SHARE_TEXT: encodeURIComponent(args.name),
  MAP_QUERY: encodeURIComponent(address === 'أضيفي العنوان' ? args.name + ' ' + city : address)
};

let html = await readFile(path.join(root, 'templates/salon-1.html.tpl'), 'utf8');
html = html.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key) => {
  if (!(key in replacements)) throw new Error('حقل غير معروف في القالب: ' + key);
  return replacements[key];
});
if (html.includes('{{')) throw new Error('بقيت حقول لم تُملأ في القالب.');

if (!digits) {
  html = html.replaceAll('data-business-wa href="https://wa.me/"', 'data-business-wa href="#contact"');
  html = html.replaceAll('data-business-call href="tel:"', 'data-business-call href="#contact"');
  html = html.replaceAll('data-business-wa href="#contact" target="_blank"', 'data-business-wa href="#contact"');
  html = html.replace('<head>', '<head>\n<meta name="robots" content="noindex,nofollow">');
}

const output = path.join(root, slug + '.html');
await writeFile(output, html, { flag: 'wx' });
console.log(output);
console.log(digits ? 'جاهز للعرض والحجز عبر رقم المشغل.' : 'معاينة باسم العميل؛ الحجز معطل حتى يُضاف رقم المشغل من لوحة التحرير.');
