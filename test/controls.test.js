import assert from "node:assert/strict";
import { after, test } from "node:test";

const component = { customElement: true, tagName: "test-control", slots: [] };
const originals = {
  window: global.window,
  document: global.document,
  fetch: global.fetch,
};

global.window = {
  $docsify: { componentDocs: { manifestPath: "/custom-elements.json" } },
};
global.document = { querySelector: () => ({ attributes: {} }) };
global.fetch = async () => ({
  json: async () => ({ modules: [{ declarations: [component] }] }),
});

const { renderControlsPanel } = await import("../src/lib/controls.js");

after(() => {
  for (const [name, value] of Object.entries(originals)) {
    if (value === undefined) delete global[name];
    else global[name] = value;
  }
});

const field = (name, type = "string", overrides = {}) => ({
  kind: "field",
  name,
  attribute: name,
  description: `Description of ${name}`,
  type: { text: type },
  ...overrides,
});

test("renders documented public attribute controls", async () => {
  component.members = [
    field("label"),
    field("count", "number", { privacy: "public" }),
    field("disabled", "boolean"),
    field("size", '"small" | "medium" | "large"'),
    field("variant", '| "a" | "b" | "c" | "d" | "e" | "f"'),
  ];

  const html = await renderControlsPanel(component.tagName);
  for (const member of component.members) {
    assert.ok(html.includes(`<code>${member.attribute}</code>`));
  }
  assert.match(html, /type="text"/);
  assert.match(html, /type="number"/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /type="radio"/);
  assert.match(html, /<select name="variant">/);
});

test("omits fields that cannot be controlled through attributes", async () => {
  component.members = [
    field("type", "string", { attribute: undefined, readonly: true }),
    field("form", "HTMLFormElement | null", { attribute: undefined }),
    field("validationMessage", "string", { attribute: undefined }),
    field("willValidate", "boolean", { attribute: undefined }),
    field(
      "inputEl",
      "HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement",
      {
        attribute: undefined,
      }
    ),
    field("renderAriaLabel", "string | undefined", { privacy: "protected" }),
    field("privateField", "string", { privacy: "private" }),
    field("readonlyField", "string", { readonly: true }),
    field("staticField", "string", { static: true }),
    field("emptyAttribute", "string", { attribute: "" }),
    field("undocumented", "string", { description: "" }),
    field("method", "string", { kind: "method" }),
    field("missingType", "string", { type: undefined }),
    field("missingTypeText", "string", { type: {} }),
    field("object", "HTMLFormElement"),
    field("label"),
  ];

  const html = await renderControlsPanel(component.tagName);
  assert.deepEqual(
    [...html.matchAll(/<th scope="row"><code>(.*?)<\/code><\/th>/g)].map(
      (match) => match[1]
    ),
    ["label"]
  );
  assert.doesNotMatch(html, /undefined/);
});

test("renders a component without members", async () => {
  delete component.members;
  const html = await renderControlsPanel(component.tagName);
  assert.match(html, /<th scope="col">Attribute<\/th>/);
  assert.doesNotMatch(html, /undefined|<th scope="row">/);
});
