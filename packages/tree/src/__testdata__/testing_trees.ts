import { MultiDirectedGraph } from "graphology";
import { bfsFromNode } from "graphology-traversal";
import { NodeId, Timeseries, Tree } from "../types";
import TestingTreeConfig from "./config.json";
import TestingTreeData from "./data.json";

// Provides the Tree used as input for Assignment #2
export function testTree(): Tree {
  const tree: Tree = new MultiDirectedGraph();
  tree.import(TestingTreeConfig as any);

  // Create data lookup
  const lookup = TestingTreeData.reduce(
    (acc, curr) => {
      const { node, timeseries: table } = curr;

      const timeseries: Timeseries = [];
      for (const row of table) {
        const { date: dateStr, value } = row;
        timeseries.push({ date: dateStr, value });
      }

      acc[node] = timeseries;

      return acc;
    },
    {} as Record<NodeId, Timeseries>
  );

  bfsFromNode(tree, "total_orders_calc", (node) => {
    tree.setNodeAttribute(node, "data", lookup[node]);
  });

  return tree;
}
