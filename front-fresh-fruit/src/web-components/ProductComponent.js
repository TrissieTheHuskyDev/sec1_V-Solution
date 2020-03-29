import React, { useState, useEffect } from 'react';
import '../App.scss';
import axios from 'axios';
import Fruit from '../pictures/fruit.png';
import Purchasebutton from '../web-components/PurchaseButton'
import Reservebutton from '../web-components/ReserveButton'
import { useHistory } from 'react-router-dom';
import {api} from '../config'
import { useParams} from "react-router";

const productUrl= api+"/getproduct/"

const Product = (props) => {
    const history = useHistory();
    let { id } = useParams();
    const [product_name, setProductName] = useState();
    const [product_desc, setDescription] = useState();
    const [harvest_date, setHarvest] = useState();
    const [price, setPrice] = useState();
    const [unit_of_amount, setUnitofAmount] = useState();
    const [district, setDistrict] = useState();
    const [province, setProvince] = useState();
    const [deliver_company, setDeliverCompany] = useState();
    const [deliver_price, setDeliverPrice] = useState();
    const [amount, setAmount] = useState();

    const fetchProduct = async () =>{
        const data = await axios.get(productUrl+id).then(function (res){
            setProductName(res.data.product_name)
            setDescription(res.data.product_desc)
            setHarvest(res.data.harvest_date)
            setPrice(res.data.price)
            setUnitofAmount(res.data.unit_of_amount)
            setDistrict(res.data.district)
            setProvince(res.data.province)
            setDeliverCompany(res.data.deliver_company)
            setDeliverPrice(res.data.deliver_price)
            setAmount(res.data.amount)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchProduct();

    }, [])

    return (
        <div>
            <div class="container-fluid" style={{ backgroundColor: "#6AC17D" }}>
                <div class="row" style={{ backgroundColor: "#6AC17D", height: "auto" }}>
                    <div class="col">{product_name}</div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <div class="col" style={{textAlign: "center", marginLeft:"20px"}}><img src={Fruit} style={{height:'250px',width:'150px'}}/></div>
                    <div class="col" style={{textAlign: "left"}}><h1>{product_desc}</h1>
                        <h1>{harvest_date}</h1>
                        <h1>{price}{props.id} baht per {unit_of_amount}</h1>
                        <h1>{district}, {province}</h1>
                        <h1>Deliver Company: {deliver_company}</h1>
                        <h1>Deliver price: {deliver_price}</h1>
                        <h1>In stock: {amount}</h1>
                    </div>
                </div>
                <div class="row" style={{height:"auto"}}>
                    <Purchasebutton/>
                    <Reservebutton/>
                </div>
            </div>
        </div>
    );
}

export default Product;