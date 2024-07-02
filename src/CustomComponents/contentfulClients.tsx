// src/contentfulClient.ts
import { createClient } from 'contentful';

const client = createClient({
  space: 'y3ad1xrwmaa6', // Your Space ID
  accessToken: 'Q8CRoLwz8hzhlYcuFvT4rtYeNCvuj-qJ2fJXb_1n5vg', // Your Content Delivery API - access token
});

export default client;
