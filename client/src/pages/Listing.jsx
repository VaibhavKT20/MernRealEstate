import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import Contact from '../components/Contact';

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="bg-gray-100 py-8">
    {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
    {error && <p className='text-center my-7 text-2xl'>Something went wrong!</p>}
    {listing && !loading && !error && (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <Swiper navigation className="swiper-container">
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className='h-96 bg-cover bg-center'
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-end mt-4 mr-4'>
          <FaShare
            className='text-3xl text-gray-700 cursor-pointer'
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          />
        </div>
        {copied && (
          <p className='fixed top-16 right-8 bg-gray-200 text-gray-700 px-3 py-1 rounded-md'>
            Link copied!
          </p>
        )}
        <div className='p-6'>
          <p className='text-3xl font-semibold'>
            {listing.name} - ${listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <p className='flex items-center mt-4 text-gray-600 text-sm'>
            <FaMapMarkerAlt className='text-green-700' />
            {listing.address}
          </p>
          <div className='flex gap-4 mt-2'>
            <p className='bg-red-900 w-full max-w-[200px] text-white text-center py-1 rounded-md'>
              {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
            </p>
            {listing.offer && (
              <p className='bg-green-900 w-full max-w-[200px] text-white text-center py-1 rounded-md'>
                ${+listing.regularPrice - +listing.discountPrice} OFF
              </p>
            )}
          </div>
          <p className='text-gray-800 mt-4'>
            <span className='font-semibold'>Description - </span>
            {listing.description}
          </p>
          <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6 mt-4'>
            <li className='flex items-center gap-1 whitespace-nowrap '>
              <FaBed className='text-lg' />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
              <FaBath className='text-lg' />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
              <FaParking className='text-lg' />
              {listing.parking ? 'Parking spot' : 'No Parking'}
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
              <FaChair className='text-lg' />
              {listing.furnished ? 'Furnished' : 'Unfurnished'}
            </li>
          </ul>
          {contact && <Contact listing={listing} />}
        </div>
      </div>
    )}
  </main>
);
}