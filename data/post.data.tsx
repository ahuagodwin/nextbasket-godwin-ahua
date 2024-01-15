"use client";


import { Images } from "@/public";


export const postData = [
    {
        id: 1,
        img: Images.Post1,
        title: "Loudest à la Madison #1 (L'integral)",
        description: `We focus on ergonomics and meeting 
        you where you work. It's only a 
        keystroke away.`,
        createdAt: "2022-01-14",
        count: 3,
        category: "Google"
    },

    {
        id: 2,
        img: Images.Post2,
        title: "Loudest à la Madison #1 (L'integral)",
        description: `We focus on ergonomics and meeting 
        you where you work. It's only a 
        keystroke away.`,
        createdAt: "2022-01-14",
        count: 3,
        category: "Trending"
    },

    {
        id: 3,
        img: Images.Post3,
        title: "Loudest à la Madison #1 (L'integral)",
        description: `We focus on ergonomics and meeting 
        you where you work. It's only a 
        keystroke away.`,
        createdAt: "2022-01-14",
        count: 3,
        category: "New"
    },
];

export const postCategory = [
    { name: "Google"},
    { name: "Trending"},
    { name: "New" },
];