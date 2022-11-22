import React from 'react';

const ProjectList = ( img ) => {
  const imgCategory = img.img;
  return (
    <div className='img__body'>
      {imgCategory.map((item, index) => 
        <img src={item.img} alt={item.category} key = {index + 1}/>
      )}
    </div>
  )
}

export default ProjectList