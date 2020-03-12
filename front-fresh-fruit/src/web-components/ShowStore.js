import React, { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";

function Item(img, name, desc) {
    return (
        <div>
            <div class="card  card-a " >
                <img src={img} class="card-img-top pic-card" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{desc}</p>
                    <div class="edit-store-button">
                        <button href="" class="btn btn-edit btn-outline-success edit-launch-botton">Launch</button>
                        <button href="" class="btn btn-edit btn-outline-warning">Reserve</button>
                    </div>

                </div>
            </div>
        </div>
    )
}



const ShowStore = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(props.product)
    }, [props])


    let history = useHistory();
    function addNewItem() {
        history.push('/addItem')
    }

    function LastItem() {
        return (
            <div>
                <div class="card card-a " >
                    <div class="card-body">
                        <div style={{ color: "#ffec62" }}>
                            <i class="fas fa-plus-circle fa-5x vertical-center" onClick={addNewItem}></i>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const items = [
        {
            'img': 'https://f.btwcdn.com/store-34660/product/49e0623f-5e1d-9c4f-d254-5b7f69a49e9a.jpg',
            'name': 'mango',
            'isReservable': true,
            'isLaunch': false
        }, {
            'img': 'https://www.spcosmeticsplus.com/wp-content/uploads/2018/02/banana-extract.jpg',
            'name': 'banana',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://f.btwcdn.com/store-34660/product/466d4abc-625b-1010-6822-58a2ec549146.jpg',
            'name': 'grape',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://cd.lnwfile.com/vkzco5.jpg',
            'name': 'papaya',
            'isReservable': false,
            'isLaunch': false
        }, {
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNlsCsrIpGEwT5RKBZA1L9IfTyuCMut0xpGMdVRpL8N_g_6aoV',
            'name': 'orange',
            'isReservable': false,
            'isLaunch': false
        }
    ]

    console.log("store", product)
    return (
        <div >
            <div class="container">
                <div class="edit-store-title underline ">Products(5)</div>
                <div class="row row-card">
                    {product.map((item) => Item(item.productType, item.productName, item.productDesc))}
                    {LastItem()}

                </div>
            </div>
        </div>
    );
};

export default ShowStore;