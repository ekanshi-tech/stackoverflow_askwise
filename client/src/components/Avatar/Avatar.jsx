import React from 'react'



import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/list',
  params: {
    destinationId: '1506246',
    pageNumber: '1',
    pageSize: '25',
    checkIn: '<REQUIRED>',
    checkOut: '<REQUIRED>',
    adults1: '1',
    sortOrder: 'PRICE',
    locale: 'en_US',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '9fde006463msh3e9c9b93da1684ap1bc147jsn9262820c499b',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const Avatar = ({ children ,backgroundColor,color,px,py,borderRadius,mar,cursor,fontSize,textDecoration}) => {
    const style={
        margin:`${mar}`,
        backgroundColor,
        color:color || 'black',
        textAlign:"centre",
        borderRadius,
        padding:`${px} ${py}`,
        fontSize,
        textDecoration:"none",
        cursor:cursor || null
    }
  return (
    <div style={style}>
        { children }
    </div>
  )
}

export default Avatar