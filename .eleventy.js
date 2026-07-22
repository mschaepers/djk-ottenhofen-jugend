module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("uebungen", (api) =>
    api.getFilteredByGlob("src/uebungen/*.md")
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || "", "de"))
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
