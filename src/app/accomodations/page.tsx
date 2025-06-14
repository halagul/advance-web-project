
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function AccommodationsPage() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Replace with your actual data fetching logic
//       const res = await fetch('http://localhost:1337/api/accommodations');
//       const json = await res.json();
//       setData(json.data);
//     };
//     fetchData();
//   }, []);

//   const baseUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"; // Base URL without parameters

//   // Function to generate optimized image URL
//   const getOptimizedImageUrl = (width: number, quality: number = 80, format: string = 'webp') => {
//     return `${baseUrl}?auto=format&fit=crop&w=${width}&q=${quality}&fm=${format}`;
//   };

//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Explore Our Accommodations</h1>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {data.map((item: any) => (
//           <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col">
//             <div className="relative w-full h-64">
//               <picture>
//                 <source
//                   srcSet={`
//                     ${getOptimizedImageUrl(400)} 400w,
//                     ${getOptimizedImageUrl(800)} 800w,
//                     ${getOptimizedImageUrl(1200)} 1200w
//                   `}
//                   sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
//                   type="image/webp"
//                 />
//                 <img
//                   src={getOptimizedImageUrl(800, 60, 'jpeg')} // Fallback for browsers that don't support <picture>
//                   alt={item.title}
//                   className="w-full h-full object-cover object-center"
//                   loading="lazy"
//                   style={{ aspectRatio: '4/3' }} // Enforce aspect ratio
//                 />
//               </picture>
//             </div>
//             <div className="p-6 flex flex-col flex-grow">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h2>
//               <p className="text-gray-700 mb-4">{item.descrip || 'No description available.'}</p>
//               <div className="flex items-center mb-3">
//                 <span className="mr-2 text-gray-500">📍</span>
//                 <span className="text-gray-600">{item.location || 'Unknown'}</span>
//               </div>
//               <div className="flex items-center mb-4">
//                 <span className="mr-2 text-gray-500">💰</span>
//                 <span className="text-gray-600">${item.pricePerNight} / night</span>
//               </div>
//               <div className="flex justify-between items-center mt-auto">
//                 <Link
//                   href={`/accomodations/${item.documentId}`}
//                   className="text-blue-500 hover:text-blue-700 transition-colors duration-200 underline"
//                 >
//                   View Details
//                 </Link>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



// "use client";

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// interface ImageFormat {
//   url: string;
// }

// interface ImageType {
//   url: string;
//   formats: {
//     medium?: ImageFormat;
//     small?: ImageFormat;
//     thumbnail?: ImageFormat;
//   };
// }

// interface Accommodation {
//   id: number;
//   documentId: string;
//   slug: string;
//   title: string;
//   descrip: string | null;
//   location: string | null;
//   pricePerNight: number;
//   images: ImageType[];
// }

// export default function AccommodationsPage() {
//   const [data, setData] = useState<Accommodation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedLocation, setSelectedLocation] = useState('all');

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch('http://localhost:1337/api/accommodations?populate=images');
//         const json = await res.json();

//         const formatted = json.data.map((item: any) => ({
//           id: item.id,
//           documentId: item.documentId,
//           slug: item.slug,
//           title: item.title,
//           descrip: item.descrip,
//           location: item.location,
//           pricePerNight: item.pricePerNight,
//           images: item.images || [],
//         }));

//         setData(formatted);
//       } catch (error) {
//         console.error('Error fetching accommodations:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   const filteredData =
//     selectedLocation === 'all'
//       ? data
//       : data.filter((item) => item.location?.toLowerCase().includes(selectedLocation.toLowerCase()));

//   const uniqueLocations = Array.from(new Set(data.map((item) => item.location).filter(Boolean)));

//   return (
//     <main className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore Our Accommodations</h1>

//       <aside className="mb-8 flex justify-center flex-wrap gap-4">
//         <button
//           onClick={() => setSelectedLocation('all')}
//           className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
//             selectedLocation === 'all'
//               ? 'bg-blue-600 text-white'
//               : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//           }`}
//         >
//           All
//         </button>
//         {uniqueLocations.map((loc) => (
//           <button
//             key={loc}
//             onClick={() => setSelectedLocation(loc || '')}
//             className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
//               selectedLocation === loc
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//             }`}
//           >
//             {loc}
//           </button>
//         ))}
//       </aside>

//       {loading ? (
//         <div className="text-center text-gray-500">Loading accommodations...</div>
//       ) : filteredData.length === 0 ? (
//         <div className="text-center text-gray-600">No accommodations found.</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredData.map((item) => {
//             const image = item.images?.[0];
//             const imageUrl = image?.formats?.medium?.url || image?.url;
//             const fullUrl = imageUrl ? `http://localhost:1337${imageUrl}` : null;

//             return (
//               <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md transition">
//                 <div className="relative w-full h-48">
//                   {fullUrl ? (
//                     <Image
//                       src={fullUrl}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                       sizes="(max-width: 768px) 100vw, 33vw"
//                     />
//                   ) : (
//                     <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
//                       No image
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
//                   <p className="text-gray-600 text-sm mb-2">{item.location}</p>
//                   <p className="text-gray-700 text-sm mb-2 line-clamp-2">{item.descrip || 'No description available.'}</p>
//                   <p className="text-gray-800 font-semibold mb-2">${item.pricePerNight} / night</p>
//                   <Link
//                     href={`/accomodations/${item.documentId}`}
//                     className="text-blue-600 underline hover:text-blue-800 text-sm"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </main>
//   );
// }
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageFormat {
  url: string;
}

interface ImageType {
  url: string;
  formats: {
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

interface Accommodation {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  descrip: string | null;
  location: string | null;
  pricePerNight: number;
  images: ImageType[];
  numberOfBedrooms?: number;
}

export default function AccommodationsPage() {
  const [data, setData] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [minBeds, setMinBeds] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:1337/api/accommodations?populate=images');
        const json = await res.json();

        const formatted = json.data.map((item: any) => ({
          id: item.id,
          documentId: item.documentId,
          slug: item.slug,
          title: item.title,
          descrip: item.descrip,
          location: item.location,
          pricePerNight: item.pricePerNight,
          images: item.images || [],
          numberOfBedrooms: item.numberOfBedrooms || 0,
        }));

        setData(formatted);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const uniqueLocations = Array.from(new Set(data.map((item) => item.location).filter(Boolean)));

  const filteredData = data.filter((item) => {
    const matchesLocation = selectedLocation === 'all' || item.location?.toLowerCase() === selectedLocation.toLowerCase();
    const matchesPrice = item.pricePerNight >= priceRange[0] && item.pricePerNight <= priceRange[1];
    const matchesBeds = item.numberOfBedrooms !== undefined && item.numberOfBedrooms >= minBeds;
    return matchesLocation && matchesPrice && matchesBeds;
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore Our Accommodations</h1>

      <section className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc || ''}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
            <input
              type="number"
              min={0}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
            <input
              type="number"
              min={0}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Bedrooms</label>
            <input
              type="number"
              min={0}
              value={minBeds}
              onChange={(e) => setMinBeds(+e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
        </div>
      </section>

      {loading ? (
        <div className="text-center text-gray-500">Loading accommodations...</div>
      ) : filteredData.length === 0 ? (
        <div className="text-center text-gray-600">No accommodations found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => {
            const image = item.images?.[0];
            const imageUrl = image?.formats?.medium?.url || image?.url;
            const fullUrl = imageUrl ? `http://localhost:1337${imageUrl}` : null;

            return (
              <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md transition">
                <div className="relative w-full h-48">
                  {fullUrl ? (
                    <Image
                      src={fullUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
                      No image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                  <p className="text-gray-700 text-sm mb-2 line-clamp-2">{item.descrip || 'No description available.'}</p>
                  <p className="text-gray-800 font-semibold mb-2">${item.pricePerNight} / night</p>
                  <Link
                    href={`/accomodations/${item.documentId}`}
                    className="text-blue-600 underline hover:text-blue-800 text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
