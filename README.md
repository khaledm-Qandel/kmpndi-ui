# kmpndi UI — three website directions

Three complete, bilingual (English / Arabic, full RTL) marketing sites for **kmpndi**, the access and operations platform for gated compounds in Egypt.

| Version | Direction | Link |
| --- | --- | --- |
| v1 | **The Gate Pass**: night film, security-print mint and magenta | https://khaledm-qandel.github.io/kmpndi-ui/v1/ |
| v2 | **The Billboard**: forest green, stone and copper launch campaign | https://khaledm-qandel.github.io/kmpndi-ui/v2/ |
| v3 | **The Line Map**: the compound drawn as a transit map | https://khaledm-qandel.github.io/kmpndi-ui/v3/ |

Start page: https://khaledm-qandel.github.io/kmpndi-ui/

## Structure

- `v1/`: single self-contained page, with a hero loop, a portrait mobile cut and the captioned film in `v1/assets/`.
- `v2/`, `v3/`: pages that share content and behaviour from `shared/`.
- `shared/kmpndi-content.js`: bilingual copy and product data (units, passes, capabilities, apps).
- `shared/kmpndi-core.js`: language toggle, film controls, reveal and the contact form.

## Before sending to customers

- **Contact email:** the forms open the visitor's email app addressed to the placeholder `sales@kmpndi.com`. Change `CONTACT_EMAIL` in `v1/index.html` and in `shared/kmpndi-core.js`.
- **Demo content:** names, units and pass numbers are illustrative. The sites make no pricing, customer or metric claims.

The hero films are motion graphics rendered from code with Remotion; there is no stock footage.
