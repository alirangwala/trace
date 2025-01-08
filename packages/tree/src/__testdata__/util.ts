import {EdgeType, Tree} from "../types";

// Given a tree, return the root node id
export function getRootNode(tree: Tree): string {
    const nodes = tree.filterNodes((node) => tree.inDegree(node) == 0);
    return nodes[0]
}

// Get the arithmetic children for a given node id.
export function getArithmeticChildren(tree: Tree, node: string): string[] {
    return tree.filterOutboundEdges(
        node,
        (_edge, attributes) => attributes.type == EdgeType.Arithmetic
    ).map(
        (edgeId) => tree.target(edgeId)
    );
}
