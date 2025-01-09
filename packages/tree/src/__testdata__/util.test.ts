import { testTree } from "./testing_trees";
import { getArithmeticChildren, getRootNode } from "./util";

describe("testing_tree_util", () => {
  test("should get the root node", () => {
    const tree = testTree();
    expect(getRootNode(tree)).toEqual("total_orders_calc");
  });

  test("should get arithmetic children", () => {
    const tree = testTree();
    expect(getArithmeticChildren(tree, "total_orders_calc")).toEqual([
      "cart_conversion",
      "total_carts",
    ]);
  });
});
