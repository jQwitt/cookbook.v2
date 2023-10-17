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

    it("returns false when -ng is present", () => {
      process.argv = ["", "", "-ng"];

      expect(flags.greetingEnabled()).toBe(false);
    });
  });

  describe("devEnabled", () => {
    it("returns false by default", () => {
      expect(flags.devEnabled()).toBe(false);
    });

    it("returns true when --dev is present", () => {
      process.argv = ["", "", "--dev"];

      expect(flags.devEnabled()).toBe(true);
    });

    it("returns true when -d is present", () => {
      process.argv = ["", "", "-d"];

      expect(flags.devEnabled()).toBe(true);
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
