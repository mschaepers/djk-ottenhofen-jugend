const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("uebungen", (api) =>
    api.getFilteredByGlob("src/uebungen/*.md")
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "", "de"))
  );

  return {
    pathPrefix: "/djk-ottenhofen-jugend/",
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
