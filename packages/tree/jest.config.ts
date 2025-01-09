export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true, // Ignore TypeScript errors and treat them as warnings
      },
    },
  },
};
