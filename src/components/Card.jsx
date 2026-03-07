import React from 'react'

function Card({ title, description, image, buttonText }) {
    return (
        <>
            <div className='font-["Candara"]'>
                <div className="card bg-blue-200 w-96 shadow-sm">
                    <figure>
                        <img
                            src={image}
                            alt={title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral btn-outline">{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;