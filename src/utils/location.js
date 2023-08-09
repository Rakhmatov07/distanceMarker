import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'openstreetmap',
  language: 'en'
};

const geocoder = NodeGeocoder(options);

export const reverseGeocode = async(latitude, longitude) => {
  try {
    const result = await geocoder.reverse({ lat: latitude, lon: longitude });

    if (result.length > 0) {
      const address = (result[0].formattedAddress).split(', ');
  
      return `${address[0]} ${address[1]} ${address[2]}`;
    } else {
      return 'Address not found';
    }
  } catch (error) {
    console.log(error.message);
  }
};








