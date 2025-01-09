import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TreeTable } from "./TreeTable";
import { treeTable } from "../../../../tree/src/table";
import { testTree } from "../../../../tree/src/__testdata__/testing_trees";
const meta = {
  component: TreeTable,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TreeTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const date1 = "2021-12-27T00:00:00.000Z";
const date2 = "2022-01-03T00:00:00.000Z";
export const Primary: Story = {
  args: {
    data: treeTable(testTree(), [date1, date2]),
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};
