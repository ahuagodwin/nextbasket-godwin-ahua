"use client"

// base url configuration

const baseUrl = "https://dummyjson.com"
export const app = {
    apiBaseUrl: process.env.NEXT_PUBLIC_BASE_URL || baseUrl,
    company: {
        name: 'Next Basket',
        url: 'nextbasket.com/ng',
        full_url: 'https://nextbasket.com/ng/',
    }
}
