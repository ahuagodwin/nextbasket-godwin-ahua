"use client"

import { Icons } from "@/constants";
import { Span, View } from "@/elements";
import { formattedCategory, formattedTitle } from "@/utils/helper";
import { Breadcrumbs } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const Bread_Crumbs = () => {
  const { title, category } = useParams();

  return (
    <>
      <Breadcrumbs
        className="single-breadcrumbs"
        separator={<Icons.ArrowRight />}
        aria-label="breadcrumb"
      >
        <View>Home </View>
        <Span>Shop </Span>
        <Span>
        {typeof formattedCategory === 'function' && decodeURIComponent(formattedCategory(category as string))} 
        </Span>
        <Span>
          {typeof formattedTitle === 'function' && decodeURIComponent(formattedTitle(title as string))}
        </Span>
      </Breadcrumbs>
    </>
  );
};

export default Bread_Crumbs;
