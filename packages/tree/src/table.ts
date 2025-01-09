import {
  Tree,
  OperatorNode,
  TableRow,
  TableData,
  NodeType,
  Timeseries,
} from "./types";
import { getRootNode, getArithmeticChildren } from "./__testdata__/util";
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

// export type TableRow = {
//   segment: string;
//   date: string;
//   totalOrders: number;
//   cartConversion: number;
//   totalCarts: number;
// };

export function treeTable(tree: Tree, date1: string, date2: string): any {
  console.log();
  const table = { rows: [] };

  console.log(getRootNode(tree));
  console.log(tree.getNodeAttributes(getRootNode(tree)));

  // const totalOrder = getRootNode(tree);
  // const [totalCarts, CartConv] = getArithmeticChildren(tree, totalOrderNode)

  // const overall_rows = tree.getNodeAttributes(getRootNode(tree)).timeseries.filter((item: any) => item.date == date)

  //   row: TableRow = {
  //       "segment": "Overall",
  //       "totalOrders": data.
  //       "cartConversion": number,
  //       "totalCarts": number,
  //     }
  //   root_node

  return date1 + date2;
}
