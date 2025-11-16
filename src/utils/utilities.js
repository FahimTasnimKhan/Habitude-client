import UseAxiosSecure from '../axios/UseAxiosSecure';

const axiosSecure = UseAxiosSecure();
export const registerUsertoDB = async (payload) => {
  try {
    const response = await axiosSecure.post('/api/users', payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export function convertTo24Hour(time) {
  const [timePart, modifier] = time.split(' ');
  let [hours, minutes] = timePart.split(':');

  if (modifier === 'PM' && hours !== '12') {
    hours = String(Number(hours) + 12);
  }
  if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }
  return `${hours}:${minutes}`;
}
