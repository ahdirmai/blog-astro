import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead } from '../chunks/astro/server_Dmwk3qzb.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_7Sd4fgST.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_wC6kbUHU.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>🧑‍🚀 Hello, Ridha Here..</h1> <p>
Welcome to my personal blog. I'm a passionate <strong>Programmer</strong>, <strong>Photographer</strong>, and <strong>Data Analyst</strong> from Banjarmasin, South Borneo, Indonesia.
</p> <p>
Currently, I'm in my final year at Lambung Mangkurat University, majoring in Computer Science. With a strong adaptability to new environments, I excel at analyzing problems and finding solutions within my capabilities. Beyond programming, I have a deep interest in photography and data analysis, and I'm always eager to learn new skills.
</p> <p>
Feel free to explore my blog, where I share insights on programming, web development, and more. If you're interested in working together or just want to connect, don't hesitate to
</p></main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Ahdirmai/Porto/astro/Blog-ahdirmai/src/pages/index.astro", void 0);

const $$file = "C:/Ahdirmai/Porto/astro/Blog-ahdirmai/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
