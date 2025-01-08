import { Tree, YourTableTypeOrInterfaceOrFunctionEtc } from "./types";

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
export function treeTable(
  tree: Tree,
  other: any,
  params: any,
  if_necessary: any
): YourTableTypeOrInterfaceOrFunctionEtc {
  throw "implement me";
}
