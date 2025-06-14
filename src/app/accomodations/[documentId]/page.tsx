// import Image from 'next/image';
// import { notFound } from 'next/navigation';

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

// async function getAccommodation(documentId: string): Promise<Accommodation | null> {
//   const res = await fetch('http://localhost:1337/api/accommodations?populate=images', {
//     cache: 'no-store',
//   });

//   if (!res.ok) return null;

//   const json = await res.json();
//   const item = json.data.find((item: any) => item.documentId === documentId);

//   if (!item) return null;

//   return {
//     id: item.id,
//     documentId: item.documentId,
//     slug: item.slug,
//     title: item.title,
//     descrip: item.descrip,
//     location: item.location,
//     pricePerNight: item.pricePerNight,
//     images: item.images || [],
//   };
// }

// export default async function AccommodationPage({ params }: { params: { documentId: string } }) {
//   const accommodation = await getAccommodation(params.documentId);

//   if (!accommodation) return notFound();

//   return (
//     <main className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{accommodation.title}</h1>
//       <p className="text-gray-600 mb-2">{accommodation.location}</p>
//       <p className="text-gray-700 mb-4">{accommodation.descrip || 'No description available.'}</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//         {accommodation.images.map((img, index) => {
//           const imgUrl = img.formats?.medium?.url || img.url;
//           const fullUrl = imgUrl ? `http://localhost:1337${imgUrl}` : null;

//           return fullUrl ? (
//             <div key={index} className="relative w-full h-64 rounded overflow-hidden">
//               <Image
//                 src={fullUrl}
//                 alt={`Accommodation image ${index + 1}`}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           ) : null;
//         })}
//       </div>

//       <p className="text-lg font-semibold text-gray-900 mb-2">
//         Price: ${accommodation.pricePerNight} / night
//       </p>
//     </main>
//   );
// }
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

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

// async function getAccommodation(documentId: string): Promise<Accommodation | null> {
//   const res = await fetch('http://localhost:1337/api/accommodations?populate=images', {
//     cache: 'no-store',
//   });

//   if (!res.ok) return null;

//   const json = await res.json();
//   const item = json.data.find((item: any) => item.documentId === documentId);

//   if (!item) return null;

//   return {
//     id: item.id,
//     documentId: item.documentId,
//     slug: item.slug,
//     title: item.title,
//     descrip: item.descrip,
//     location: item.location,
//     pricePerNight: item.pricePerNight,
//     images: item.images || [],
//   };
// }

// export default async function AccommodationPage({ params }: { params: { documentId: string } }) {
//   const accommodation = await getAccommodation(params.documentId);

//   if (!accommodation) return notFound();

//   const firstImage = accommodation.images[0];
//   const heroImage =
//     firstImage?.formats?.medium?.url || firstImage?.url
//       ? `http://localhost:1337${firstImage?.formats?.medium?.url || firstImage?.url}`
//       : null;

//   return (
//     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Hero Section */}
//       <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow mb-8">
//         {heroImage ? (
//           <Image
//             src={heroImage}
//             alt={accommodation.title}
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-lg">
//             No image available
//           </div>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">{accommodation.title}</h1>
//           <p className="text-gray-500 text-lg mb-4">{accommodation.location}</p>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             {accommodation.descrip || 'No description available.'}
//           </p>

//           {/* Image Gallery */}
//           {accommodation.images.length > 1 && (
//             <>
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">Gallery</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {accommodation.images.slice(1).map((img, index) => {
//                   const url = img.formats?.medium?.url || img.url;
//                   const fullUrl = url ? `http://localhost:1337${url}` : null;
//                   return fullUrl ? (
//                     <div key={index} className="relative w-full h-40 rounded-lg overflow-hidden">
//                       <Image
//                         src={fullUrl}
//                         alt={`Gallery image ${index + 1}`}
//                         fill
//                         className="object-cover hover:scale-105 transition-transform duration-300"
//                         sizes="(max-width: 768px) 100vw, 33vw"
//                       />
//                     </div>
//                   ) : null;
//                 })}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Price and CTA */}
//         <div className="bg-white border border-gray-200 rounded-lg shadow p-6 h-fit">
//           <div className="mb-4">
//             <p className="text-gray-600">Price per night</p>
//             <p className="text-3xl font-bold text-blue-600">${accommodation.pricePerNight}</p>
//           </div>
//           <button className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
// pages/hotel/[slug].tsx

// import Image from 'next/image';
// import { notFound } from 'next/navigation';

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

// async function getAccommodation(documentId: string): Promise<Accommodation | null> {
//   const res = await fetch('http://localhost:1337/api/accommodations?populate=images', {
//     cache: 'no-store',
//   });

//   if (!res.ok) return null;

//   const json = await res.json();
//   const item = json.data.find((item: any) => item.documentId === documentId);

//   if (!item) return null;

//   return {
//     id: item.id,
//     documentId: item.documentId,
//     slug: item.slug,
//     title: item.title,
//     descrip: item.descrip,
//     location: item.location,
//     pricePerNight: item.pricePerNight,
//     images: item.images || [],
//   };
// }

// export default async function AccommodationPage({ params }: { params: { documentId: string } }) {
//   const accommodation = await getAccommodation(params.documentId);

//   if (!accommodation) return notFound();

//   const firstImage = accommodation.images[0];
//   const heroImage =
//     firstImage?.formats?.medium?.url || firstImage?.url
//       ? `http://localhost:1337${firstImage?.formats?.medium?.url || firstImage?.url}`
//       : null;

//   return (
//     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Hero Section */}
//       <div className="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-xl mb-12">
//         {heroImage ? (
//           <Image
//             src={heroImage}
//             alt={accommodation.title}
//             fill
//             priority
//             className="object-cover"
//             sizes="100vw"
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-lg">
//             No image available
//           </div>
//         )}
//       </div>

//       {/* Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Info Section */}
//         <div className="md:col-span-2 space-y-6">
//           <div>
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//               {accommodation.title}
//             </h1>
//             <p className="text-lg text-gray-500 mt-1">{accommodation.location}</p>
//           </div>

//           <p className="text-gray-700 text-[17px] leading-relaxed">
//             {accommodation.descrip || 'No description available.'}
//           </p>

//           {/* Gallery */}
//           {accommodation.images.length > 1 && (
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Photo Gallery</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {accommodation.images.slice(1).map((img, index) => {
//                   const url = img.formats?.medium?.url || img.url;
//                   const fullUrl = url ? `http://localhost:1337${url}` : null;

//                   return fullUrl ? (
//                     <div
//                       key={index}
//                       className="relative w-full h-40 rounded-xl overflow-hidden shadow-md group"
//                     >
//                       <Image
//                         src={fullUrl}
//                         alt={`Gallery image ${index + 1}`}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         sizes="(max-width: 768px) 100vw, 33vw"
//                       />
//                     </div>
//                   ) : null;
//                 })}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Price + CTA Card */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sticky top-20">
//           <div className="mb-6">
//             <p className="text-gray-500 text-sm">Starting from</p>
//             <p className="text-4xl font-bold text-blue-600">${accommodation.pricePerNight}</p>
//             <p className="text-sm text-gray-400">per night</p>
//           </div>

//           <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold py-3 rounded-lg shadow-md">
//             Book Now
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

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

// async function getAccommodation(documentId: string): Promise<Accommodation | null> {
//   const res = await fetch('http://localhost:1337/api/accommodations?populate=images', {
//     cache: 'no-store',
//   });

//   if (!res.ok) return null;

//   const json = await res.json();
//   const item = json.data.find((item: any) => item.documentId === documentId);

//   if (!item) return null;

//   return {
//     id: item.id,
//     documentId: item.documentId,
//     slug: item.slug,
//     title: item.title,
//     descrip: item.descrip,
//     location: item.location,
//     pricePerNight: item.pricePerNight,
//     images: item.images || [],
//   };
// }

// export default async function AccommodationPage({ params }: { params: { documentId: string } }) {
//   const accommodation = await getAccommodation(params.documentId);

//   if (!accommodation) return notFound();

//   const firstImage = accommodation.images[0];
//   const heroImage =
//     firstImage?.formats?.medium?.url || firstImage?.url
//       ? `http://localhost:1337${firstImage?.formats?.medium?.url || firstImage?.url}`
//       : null;

//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Hero Image */}
//       <div className="w-full h-[400px] relative overflow-hidden rounded-2xl shadow-xl mb-10">
//         {heroImage ? (
//           <Image
//             src={heroImage}
//             alt={accommodation.title}
//             fill
//             priority
//             className="object-cover"
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-lg">
//             No image available
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] gap-12">
//         {/* Info Section */}
//         <div className="space-y-8">
//           <div>
//             <h1 className="text-5xl font-bold uppercase text-gray-900">{accommodation.title}</h1>
//             <p className="text-gray-500 mt-2">{accommodation.location}</p>
//           </div>

//           <div>
//             <p className="text-gray-700 text-lg leading-8 first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:leading-none">
//               {accommodation.descrip || 'No description available.'}
//             </p>
//           </div>

//           {/* Photo Gallery */}
//           {accommodation.images.length > 1 && (
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">Photo Gallery</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                 {accommodation.images.slice(1).map((img, index) => {
//                   const url = img.formats?.medium?.url || img.url;
//                   const fullUrl = url ? `http://localhost:1337${url}` : null;

//                   return fullUrl ? (
//                     <div
//                       key={index}
//                       className="relative w-full h-40 rounded-xl overflow-hidden shadow-md group"
//                     >
//                       <Image
//                         src={fullUrl}
//                         alt={`Gallery image ${index + 1}`}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         sizes="(max-width: 768px) 100vw, 33vw"
//                       />
//                     </div>
//                   ) : null;
//                 })}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Booking Card */}
//         <div className="space-y-6">
//           {[
//             { type: 'Classic Room', price: accommodation.pricePerNight, breakfast: false },
//             { type: 'Classic Room + Breakfast', price: accommodation.pricePerNight + 40, breakfast: true },
//             { type: 'Deluxe Room', price: accommodation.pricePerNight + 70, breakfast: true },
//           ].map((option, index) => (
//             <div key={index} className="border border-gray-200 rounded-xl p-6 shadow-sm">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-xl font-semibold text-gray-800">{option.type}</h3>
//                 <span className="text-sm text-gray-500">Includes {option.breakfast ? 'Breakfast' : 'Room only'}</span>
//               </div>
//               <p className="text-3xl font-bold text-blue-600 mb-1">${option.price.toFixed(2)}</p>
//               <p className="text-sm text-gray-400 mb-4">Taxes Included</p>
//               <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">Book</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
  description: string | null;
  location: string | null;
  pricePerNight: number;
  numberOfBedrooms: number;
  numberoFBathrooms: number;
  maximumGuests: number;
  images: ImageType[];
}

async function getAccommodation(documentId: string): Promise<Accommodation | null> {
  const res = await fetch('http://localhost:1337/api/accommodations?populate=images', {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  const json = await res.json();
  const item = json.data.find((item: any) => item.documentId === documentId);

  if (!item) return null;

  return {
    id: item.id,
    documentId: item.documentId,
    slug: item.slug,
    title: item.title,
    descrip: item.descrip,
    description: item.description,
    location: item.location,
    pricePerNight: item.pricePerNight,
    numberOfBedrooms: item.numberOfBedrooms,
    numberoFBathrooms: item.numberoFBathrooms,
    maximumGuests: item.maximumGuests,
    images: item.images || [],
  };
}

export default async function AccommodationPage({ params }: { params: any }) {
  const accommodation = await getAccommodation(params.documentId);

  if (!accommodation) return notFound();

  const firstImage = accommodation.images[0];
  const heroImage =
    firstImage?.formats?.medium?.url || firstImage?.url
      ? `http://localhost:1337${firstImage?.formats?.medium?.url || firstImage?.url}`
      : null;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden rounded-2xl shadow-xl mb-10">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={accommodation.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500 text-lg">
            No image available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] gap-12">
        {/* Info Section */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">{accommodation.title}</h1>
            <p className="text-gray-500 mt-1 text-lg">{accommodation.location}</p>
          </div>

          <div className="text-base text-gray-700 leading-7">
            {accommodation.descrip && <p className="italic text-blue-700">{accommodation.descrip}</p>}
            <p className="mt-4 whitespace-pre-line">{accommodation.description || 'No detailed description available.'}</p>
          </div>

          <ul className="mt-4 space-y-1 text-gray-700">
            <li><strong>Bedrooms:</strong> {accommodation.numberOfBedrooms}</li>
            <li><strong>Bathrooms:</strong> {accommodation.numberoFBathrooms}</li>
            <li><strong>Max Guests:</strong> {accommodation.maximumGuests}</li>
          </ul>

          {/* Photo Gallery */}
          {accommodation.images.length > 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {accommodation.images.slice(1).map((img, index) => {
                  const url = img.formats?.medium?.url || img.url;
                  const fullUrl = url ? `http://localhost:1337${url}` : null;

                  return fullUrl ? (
                    <div
                      key={index}
                      className="relative w-full h-40 rounded-xl overflow-hidden shadow-md group"
                    >
                      <Image
                        src={fullUrl}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>

        {/* Booking Card */}
        <div className="space-y-6">
          {[
            { type: 'Classic Room', price: accommodation.pricePerNight, breakfast: false },
            { type: 'Classic Room + Breakfast', price: accommodation.pricePerNight + 40, breakfast: true },
            { type: 'Deluxe Room', price: accommodation.pricePerNight + 70, breakfast: true },
          ].map((option, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{option.type}</h3>
                <span className="text-sm text-gray-500">Includes {option.breakfast ? 'Breakfast' : 'Room only'}</span>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">${option.price.toFixed(2)}</p>
              <p className="text-sm text-gray-400 mb-4">Taxes Included</p>
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">Book</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
