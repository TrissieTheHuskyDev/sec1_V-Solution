import React, { useState, useEffect } from 'react'
import Spinner from '../web-components/Spinner'
import Images from '../web-components/Images'
import UploadButton from '../web-components/UploadButton'
import Notifications, { notify } from 'react-notify-toast'
import axios from 'axios'

const API_URL = "http://127.0.0.1:8000/api/user/uploadimage/"
const toastColor = {
    background: '#505050',
    text: '#fff'
}

const UploadComponent = (props) => {
    const [uploading, setUploading] = useState(false)
    const [images, setImages] = useState([])

    useEffect(() => {
        console.log(props)
        setImages([{ 0:props.avatar}])
    },[])

    const toast = notify.createShowQueue()

    const filter = id => {
        return images.filter(image => image.public_id !== id)
    }

    const removeImage = id => {
        setImages(filter(id))
    }

    const onError = id => {
        toast('Oops, something went wrong', 'custom', 2000, toastColor)
        setImages(filter(id))

    }

    const checkState = () =>{
        console.log("images", images)
        console.log("props", props)
    }

    const onChange = async e => {
        const errs = []
        const files = Array.from(e.target.files)

        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            return toast(msg, 'custom', 2000, toastColor)
        }

        const formData = new FormData()
        const types = ['image/png', 'image/jpeg', 'image/gif']

        files.forEach((file, i) => {
            
            if (types.every(type => file.type !== type)) {
                errs.push(`'${file.type}' is not a supported format`)
            }

            if (file.size > 150000) {
                errs.push(`'${file.name}' is too large, please pick a smaller file`)
            }

            formData.append('image', file)
        })

        if (errs.length) {
            return errs.forEach(err => toast(err, 'custom', 2000, toastColor))
        }

        setUploading(true)

        await axios.post(API_URL, formData, {
            headers: {
                'Authorization': `Token ` + localStorage.getItem('Token'),
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw res
                }
                return res.json()
            })
            .then(images => {
                setUploading(false)
                setImages(images)
            })
            .catch(err => {
                toast(err.message, 'custom', 2000, toastColor)
                setUploading(false)

            })
    }

    const content = () => {
        switch (true) {
            case uploading:
                return <Spinner />
            case images.length > 0:
                return <Images images={images} removeImage={() => removeImage()} onError={onError()} />
            default:
                return <UploadButton single="true" onChange={(e) => onChange(e)} />
        }
    }


    return (
        <div class="container">
            <Notifications />
            <div class="buttons ">
                {content()}
            </div>
            <div>
                <button onClick={()=> checkState()}>check</button>
            </div>
        </div>
    )
}

export default UploadComponent

