import * as format from "../../src/helpers/format.js";

describe("format.js", () => {
  describe("formatChoices", () => {
    it("returns empty array for empty arguments", () => {
      const data = [];

      const result = format.formatChoices(data);

      expect(result).toEqual([]);
    });

    it("returns formatted choice for keys", () => {
      const data = ["A", "B"];
      const expected = [
        { name: "A", value: "A" },
        { name: "B", value: "B" },
      ];

      const result = format.formatChoices(data);

      expect(result).toEqual(expected);
    });
  });

  describe("asSeconds", () => {
    it("formats milleseconds", () => {
      const data = 100;
      const expected = "100ms";

      const result = format.asSeconds(data);

      expect(result).toEqual(expected);
    });

    it("formats seconds with rounding", () => {
      const data = 32461;
      const expected = "32s";

      const result = format.asSeconds(data);

      expect(result).toEqual(expected);
    });
  });
});
