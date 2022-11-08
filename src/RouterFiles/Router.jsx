import React from 'react'
import { useRoutes} from 'react-router-dom'
import { Content } from '../Componnents/Content/FIRST_EL/Content'
import { ContentFourth} from '../Componnents/Content/Fourth_el/ContentFourth'
import { ContentThird} from '../Componnents/Content/Third_el/ContentThird'
import { ContentTwo} from '../Componnents/Content/Second_EL/ContentTwo'
import { Books } from '../Componnents/Content/Second_EL/Children/Books'
import { MOvies } from '../Componnents/Content/Second_EL/Children/MOvies'


export const Router = () => {

  const element=useRoutes([
    {
      path:"/",
     element:<Content/>
    },
    {
      path:"/fourth",
     element: <ContentFourth/>
        },
    {
      path:"/third",
     element:<ContentThird/>
    },
    {
      path:"/second",
     element:<ContentTwo/>,
     children:[ 
       {
          path:"/second/books/:id",element:<Books/>
        },
        {
          path:"/second/movies/:id",element:<MOvies/>,
          
        }
      ]
    },
  ])

  return element;
}
