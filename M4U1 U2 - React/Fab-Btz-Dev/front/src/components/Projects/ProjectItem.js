import React from 'react';

const ProjectItem = (props) => {
    const {id, name, lenguage, type, url, image, description, body} = props;

    return (
        <div className='project'>
            <h3>{id} {name}</h3>
            <p className="">Lenguaje: {lenguage}</p>
            <p className="">Tipo: {type}</p>
            
            <div className='row'>
                <div className='col-md-2'>
                    <a href={url}>
                        <img src={image} alt={name} />
                    </a>    
                </div>
                <div className='col-md-8'>       
                <p className="lead">{description}</p>
                <a href={url}>URL - LINK</a>
                </div>
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default ProjectItem;