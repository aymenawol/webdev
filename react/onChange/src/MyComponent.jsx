import React, { useState } from "react"

function MyComponent() {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState()
    const [comment,setComment] = useState()
    const [payment,setPayment] = useState()
    const [shipping, setShipping] = useState()

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return (
        <>
        <div className="name">
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
        </div>
        <div className="quantity">
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
        </div>
        <div className="comment">
            <textarea placeholder="type something" value={comment} onChange={handleCommentChange} />
            <p>Comment: {comment}</p>
        </div>
        <div className="payment">
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
        <div>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pickup
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
        </>
    )


}



export default MyComponent