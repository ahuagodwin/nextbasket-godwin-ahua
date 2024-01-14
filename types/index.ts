

import { ImageLoader, StaticImageData } from "next/image";
import React, { HTMLAttributes, MouseEventHandler, SVGAttributes, SyntheticEvent } from "react"
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
    height?: number | `${number}` | undefined;
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
    description?: string;
    img?: string | StaticImageData;
    color?: string
    payload?: string;
    amount?: number
}

export interface DataProps {
    data?: Array<User>
}

export interface PostProps {
    data?: Array<any> | null | undefined
    category?: Array<any> | null | undefined
}


export interface TypesProps {
    className?: string,
    id?: string,
    key?: number,
    styles?: HTMLAttributes<HTMLDivElement>,
    children?: any;
    container?: boolean,
    spacing?: number;
    item?: boolean;
    xs?: number
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
    readonly?: boolean;
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
}