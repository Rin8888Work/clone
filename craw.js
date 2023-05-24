const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function downloadFiles(links, outputFolder) {
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const fileName = path.basename(link); // Use the original file name from the URL

    try {
      const response = await axios.get(link, { responseType: "arraybuffer" });
      const filePath = path.join(outputFolder, fileName);
      fs.writeFileSync(filePath, response.data);

      console.log(`File ${fileName} downloaded successfully.`);
    } catch (error) {
      console.error(`Error downloading file from ${link}:`, error.message);
    }
  }
}
// Usage
const ARR = [
  "https://github.githubassets.com/assets/light-0946cdc16f15.css",
  "https://github.githubassets.com/assets/dark-3946c959759a.css",
  "https://github.githubassets.com/assets/light-0946cdc16f15.css",
  "https://github.githubassets.com/assets/dark-3946c959759a.css",
  "https://github.githubassets.com/assets/dark_dimmed-9b9a8c91acc5.css",
  "https://github.githubassets.com/assets/dark_high_contrast-11302a585e33.css",
  "https://github.githubassets.com/assets/dark_colorblind-1a4564ab0fbf.css",
  "https://github.githubassets.com/assets/light_colorblind-12a8b2aa9101.css",
  "https://github.githubassets.com/assets/light_high_contrast-5924a648f3e7.css",
  "https://github.githubassets.com/assets/light_tritanopia-05358496cb79.css",
  "https://github.githubassets.com/assets/dark_tritanopia-aad6b801a158.css",
  "https://github.githubassets.com/assets/primer-primitives-fb1d51d1ef66.css",
  "https://github.githubassets.com/assets/primer-0e3420bbec16.css",
  "https://github.githubassets.com/assets/global-0d04dfcdc794.css",
  "https://github.githubassets.com/assets/github-c7a3a0ac71d4.css",
  "https://github.githubassets.com/assets/dashboard-7197964704de.css",
  "https://github.githubassets.com/assets/discussions-6ad34c16e040.css",
  "https://github.githubassets.com/assets/site-2e14bc28cc0a.css",
  "https://github.githubassets.com/assets/home-3bba68f788b5.css",
  "https://github.githubassets.com/assets/wp-runtime-123dfe71a824.js",
  "https://github.githubassets.com/assets/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-ae93d3fba59c.js",
  "https://github.githubassets.com/assets/ui_packages_failbot_failbot_ts-e38c93eab86e.js",
  "https://github.githubassets.com/assets/environment-de3997b81651.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_selector-observer_dist_index_esm_js-2646a2c533e3.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_relative-time-element_dist_index_js-99e288659d4f.js",
  "https://github.githubassets.com/assets/vendors-node_modules_fzy_js_index_js-node_modules_github_markdown-toolbar-element_dist_index_js-e3de700a4c9d.js",
  "https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_auto-complete-element-5b3870-ff38694180c6.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_text-ex-3415a8-7ecc10fb88d0.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-8873b7-5771678648e0.js",
  "https://github.githubassets.com/assets/vendors-node_modules_primer_view-components_app_components_primer_primer_js-node_modules_gith-3af896-d8cf3e5f5813.js",
  "https://github.githubassets.com/assets/github-elements-6f05fe60d18a.js",
  "https://github.githubassets.com/assets/element-registry-8f404beaf269.js",
  "https://github.githubassets.com/assets/vendors-node_modules_lit-html_lit-html_js-9d9fe1859ce5.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2-424aa982deef.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-ba0e4d5b3207.js",
  "https://github.githubassets.com/assets/vendors-node_modules_color-convert_index_js-node_modules_github_jtml_lib_index_js-40bf234a19dc.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-52dc4b-e1e33bfc0b7e.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-743f1d-1b20d530fbf0.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_updatable-content_ts-dadb69f79923.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_behaviors_keyboard-shortcuts-helper_ts-app_assets_modules_github_be-f5afdb-3f05df4c282b.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_code-editor_ts-app_assets_-8128e1-65aa849c94d7.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_sticky-scroll-into-view_ts-1d145b63ed56.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-2e2258-dae7d38e0248.js",
  "https://github.githubassets.com/assets/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-c97eacdef68a.js",
  "https://github.githubassets.com/assets/behaviors-d1b433c1b6c2.js",
  "https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-623425af41e1.js",
  "https://github.githubassets.com/assets/notifications-global-4dc6f295cc92.js",
  "https://github.githubassets.com/assets/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-b4a243-6b0c4317c3ae.js",
  "https://github.githubassets.com/assets/marketing-2db4382316fc.js",
  "https://github.githubassets.com/assets/home-0369a2a6b0c5.js",
  "https://github.githubassets.com/assets/vendors-node_modules_github_webgl-globe_dist_js_main_js-13e563907b63.js",
  "https://github.githubassets.com/assets/webgl-globe-0fd6a24e0678.js",
  "https://github.githubassets.com/assets/home-campaign-d4421b93e1ca.css",
  "https://github.githubassets.com/static/fonts/github/mona-sans.woff2",
  "https://github.com/fluidicon.png",
];
const outputFolder = "./public/assets/css-and-js"; // Specify the output folder here

downloadFiles(ARR, outputFolder);
