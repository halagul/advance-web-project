

// "use client";

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// export default function HomePage() {
//   const [loading, setLoading] = useState(true);
//   const [heroTitle, setHeroTitle] = useState('');
//   const [heroDescription, setHeroDescription] = useState('');
//   const [heroImage, setHeroImage] = useState<string | null>(null);
//   const [accommodations, setAccommodations] = useState<any[]>([]);
//   const [filteredCategory, setFilteredCategory] = useState('all');

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const homeRes = await fetch('http://localhost:1337/api/home-page?populate=heroImage');
//         const homeJson = await homeRes.json();
//         const homeData = homeJson?.data;

//         if (homeData) {
//           setHeroTitle(homeData.heroTitle || 'Welcome');
//           setHeroDescription(homeData.heroDescription || 'Discover the best stays');

//           const imageUrl =
//             homeData.heroImage?.formats?.large?.url ||
//             homeData.heroImage?.formats?.medium?.url ||
//             homeData.heroImage?.url;

//           setHeroImage(imageUrl ? `http://localhost:1337${imageUrl}` : null);
//         }

//         const accRes = await fetch('http://localhost:1337/api/accommodations');
//         const accJson = await accRes.json();
//         setAccommodations(accJson?.data || []);
//       } catch (error) {
//         console.error('Failed to fetch content:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContent();
//   }, []);

//   const filteredAccommodations =
//     filteredCategory === 'all'
//       ? accommodations
//       : accommodations.filter((acc) => acc.location.toLowerCase().includes(filteredCategory.toLowerCase()));

//   return (
//     <div className="bg-white min-h-screen">
//       <nav className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-blue-600">
//             Accommodation Site
//           </Link>
//           <div className="space-x-6 hidden md:flex">
//             <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
//             <Link href="/accomodations" className="text-gray-600 hover:text-blue-600">Accommodations</Link>
//             <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-16 gap-12">
//         <div>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
//             {heroTitle}
//           </h1>
//           {loading ? (
//             <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse mt-4"></div>
//           ) : (
//             <div
//               className="mt-6 text-gray-600 prose prose-blue max-w-2xl"
//               dangerouslySetInnerHTML={{ __html: heroDescription }}
//             />
//           )}
//           <div className="mt-6 flex flex-wrap gap-4">
//             <Link href="/accomodations" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//               Get Started
//             </Link>
//             <Link href="/about" className="px-6 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
//               Learn More
//             </Link>
//           </div>
//         </div>
//         {heroImage && (
//           <div className="w-full h-96 lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
//             <Image
//               src={heroImage}
//               alt="Hero"
//               fill
//               priority
//               className="object-cover"
//               sizes="(max-width: 1024px) 100vw, 50vw"
//             />
//           </div>
//         )}
//       </section>

//       {/* Sidebar Filter + Results */}
//       <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
//         <aside className="lg:col-span-1">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Location</h2>
//           <div className="space-y-3">
//             {['all', 'karachi', 'pakistan', 'aspen'].map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setFilteredCategory(category)}
//                 className={`block w-full text-left px-4 py-2 rounded-md transition font-medium ${
//                   filteredCategory === category
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </button>
//             ))}
//           </div>
//         </aside>

//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredAccommodations.length === 0 ? (
//             <p className="text-gray-600">No accommodations found.</p>
//           ) : (
//             filteredAccommodations.map((acc) => (
//               <div key={acc.id} className="border rounded-lg p-4 shadow-sm bg-white">
//                 <h3 className="text-xl font-bold text-gray-900 mb-1">{acc.title}</h3>
//                 <p className="text-gray-600 text-sm mb-1">{acc.location}</p>
//                 <p className="text-gray-700 text-base mb-2">{acc.descrip}</p>
//                 <p className="text-blue-600 font-semibold">${acc.pricePerNight} / night</p>
//               </div>
//             ))
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [heroTitle, setHeroTitle] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [accommodations, setAccommodations] = useState<any[]>([]);
  const [filteredCategory, setFilteredCategory] = useState('all');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const homeRes = await fetch('https://advance-web-project-2l51.vercel.app/api/home-page?populate=heroImage');
        const homeJson = await homeRes.json();
        const homeData = homeJson?.data;

        if (homeData) {
          setHeroTitle(homeData.heroTitle || 'Welcome');
          setHeroDescription(homeData.heroDescription || 'Discover the best stays');

          const imageUrl =
            homeData.heroImage?.formats?.large?.url ||
            homeData.heroImage?.formats?.medium?.url ||
            homeData.heroImage?.url;

          setHeroImage(imageUrl ? `http://localhost:1337${imageUrl}` : null);
        }

        const accRes = await fetch('http://localhost:1337/api/accommodations?populate=images');
        const accJson = await accRes.json();

        const formatted = accJson.data.map((item: any) => ({
          id: item.id,
          documentId: item.documentId,
          slug: item.slug,
          title: item.title,
          descrip: item.descrip,
          location: item.location,
          pricePerNight: item.pricePerNight,
          images: item.images || [],
        }));

        setAccommodations(formatted);
      } catch (error) {
        console.error('Failed to fetch content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const filteredAccommodations =
    filteredCategory === 'all'
      ? accommodations
      : accommodations.filter((acc) => acc.location?.toLowerCase().includes(filteredCategory.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Accommodation Site
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/accomodations" className="text-gray-600 hover:text-blue-600">Accommodations</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-16 gap-12">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {heroTitle}
          </h1>
          {loading ? (
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse mt-4"></div>
          ) : (
            <div
              className="mt-6 text-gray-600 prose prose-blue max-w-2xl"
              dangerouslySetInnerHTML={{ __html: heroDescription }}
            />
          )}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/accomodations" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get Started
            </Link>
            <Link href="/about" className="px-6 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
              Learn More
            </Link>
          </div>
        </div>
        {heroImage && (
          <div className="w-full h-96 lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={heroImage}
              alt="Hero"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )}
      </section>

      {/* Sidebar Filter + Results */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Location</h2>
          <div className="space-y-3">
            {['all', 'karachi', 'pakistan', 'aspen'].map((category) => (
              <button
                key={category}
                onClick={() => setFilteredCategory(category)}
                className={`block w-full text-left px-4 py-2 rounded-md transition font-medium ${
                  filteredCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAccommodations.length === 0 ? (
            <p className="text-gray-600">No accommodations found.</p>
          ) : (
            filteredAccommodations.map((acc) => {
              const image = acc.images?.[0];
              const imageUrl = image?.formats?.medium?.url || image?.url;
              const fullUrl = imageUrl ? `http://localhost:1337${imageUrl}` : null;

              return (
                <div key={acc.id} className="border rounded-lg shadow bg-white overflow-hidden">
                  <div className="relative w-full h-48">
                    {fullUrl ? (
                      <Image
                        src={fullUrl}
                        alt={acc.title}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{acc.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{acc.location}</p>
                    <p className="text-gray-700 text-base mb-2">{acc.descrip}</p>
                    <p className="text-blue-600 font-semibold mb-2">${acc.pricePerNight} / night</p>
                    <Link
                      href={`/accomodations/${acc.documentId}`}
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
