import React from 'react';

const Services = () => {
  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-3xl font-semibold mb-4'>Our Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Service 1 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Home Buying Assistance</h3>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit felis ut
            gravida condimentum.
          </p>
        </div>

        {/* Service 2 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Property Management</h3>
          <p className='text-gray-700'>
            Vestibulum non vestibulum metus. Vivamus dapibus volutpat tortor, vel accumsan lorem
            sollicitudin vel.
          </p>
        </div>

        {/* Service 3 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Real Estate Consultation</h3>
          <p className='text-gray-700'>
            Duis ultrices, libero non efficitur lacinia, nisl libero ullamcorper dui, at dictum
            tortor odio quis justo.
          </p>
        </div>

        {/* Additional Service 4 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Home Selling Assistance</h3>
          <p className='text-gray-700'>
            Proin eget elit arcu. Quisque nec ante at sapien facilisis aliquam vitae sit amet
            justo.
          </p>
        </div>

        {/* Additional Service 5 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Real Estate Investment Advice</h3>
          <p className='text-gray-700'>
            Etiam tincidunt tortor non erat dapibus, vel varius ex tincidunt. Sed scelerisque
            ligula.
          </p>
        </div>

        {/* Additional Service 6 */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Commercial Property Services</h3>
          <p className='text-gray-700'>
            Integer vel neque ac risus aliquet fermentum ut nec felis. Suspendisse potenti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
