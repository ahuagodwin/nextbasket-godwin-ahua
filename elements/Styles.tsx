"use client";

import {
  AnchorProps,
  ButtonProps,
  ImageProps,
  InputProps,
  RatingProps,
  TypesProps,
} from "@/types";
import { Typography, Box, Grid, Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const View = (props: TypesProps) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  );
};

export const Padding = ({
  className,
  key,
  id,
  style,
  children,
}: TypesProps) => {
  return (
    <div
      className={`app_padding ${className}`}
      key={key}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

export const Container = ({
  className,
  key,
  id,
  style,
  children,
}: TypesProps) => {
  return (
    <div
      className={`app_container ${className}`}
      key={key}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
};

export const Section = ({
  className,
  key,
  id,
  style,
  children,
}: TypesProps) => {
  return (
    <section className={className} key={key} id={id} style={style}>
      {children}
    </section>
  );
};

export const Card = (props: TypesProps) => {
  return <section {...props}>{props.children}</section>;
};

export const Text = (props: TypesProps) => {
  return (
    <Typography
      className={props.className}
      key={props.key}
      id={props.id}
      style={props.style}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export const Span = (props: TypesProps) => {
  return (
    <span {...props}>
      {props.children}
    </span>
  );
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.stylestype}
      key={props.key}
      id={props.size}
      type={props.htmlType}
      onClick={props.handleClick}
    >
      {props.loading ? (
        <Span id="spin">{props.icon}</Span>
      ) : (
        props.icon && <Span>{props.icon}</Span>
      )}
      {props.title}
    </button>
  );
};

export const CustomInput = (props: InputProps) => {
  return (
    <input
      className={props.stylestype}
      type={props.htmlType}
      id={props.styleSize}
      onChange={props.onChange}
      {...props}
    />
  );
};

export const Boxs = (props: TypesProps) => {
  return <Box {...props}>{props.children}</Box>;
};

export const FlexGrid = (props: TypesProps) => {
  return <Grid className={`${props.isGrid ? props.gridType : null} ${props.isBorder ? " bordered" : null}`}>{props.children}</Grid>;
};

export const Anchor = (props: AnchorProps) => {
  return (
    <Link href={props.as} {...props}>
      {props.children}
    </Link>
  );
};

export const Img = (props: ImageProps) => {
  return <Image {...props} />;
};

export const Ratings = (props: RatingProps) => {
  return (
    <Rating {...props} />
  );
};
