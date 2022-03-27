import React from 'react';
import Carousel from 'react-elastic-carousel';
import '../styles/ComponentCarousel.css'
function ComponentCarousel(props) {
    
    const breakPoints = [
        { width: 1, itemsToShow: 2,outerSpacing:0 , itemPadding:[10, 20] },
        { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false,outerSpacing:50 },
        { width: 850, itemsToShow: 4,outerSpacing:50 },
        { width: 1150, itemsToShow: 5, itemsToScroll: 2,outerSpacing:50  },
        { width: 1450, itemsToShow: 5,outerSpacing:50 },
        { width: 1750, itemsToShow: 5,outerSpacing:50 },
      ]
    return (
        <div>
        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{props.title}</h1>
        <Carousel   breakPoints={breakPoints}>
            {props.children}
        </Carousel>
        </div>
    )
}

export default ComponentCarousel