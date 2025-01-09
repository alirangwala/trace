import { treeTable } from "../table";
import { testTree } from "./testing_trees";

describe("testing_trees", () => {
  test("should assemble the testing tree instance", () => {
    const tree = testTree();

    expect(tree.order).toEqual(12);
    expect(tree.size).toEqual(11);

    for (const entry of tree.nodeEntries()) {
      const { attributes } = entry;
      expect(attributes.data).toHaveLength(112);
    }
  });

  test("Should output table given 2 dates", () => {
    const date1 = "2021-12-27T00:00:00.000Z";
    const date2 = "2022-01-03T00:00:00.000Z";
    const table = treeTable(testTree(), date1, date2);

    expect(table).toEqual(date1 + date2);
  });
});
