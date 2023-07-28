import Image from "next/image"
import food1 from "/public/food01.jpg"
import food2 from "/public/food02.jpg"
import food3 from "/public/food03.jpg"

export default function List() {
    let productList=['Tomatoes','Pasta','Coconut']
    return (
      <div>
     <h4 className="title">상품목록</h4>
     {
        productList.map((k,i)=>{
            return(
                <div className="food" key={i}>
                     <img src={`./food0${i+1}.jpg`} className="food-img"/>  
                <h4>{k} $40</h4>
             </div>
            )
        })
     }
    
     </div>
    )
  }