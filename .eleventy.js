const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginSass, {});
    eleventyConfig.addPassthroughCopy("CNAME");
    return {
    }
  };
