const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
      },
      height: {
        100: "550px",
        99: "545px",
      },
      margin: {
        13: "3.25rem",
      },
    },
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    plugins: [],
    purge: {
      content: ["./src/**/*.svelte"],
      enabled: production,
    },
  },
};
