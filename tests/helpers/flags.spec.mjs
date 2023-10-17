import * as flags from "../../src/helpers/flags.js";

describe("flags.js", () => {
  const originalArgs = process.argv;

  afterEach(() => {
    process.argv = originalArgs;
  });

  describe("greetingEnabled", () => {
    it("returns true by default", () => {
      expect(flags.greetingEnabled()).toBe(true);
    });

    it("returns false when --no-greeting is present", () => {
      process.argv = ["", "", "--no-greeting"];

      expect(flags.greetingEnabled()).toBe(false);
    });
  });

  describe("getNameFromFlag", () => {
    it("returns null by default", () => {
      expect(flags.getNameFromFlag()).toBe(null);
    });

    it("returns the name passed to --name=", () => {
      process.argv = ["", "", "--name=test"];

      expect(flags.getNameFromFlag()).toBe("test");
    });
  });
});
