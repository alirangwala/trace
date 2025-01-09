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
    const table = treeTable(testTree(), [date1, date2]);

    expect(table).toEqual({
      rows: [
        {
          segment: "Overall",
          date: "2021-12-27T00:00:00.000Z",
          totalOrders: 4281.652276959539,
          cartConversion: 0.7203318097172846,
          totalCarts: 5944,
        },
        {
          segment: "Boston",
          date: "2021-12-27T00:00:00.000Z",
          totalOrders: 33,
          cartConversion: 0.7021276595744681,
          totalCarts: 47,
        },
        {
          segment: "Chicago",
          date: "2021-12-27T00:00:00.000Z",
          totalOrders: 99.7734375,
          cartConversion: 0.7734375,
          totalCarts: 129,
        },
        {
          segment: "New_York",
          date: "2021-12-27T00:00:00.000Z",
          totalOrders: 3110.391891891892,
          cartConversion: 0.7346225535880708,
          totalCarts: 4234,
        },
        {
          segment: "Overall",
          date: "2022-01-03T00:00:00.000Z",
          totalOrders: 26840.033683840542,
          cartConversion: 0.7807328432090448,
          totalCarts: 34378,
        },
        {
          segment: "Boston",
          date: "2022-01-03T00:00:00.000Z",
          totalOrders: 333.40435835351093,
          cartConversion: 0.801452784503632,
          totalCarts: 416,
        },
        {
          segment: "Chicago",
          date: "2022-01-03T00:00:00.000Z",
          totalOrders: 957.6485568760611,
          cartConversion: 0.8234295415959253,
          totalCarts: 1163,
        },
        {
          segment: "New_York",
          date: "2022-01-03T00:00:00.000Z",
          totalOrders: 19647.431589170817,
          cartConversion: 0.7892436566711182,
          totalCarts: 24894,
        },
      ],
    });
  });
});
