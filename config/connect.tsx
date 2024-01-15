
"use client"

import { app } from '@/api/app';
import axios from 'axios';

export const publicRequest = axios.create({
  baseURL: app.apiBaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});



