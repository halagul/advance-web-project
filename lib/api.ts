// // const STRAPI_URL = 'http://localhost:1337'; // change if using deployed Strapi

// // export async function getHomepage() {
// //   const res = await fetch(`${STRAPI_URL}/homepage?populate=*`);
// //   return (await res.json()).data;
// // }

// // export async function getAccommodations() {
// //   const res = await fetch(`${STRAPI_URL}/accommodations?populate=*`);
// //   return (await res.json()).data;
// // }
// // Define TypeScript interfaces to match your Strapi data shape

// interface ImageAttributes {
//     url: string;
//   }
  
//   interface ImageData {
//     data: {
//       attributes: ImageAttributes;
//     } | null;
//   }
  
//   interface LocationAttributes {
//     city: string;
//   }
  
//   interface LocationData {
//     data: {
//       attributes: LocationAttributes;
//     } | null;
//   }
  
//   interface AccommodationAttributes {
//     slug: string;
//     title: string;
//     price: number;
//     image: ImageData;
//     location: LocationData;
//   }
  
//   export interface Accommodation {
//     id: number;
//     attributes: AccommodationAttributes;
//   }
  
//   interface ApiResponse<T> {
//     data: T;
//     meta?: unknown;
//   }
  
//   // Fetch accommodations data from Strapi
//   export async function getAccommodations(): Promise<Accommodation[]> {
//     const res = await fetch(`${process.env.STRAPI_URL}/api/accommodations?populate=*`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch accommodations");
//     }
//     const json: ApiResponse<Accommodation[]> = await res.json();
//     return json.data;
//   }
  
//   // Define homepage data shape based on your Strapi single type 'homepage'
//   interface HomepageAttributes {
//     title: string;
//     tagline: string;
//     heroImage: ImageData;
//   }
  
//   interface Homepage {
//     data: {
//       id: number;
//       attributes: HomepageAttributes;
//     };
//   }
  
//   export async function getHomepage(): Promise<Homepage["data"]> {
//     const res = await fetch(`${process.env.STRAPI_URL}/api/homepage?populate=*`);
//     if (!res.ok) {
//       throw new Error("Failed to fetch homepage data");
//     }
//     const json: Homepage = await res.json();
//     return json.data;
//   }
  
// const STRAPI_URL = process.env.STRAPI_URL;

// if (!STRAPI_URL) {
//   throw new Error("Missing STRAPI_URL environment variable");
// }

// export async function getHomepage() {
//   const res = await fetch(`${STRAPI_URL}/api/homepage?populate=*`);
//   if (!res.ok) throw new Error("Failed to fetch homepage data");
//   const json = await res.json();
//   return json.data;
// }

// export async function getAccommodations() {
//   const res = await fetch(`${STRAPI_URL}/api/accommodations?populate=*`);
//   if (!res.ok) throw new Error("Failed to fetch accommodations");
//   const json = await res.json();
//   return json.data;
// }
// const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

// export async function getHomepage() {
//   const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`);
//   if (!res.ok) {
//     throw new Error(`Failed to fetch homepage, status: ${res.status}`);
//   }
//   const json = await res.json();
//   return json.data;
// }

// export async function getAccommodations() {
//   const res = await fetch(`${STRAPI_URL}/api/accommodations?populate=*`);
//   if (!res.ok) {
//     throw new Error(`Failed to fetch accommodations, status: ${res.status}`);
//   }
//   const json = await res.json();
//   return json.data;
// }
// lib/api.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getHomepage() {
  const res = await fetch(`${STRAPI_URL}/api/home-page?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch homepage data");
  const data = await res.json();
  return data.data;
}

export async function getAccommodations() {
  const res = await fetch(`${STRAPI_URL}/api/accommodations?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch accommodations");
  const data = await res.json();
  return data.data;
}


