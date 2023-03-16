import React from 'react';

export default function PortfolioContainer(props) {
    return (
        <div className="project-card">
            {props.projects.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.alt}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <div className="card-body">
                            <a href={item.repo} className="card-link">Repo link</a>
                        </div>
                        <div className="card-body">
                            <a href={item.link} className="card-link">Deployed link</a>
                            </div>
                    </div>
                )}
            )}
        </div>
    );
}
