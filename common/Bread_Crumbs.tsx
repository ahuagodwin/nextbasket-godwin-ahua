import { Icons } from "@/constants";
import { Span, View } from "@/elements";
import { Breadcrumbs } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const Bread_Crumbs = () => {
  const { id, category } = useParams();

  return (
    <>
      <Breadcrumbs
        className="single-breadcrumbs"
        separator={<Icons.ArrowRight />}
        aria-label="breadcrumb"
      >
        <View>Home </View>
        <Span>Shop </Span>
        <Span>{category}</Span> <Span>{id}</Span>
      </Breadcrumbs>
    </>
  );
};

export default Bread_Crumbs;
