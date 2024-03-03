import { useState } from "react";
import './Books.css'
import Modal from "./Modal";
const Books = ({book}) => {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
   
    return (
        <div className="Card-information">
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="Card shadow" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="Bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">${amount}</p>
                                </div>
                               
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </div>
    )

}

export default Books
