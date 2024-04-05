import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../static'
import { CiHeart } from "react-icons/ci";



function SingleRoute() {
    const {id}= useParams()
    const [product,setProduct]= useState(null)
    const[count,setCount]= useState(0)
    const[loading , setLoading]= useState(false)
    useEffect(()=>{
        setLoading(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res=>setProduct(res.data))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
    },[])
    if(loading){
        return <div className="loading">
            <img src="https://media1.tenor.com/m/-n8JvVIqBXkAAAAC/dddd.gif" alt="" />
        </div>
    }
  return (
    <div className='single'>
       <div className="container">
          <div className="singleRoute__wrapper">
                  <div className="single__wrapper">
                <div className="single__img__wrapper">
                 <div className="single__imgs">
                 <img className='single__img__little'  src="https://avatars.mds.yandex.net/i?id=b67e0dbf436c547f701c8a8f9b773f56fe63ee77-12384307-images-thumbs&n=13" />
                 <img className='single__img__little'  src="https://avatars.mds.yandex.net/i?id=b67e0dbf436c547f701c8a8f9b773f56fe63ee77-12384307-images-thumbs&n=13" />
                 <img className='single__img__little'  src="https://avatars.mds.yandex.net/i?id=b67e0dbf436c547f701c8a8f9b773f56fe63ee77-12384307-images-thumbs&n=13" />
                 <img className='single__img__little'  src="https://avatars.mds.yandex.net/i?id=b67e0dbf436c547f701c8a8f9b773f56fe63ee77-12384307-images-thumbs&n=13" />
                 </div>
                 <img className='single__img'  src="https://avatars.mds.yandex.net/i?id=b67e0dbf436c547f701c8a8f9b773f56fe63ee77-12384307-images-thumbs&n=13" />
                 
                </div>
                <div className="single__text__wrapper">
                    <h1 className="single__text__wrapper__title">{product?.name}</h1>
                    <p className="single__text__wrapper__text "><span className='username'>username</span>:{product?.username}</p>
                    <Link className="single__text__wrapper__text email">Email:{product?.email}</Link>
                    <Link className="single__text__wrapper__text address"><span className='addres'>address</span>:{product?.address.street}</Link>
                    <Link className="single__text__wrapper__text phone"><span className='Phone'>Phone</span>:{product?.phone}</Link>
                    <Link className="single__text__wrapper__text website">website:{product?.website}</Link>
                    <p className="single__text__wrapper__text company">company:{product?.company.name}</p>
                    <div className="single__btns">
                        <button onClick={()=> setCount(p => p + 1)} className="single__btn one">+</button>
                        <button className="single__btn two">{count}</button>
                        <button  onClick={()=> setCount(p => p -1 )} className="single__btn three">-</button>
                        <Link to={"/login"} className="single__buy">Buy Now</Link>
                        <button className="single__add">Add to cart</button>
                        <CiHeart className='single__svg' />
                    </div>
                </div>
            </div>
            <div className="single__bottom__wrapper">
               <h1 className="company__title">Company Description</h1>
               <hr />
               <p className="company__text">
                Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Saepe itaque ea quasi assumenda ipsa totam aspernatur
                  repudiandae quod qui ad sequi fugiat eos praesentium, 
                  provident sed possimus aut delectus magni cum. Sit,
                   repellendus blanditiis. Recusandae omnis assumenda 
                   autem nesciunt, dolores unde eveniet aut? Molestiae
                    sunt accusamus facere vel expedita? Cumque totam
                     nesciunt voluptates voluptate maiores officia
                      ducimus veritatis numquam ut. Vitae iste itaque
                       nihil explicabo reiciendis eligendi cum commodi 
                       consectetur expedita numquam quod fuga veniam optio autem error qui minima voluptatum praesentium esse excepturi consequatur enim, consequuntur eius laborum. Nobis alias eius reprehenderit tenetur quo, ex vero corporis architecto quam nostrum? Libero quo excepturi reiciendis atque unde dignissimos dolorum corrupti error! Nobis, voluptas tenetur? Culpa est quam facere illum placeat omnis! Molestiae error, assumenda sapiente asperiores velit veritatis dicta provident ducimus eum corrupti aut, quibusdam laudantium animi accusantium? Ipsum autem quas odit et ducimus ipsa fuga expedita veritatis perferendis! Laudantium veritatis nostrum, libero perferendis cupiditate soluta non neque adipisci eveniet laborum consectetur voluptatum illo, modi qui esse temporibus sapiente expedita? Dolorum, aliquid, velit necessitatibus natus incidunt esse rerum doloribus iusto facilis porro nisi, optio voluptatem eaque ullam? Eum, esse. Exercitationem consequatur quibusdam repudiandae asperiores magnam
                 suscipit architecto blanditiis voluptatibus reprehenderit.
               </p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default SingleRoute