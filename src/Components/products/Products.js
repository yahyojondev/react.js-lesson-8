import React,{memo,useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


 const API_URL = "https://jsonplaceholder.typicode.com/users";

function Products() {
  const [data,setData]= useState([])
  const [loading,setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
     axios
       .get(API_URL)
       .then(res => setData(res.data))
       .catch(err => console.log(err))
       .finally(()=> setLoading(false))
  },[])

  let products = data?.map(el=>(
        <div key={el.id} className="cards__card">
            <Link to={`/product/${el.id}`}>
                <img  src="https://avatars.mds.yandex.net/i?id=eacbc53850d21ee9762e64e35ffe8d6c0e491849-10842658-images-thumbs&n=13" alt="" className="card__img" />
            </Link>
              <div  className="card__content">
                <h3 className="card__content__title">{el.name}</h3>
                <p className="card__content__text">username:{el.username}</p>
                <p className="card__content__text"> Tel:{el.phone}</p>
                <p className="card__content__text">email:{el.email}</p>
             </div>
           </div>
  ))
  return (
    <>
     
      { loading && <h2 className='product__loading'>loading...</h2>}
    <div className="product__wrapper container">
         <div className="cards">
          {products}
         </div>
    </div>
    </>
  )
}

export default memo(Products)