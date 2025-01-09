import { Tree, TableRow, TableData } from "./types";
import {
  getRootNode,
  getArithmeticChildren,
  getSegmentationChildren,
} from "./__testdata__/util";
/**
 * Task: Given a `Tree` object, generate a table comparing data at two points in
 * time. Implement the output type so that it would be straightforward to be used
 * to render a table in the UI.
 *
 * See ASSIGNMENT-02.md for a general explanation of the graph represented by
 * the `Tree` object.
 *
 * The resulting table should have columns for each part of the arithmetic expression,
 * so `m = a + b` would have columns representing 'm', 'a', and 'b'. There should
 * be a row for each segment and another row for the unsegmented "Overall" value.
 * The two dates passed in as props should be used to extract a value from each date in the time
 * series data on the nodes.
 *
 * @param tree The `Tree` object with the data to transform into a table.
 *        (incomplete list of params)
 * @returns A `YourTableTypeOrInterfaceOrFunctionEtc` detailing segmented
 *          nodes, their data at two dates, segmentation definitions, and
 *          arithmetic connections.
 */

export function treeTable(tree: Tree, date1: string, date2: string): any {
  const table: TableData = { rows: [] };

  const totalOrder = getRootNode(tree);
  const [totalCarts, CartConv] = getArithmeticChildren(tree, totalOrder);

  const overallRow1: TableRow = {
    segment: "Overall",
    date: date1,
    totalOrders: tree
      .getNodeAttributes(getRootNode(tree))
      .data.filter((item: any) => item.date == date1)[0].value,
    cartConversion: tree
      .getNodeAttributes(CartConv)
      .data.filter((item: any) => item.date == date1)[0].value,
    totalCarts: tree
      .getNodeAttributes(totalCarts)
      .data.filter((item: any) => item.date == date1)[0].value,
  };
  table.rows.push(overallRow1);
  const overallRow2: TableRow = {
    segment: "Overall",
    date: date2,
    totalOrders: tree
      .getNodeAttributes(getRootNode(tree))
      .data.filter((item: any) => item.date == date2)[0].value,
    cartConversion: tree
      .getNodeAttributes(CartConv)
      .data.filter((item: any) => item.date == date2)[0].value,
    totalCarts: tree
      .getNodeAttributes(totalCarts)
      .data.filter((item: any) => item.date == date2)[0].value,
  };
  table.rows.push(overallRow2);

  const segmentationChildren = getSegmentationChildren(tree, totalOrder);

  let segments = segmentationChildren.map((child) => [
    child,
    ...getArithmeticChildren(tree, child),
  ]);

  for (let segment of segments) {
    let row1: TableRow = {
      segment: segment[0].split("_").at(-1) ?? null,
      date: date1,
      totalOrders: null,
      cartConversion: null,
      totalCarts: null,
    };
    let row2: TableRow = {
      segment: segment[0].split("_").at(-1) ?? null,
      date: date2,
      totalOrders: null,
      cartConversion: null,
      totalCarts: null,
    };

    for (let item of segment) {
      if (item.startsWith("total_orders")) {
        row1.totalOrders = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date1)[0].value;

        row2.totalOrders = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date2)[0].value;
      }
      if (item.startsWith("total_carts")) {
        row1.totalCarts = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date1)[0].value;

        row2.totalCarts = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date2)[0].value;
      }

      if (item.startsWith("cart_conversion")) {
        row1.cartConversion = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date1)[0].value;

        row2.cartConversion = tree
          .getNodeAttributes(item)
          .data.filter((item: any) => item.date == date2)[0].value;
      }
    }
    table.rows.push(row1);
    table.rows.push(row2);
  }
  console.log(table);
  return table;
}
