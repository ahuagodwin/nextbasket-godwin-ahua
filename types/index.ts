

import { ImageLoader, StaticImageData } from "next/image";
import React, { HTMLAttributes, MouseEventHandler, ReactNode, SVGAttributes, SyntheticEvent } from "react"
import type { UrlObject } from 'url';
type Url = string | UrlObject;


// layout types
export interface LayoutProps {
    children: any
}

export interface ImageProps {
    src: string | StaticImageData;
    alt: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` |  undefined;
    fill?: boolean | undefined;
    loader?: ImageLoader | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    blurDataURL?: string | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
    className?: string
}

export interface User {
    id?: number;
    name?: string;
    title?: string;
    description?: string;
    img?: string | StaticImageData;
    thumbnail?: string | StaticImageData;
    color?: string
    payload?: string;
    amount?: number
    price?: number
    discountPercentage?: number
    category?: string
}

export interface DataProps {
    data?: Array<User>
}

export interface PostProps {
    data?: Array<any> | null | undefined
    category?: Array<any> | null | undefined
    loading?: boolean
}

export interface CustomStyles {
    background?: string;

  }

export interface TypesProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    id?: string,
    key?: number,
    style?: CustomStyles
    children?: any;
    container?: boolean,
    spacing?: number;
    item?: boolean;
    xs?: number
    isGrid?: boolean
    isBorder?: boolean
    gridType?: "grid2" | "grid3" | "grid4" | "grid5" | "grid6"
    colors?: "#23A6F0" | "#2DC071" | "#E77C40" | "#252B42" | string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    handleCart?: MouseEventHandler<SVGSVGElement>
}


// button types
export interface ButtonProps {
    loading?: boolean;
    key?: number;
    title?: string,
    htmlType?: "button" | "submit" | "reset" | undefined
    stylesType?: "primary" | "secondary" | undefined
    size?: "small" | "large" | "medium" | "small-x" | "medium-x" | undefined
    handleClick?: MouseEventHandler<HTMLButtonElement>
    icon?: SVGAttributes<SVGAElement>;
}


// input types
export interface InputProps {
    htmlType?: "text" | "email" | "password" | "search" | "checkbox" | "radio";
    value?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    key?: number;
    stylesType?: "primary" | "secondary" | "default" | undefined
    variant?: "standard" | "filled" | "outlined"
    styleSize?: "small" | "medium" | "large" | "small-x" | "medium-x";
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    color?:	'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'
    error?: boolean;
    fullWidth?: boolean;
}


// icon types
export interface IconSizeProps {
    size?: number;
    className?: string;
}


// link ( url ) types
export interface AnchorProps {
    as:  Url;
    className?: string;
    key?: number;
    id?: string;
    children?: any;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}


export interface HeroProps {
    title?: string;
    quantity?: string;
    text?: string;
    img?: string | StaticImageData;
    as: string
    variant?: "title-small" | "title-medium"
}


export interface RatingProps {
    readOnly?: boolean;
    name?: "simple-controlled" | "read-only" | "disabled" | "no-value"
    disabled?: boolean
    value?: number | null | undefined;
    onChange?: (event: SyntheticEvent<Element, Event>, value: number | null) => void;
    className?: string;
    key?: number;
}


export interface HeadingProps {
    titleSmall?: string
    title?: string
    desc?: string
    className?: string
    isBorder?: boolean
}

export interface LoadingProps {
    loading?: boolean;
  }

  export interface ModalProps {
    open?: boolean;
    close?: () => void;
    children?: ReactNode
  }