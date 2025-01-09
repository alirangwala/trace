import React from "react";
import { TableData } from "../../../../tree/src/types";
import styles from "./TreeTable.module.css";

export interface TreeTableProps {
  data: TableData;
}
export const TreeTable = ({ data }: TreeTableProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>Segment</th>
            <th className={styles.headerCell}>Date</th>
            <th className={styles.headerCell}>Total Orders</th>
            <th className={styles.headerCell}>Cart Conversion</th>
            <th className={styles.headerCell}>Total Carts</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.cell}>{row.segment || "N/A"}</td>
              <td className={styles.cell}>
                {new Date(row.date).toLocaleDateString()}
              </td>
              <td className={styles.cell}>
                {row.totalOrders?.toFixed(2) || "N/A"}
              </td>
              <td className={styles.cell}>
                {(row.cartConversion
                  ? (row.cartConversion * 100).toFixed(2)
                  : "N/A") + "%"}
              </td>
              <td className={styles.cell}>{row.totalCarts || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
