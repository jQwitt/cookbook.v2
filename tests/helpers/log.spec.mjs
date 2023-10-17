import * as log from "../../src/helpers/log.js";

describe("log.js", () => {
  it("logs greeting", () => {
    expect(log.greet()).not.toBe(null);
  });

  it("logs info", () => {
    expect(log.info("test")).not.toBe(null);
  });

  it("logs dev", () => {
    expect(log.dev("test")).not.toBe(null);
  });

  describe("style presets", () => {
    it("styles passion", () => {
      expect(log.passion("test")).not.toBe(null);
    });

    it("styles success", () => {
      expect(log.success("test")).not.toBe(null);
    });
  });
});
