import React, { useContext, useEffect } from 'react'
import './VerifyOrder.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const VerifyOrder = () => {

    const [params, setParams] = useSearchParams()
    const success = params.get("success");
    const orderId = params.get("orderId");
    const navigate = useNavigate()

    const {url} = useContext(StoreContext)

    const verifyPayment = async() => {
        const response = await axios.post(url+"/api/order/verify", {success,orderId})
        if(response.data.success) {
            navigate("/myOrders")
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment()
    },[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default VerifyOrder