import React from 'react';

const ProjectItem = (props) => {
    const {id, name, lenguge, type, url, image, description, body} = props;

    return (
        <div className='project'>
            <h2>{id} {name}</h2>
            <h3>{lenguge}</h3>
            <h3>{type}</h3>
            <h4> <a href={url}> Link</a></h4>
            
            <img src={image} alt={name} />

            <h3>{description}</h3>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default ProjectItem;