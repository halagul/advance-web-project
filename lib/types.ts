// lib/types.ts

export interface ImageData {
    data: {
      attributes: {
        url: string;
      };
    } | null;
  }
  
  export interface Location {
    data: {
      attributes: {
        city: string;
      };
    };
  }
  
  export interface AccommodationAttributes {
    slug: string;
    title: string;
    price: number;
    image: ImageData;
    location: Location;
  }
  
  export interface Accommodation {
    id: number;
    attributes: AccommodationAttributes;
  }
  
  export interface HomepageAttributes {
    title: string;
    tagline: string;
    heroImage: ImageData;
  }
  
  export interface Homepage {
    data: {
      attributes: HomepageAttributes;
    };
  }
  