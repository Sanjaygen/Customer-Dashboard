"use client";

import { ReactNode } from "react";
import DashboardLayout from "../../layout/Layout";

export type LayoutProps = {
  children: ReactNode;
};

const DocumentLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DocumentLayout;