import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-extrabold md:text-5xl lg:text-6xl mb-4'>
            Find Your Dream Home with VKT Estate
          </h1>
          <p className='text-lg md:text-xl'>
            Explore a wide range of properties for sale, rent, and special offers.
          </p>
          <Link
            to='/search'
            className='bg-white text-blue-500 px-6 py-3 rounded-full font-semibold mt-8 inline-block hover:bg-gray-200 transition duration-300'
          >
            Explore Listings
          </Link>
        </div>
      </div>

      <div className='container mx-auto mt-16'>
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                    height: '500px',
                  }}
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
          {offerListings && offerListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-3xl font-semibold text-gray-800'>
                  Recent Offers
                </h2>
                <Link
                  className='text-sm text-blue-500 hover:underline'
                  to={'/search?offer=true'}
                >
                  Show more offers
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-3xl font-semibold text-gray-800'>
                  Recent Rentals
                </h2>
                <Link
                  className='text-sm text-blue-500 hover:underline'
                  to={'/search?type=rent'}
                >
                  Show more rentals
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div>
              <div className='my-3'>
                <h2 className='text-3xl font-semibold text-gray-800'>
                  Recent Sales
                </h2>
                <Link
                  className='text-sm text-blue-500 hover:underline'
                  to={'/search?type=sale'}
                >
                  Show more sales
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
