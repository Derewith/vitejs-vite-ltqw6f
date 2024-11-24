
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"it\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <!-- <link href=\"" + assets + "/css/app.css\" rel=\"stylesheet\" /> -->\r\n    <!-- <link\r\n      href=\"https://unpkg.com/@fortawesome/fontawesome-free@6.7.1/css/brands.min.css\"\r\n      rel=\"stylesheet\"\r\n    /> -->\r\n    <link\r\n      href=\"https://unpkg.com/@fortawesome/fontawesome-free@6.7.1/css/fontawesome.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js\"></script>\r\n    <link\r\n      rel=\"apple-touch-icon\"\r\n      sizes=\"180x180\"\r\n      href=\"./public/apple-touch-icon.png\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"32x32\"\r\n      href=\"./public/favicon-32x32.png\"\r\n    />\r\n    <link\r\n      rel=\"icon\"\r\n      type=\"image/png\"\r\n      sizes=\"16x16\"\r\n      href=\"./public/favicon-16x16.png\"\r\n    />\r\n    <link rel=\"manifest\" href=\"./public/site.webmanifest\" />\r\n    <script src=\"https://cdn.jsdelivr.net/npm/motion@11.11.13/dist/motion.js\"></script>\r\n    <script>\r\n      document.documentElement.classList.add(\"js\");\r\n    </script>\r\n\r\n    <!-- <script src=\"https://unpkg.com/taos@1.0.5/dist/taos.js\"></script> -->\r\n    " + head + "\r\n  </head>\r\n\r\n  <body>\r\n    " + body + "\r\n    <!-- <script>\r\n      document.addEventListener(\"DOMContentLoaded\", function () {\r\n        // wait for the document to be loaded and rendered in svelte\r\n        const { animate, scroll } = Motion;\r\n        document.querySelectorAll(\"section > div\").forEach((item) => {\r\n          scroll(animate(item, { opacity: [0, 1, 1, 0] }, { ease: \"linear\" }), {\r\n            target: item,\r\n            offset: [\"start end\", \"end end\", \"start start\", \"end start\"],\r\n          });\r\n        });\r\n      });\r\n    </script> -->\r\n  </body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1yqmpem"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
