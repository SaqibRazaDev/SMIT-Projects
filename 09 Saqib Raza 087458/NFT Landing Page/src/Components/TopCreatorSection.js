import React from 'react'
import avtr1 from './Assets/ArtistAvatar1.png'

export default function TopCreatorSection() {
    return (
        <div className="container my-5">
            <h1>
                Top creators
            </h1>
            <p className="fs-5">
                Checkout Top Rated Creators on the NFT Marketplace
            </p>

            <div className="row my-5">

                {/* card */}

                <div className="card-2 col- col-3 col-md-4 col-sm-12 rounded-4 p-4 m-4">
                    <p>01</p>
                    <div className="artist-card">
                        <img className='img-fluid' src={avtr1} alt="" />
                        <p className="fw-bold mt-2">
                            Keepitreal
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>Total Sales:</p>
                        </div>
                        <div className="col-6">
                            <p className="mono-space text-end">
                                34.53 ETH
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-2 col- col-3 col-md-4 col-sm-12 rounded-4 p-4 m-4">
                    <p>01</p>
                    <div className="artist-card">
                        <img className='' src={avtr1} alt="" />
                        <p className="fw-bold mt-2">
                            Keepitreal
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>Total Sales:</p>
                        </div>
                        <div className="col-6">
                            <p className="mono-space text-end">
                                34.53 ETH
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-2 col- col-3 col-md-4 col-sm-12 rounded-4 p-4 m-4">
                    <p>01</p>
                    <div className="artist-card">
                        <img className='' src={avtr1} alt="" />
                        <p className="fw-bold mt-2">
                            Keepitreal
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>Total Sales:</p>
                        </div>
                        <div className="col-6">
                            <p className="mono-space text-end">
                                34.53 ETH
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-2 col- col-3 col-md-4 col-sm-12 rounded-4 p-4 m-4">
                    <p>01</p>
                    <div className="artist-card">
                        <img className='' src={avtr1} alt="" />
                        <p className="fw-bold mt-2">
                            Keepitreal
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>Total Sales:</p>
                        </div>
                        <div className="col-6">
                            <p className="mono-space text-end">
                                34.53 ETH
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
