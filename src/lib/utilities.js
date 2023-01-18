export function kebabToTitleCase(str) {
  var noDash = String(str).replace("-", " ");
  return noDash.replace(/(^| )(\w)/g, function (x) {
    return x.toUpperCase();
  });
}

export const isControlsReady = !!window.$docsify.componentDocs?.manifestPath;
