# ASSIGNMENT 02

The goal of this assignment is to manipulate a graph structure that models metrics and transform the graph data into a tabular representation suitable for analysis or reporting. 

The resulting table will have a similar structure to the following but feel free to modify as you see fit to present the data.

|               | Total Orders | Cart Conversion | Total Carts |
| ------------- | ------------ | --------------- | ----------- |
| Overall       |              |                 |             |
| New York      |              |                 |             |
| Boston        |              |                 |             |
| Chicago       |              |                 |             |
| Los Angeles   |              |                 |             |
| San Francisco |              |                 |             |

If it looks like you'll be unable to complete the full exercise in the time you're able to allot, please focus on depth rather than breadth - that is, focus on one part of the exercise and do it really well.

Below are some tips:

- Understand the `MultiDirectedGraph` type from the `graphology` library, focusing on how this exercise's node and edge types (`TreeNode` and `TreeEdge`) would be represented in a `graphology` graph.

- There are some functions in `util.ts` that might help you start navigating the tree.

- Carefully review the type definitions provided (`types.ts`), focusing on how these types exist within a `graphology` graph and how the node and edge relationships within a graph contain additional information.

- Pay special attention to the `Segment` type, as it plays a crucial role in defining how nodes are categorized or grouped within the graph. You'll need to identify and extract values from nodes connected by an arithmetic edge to the segmented nodes. Choose how the date will be determined or accepted as input.

Understanding the provided graph:

- The graph provided models an arithmetic expression. To model the expression `m = a + b`, the graph would have a node `m` with arithmetic edges to nodes `a` and `b`. 

- The graph contains versions of `m`, `a`, and `b` based on how the data might be segmented. If `a` represents the total count of a metric, then segmenting `a` by an attribute would provide a count per attribute value (the difference between `select count(*) from table` vs `select attribute, count(*) from table group by attribute`). The segmented instances of `m` are attached with segmentation edges and have corresponding `a` and `b` nodes attached with arithmetic edges.

- Each node has a "data" property that contains the node's time series data.


### Extract graph data into a tabular format

Implement the `treeTable` function in `table.ts` to transform a tree represented by an instance of the `Tree` type into your `YourTableTypeOrInterfaceOrFunctionEtc` type consistent with the constraints detailed in the TSDoc comment attached to `treeTable`.

- This part of the assignment will take place within the `packages/tree` directory of your project setup.

- Implement unit tests that validate your algorithm and consider how different arithmetic expression and segmentation might affect your implementation.
