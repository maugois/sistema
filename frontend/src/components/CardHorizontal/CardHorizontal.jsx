import React from "react";
import './CardHorizontal.css';

export default function CardHorizontal( { children, handleClick, ...props } ) {
    return (
        <>
            <div className="card mb-3 mt-5 mx-auto shadow cardHorizontalCustom" style={{maxWidth: "850px", backgroundColor: props.backgroundCard}}>
                <div className="row g-0">
                    <div className="col-md-7 p-4">
                        <div className="card-body">
                            <span className="badge rounded-pill bg-danger py-2 px-4 mb-3 text-uppercase">Atenção</span>
                            <h5 className="card-title mb-3">{ props.title }</h5>
                            <p className="card-text mb-4 opacity-75">{ children }</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text d-flex flex-column">
                                    { props.author }
                                    <small className="opacity-75">{ props.date }</small>
                                </p>

                                <div className="me-3">
                                    <button 
                                        id={props.idCardHorizontal} 
                                        type="button" 
                                        className="btn btn-outline-light" 
                                        data-bs-toggle="modal" 
                                        data-bs-target={`#${props.idModalOpen}`}
                                        onClick={handleClick}
                                    >   
                                        Ver mais...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <img src={props.imageUrl} className="img-fluid" alt={props.imageAlt} />
                    </div>
                </div>
            </div>
        </>
    )
}