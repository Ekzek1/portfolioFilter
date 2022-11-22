import React, { useEffect , useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import { listImg } from './components/ProjectList/listImg';
import ProjectList from './components/ProjectList/ProjectList';


const Portfolio = () => {

  const [activeSelect, setActiveSelected] = useState('All');
  const [activeCategoryImg, setActiveCategoryImg] = useState(listImg);

  const img = listImg;

 useEffect(() => {
    if(activeSelect == 'All'){
      const acitveImg =  img.filter((item) => item);     
      setActiveCategoryImg(acitveImg)  
    }else{
      const acitveImg =  img.filter((item) => item.category == activeSelect);     
      setActiveCategoryImg(acitveImg)  
    }
  },[activeSelect])


  const selectFilter = (filter) => {
    setActiveSelected(() => filter);
  }

  return (
    <div>
      <Toolbar 
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected = {activeSelect}
        onSelectFilter = {selectFilter}
      />
      <ProjectList img = {activeCategoryImg}/>
    </div>
  )
}

export default Portfolio