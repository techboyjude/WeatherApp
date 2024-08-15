import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


//import images
import LondonImage from '../public/images/london.jpg';
import NewYorkImage from '../public/images/new-york.jpg';
import ParisImage from '../public/images/paris.jpg';
import TokyoImage from '../public/images/tokyo.jpg';

const places = [
    {
        name: "London",
        image: LondonImage,
        url: "/location/london-2643743",
    },

    {
        name: "Paris",
        image: ParisImage,
        url: "/location/paris-2968815",
    },

    {
        name: "Tokyo",
        image: TokyoImage,
        url: "/location/tokyo-1850147",
    },

    {
        name: "New York",
        image: NewYorkImage,
        url: "/location/new-york-city-5128581",
    },
]


export default function FamousPlaces() {
  return (
    <div className="places">
        <div className="places__row">
            {places.length > 0 && 
             places.map((place, index) => (
                <div className="places__box" key ={index}>
                    <Link href={place.url}>
                     
                        <div className="places__image-wrapper">
                            <Image 
                              src={place.image}
                              alt={`${place.name} Image`}
                              layout="fill"
                              objectFit="cover"
                              />
                        </div>
                        <span>{place.name}</span>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
