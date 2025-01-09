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

function getValueByDate(
  tree: Tree,
  nodeId: string,
  date: string
): number | null {
  const node = tree.getNodeAttributes(nodeId);
  const item = node.data.find((x) => x.date === date);
  return item?.value ?? null;
}

function getSegmentName(nodeId: string): string {
  // only the segments have string __eq__
  const match = nodeId.match(/__eq__(.+)$/);
  if (!match) return "Overall";
  return match[1];
}

function nodeToRow(
  tree: Tree,
  node: string,
  date: string,
  visitedNodes: Set<string> = new Set()
) {
  const rows: TableRow[] = [];
  const segmentName = getSegmentName(node);
  // base case
  if (visitedNodes.has(segmentName)) {
    return rows;
  }
  visitedNodes.add(segmentName);

  const [cartConvNode, totalCartsNode] = getArithmeticChildren(tree, node);

  rows.push({
    segment: segmentName,
    date: date,
    totalOrders: getValueByDate(tree, node, date),
    cartConversion: getValueByDate(tree, cartConvNode, date),
    totalCarts: getValueByDate(tree, totalCartsNode, date),
  });

  const segmentedNodes = getSegmentationChildren(tree, node);

  for (const childNode of segmentedNodes) {
    rows.push(...nodeToRow(tree, childNode, date, visitedNodes));
  }

  return rows;
}

export function treeTable(tree: Tree, dates: string[]): TableData {
  const rootNode = getRootNode(tree);
  const table: TableData = { rows: [] };

  for (const date of dates) {
    table.rows.push(...nodeToRow(tree, rootNode, date));
  }
  return table;
}
