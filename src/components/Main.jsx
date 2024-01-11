import React from 'react'

export default function Main(props) {
console.log(props)



    return (

            <div className='card'>
                <section className='img'>
                    <img className="travel-image" src={props.item.img} />
                </section>
                <section className='img-text'>
                    <p><span className='location'>{props.item.location}</span> <a className='maps-location' href=''>View on Google Maps</a></p>
                    <h3 className='name'>{props.item.name}</h3>
                    <p className='dates'><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span></p>
                    <p className='description'>{props.item.description}</p>
                </section>
            
            </div>
            
        
        
    )
    
}