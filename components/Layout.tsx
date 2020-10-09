import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Box } from "@chakra-ui/core";
// import Link from 'next/link';
// import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children }: Props) => (
  <Box maxWidth="900px" mx="auto">
    <Header />

    {children}
  </Box>
);
