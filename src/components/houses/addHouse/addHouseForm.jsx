import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm, useFieldArray, Controller  } from 'react-hook-form';
import { addHouse } from '../../../Redux/houses/houseSlice';
import LocationN from '../formSearch'
import { useSelector } from 'react-redux';
import { Spin } from "react-cssfx-loading";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../../../Styles/houseListing/houseForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddHouse = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'near_by_places_attributes',
  });
  const dispatch = useDispatch();

  const [clickedLocation, setClickedLocation] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const { error, house } = useSelector((state) => state.houses);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

//Handle image input files preview and remove
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setSelectedImages((prev) => prev.concat(newImages));
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };


  const notify = () => toast.error("Email already exist!",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
      });

      const success = () => toast.success("Register successfully!",{
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
          });


  const [cityAddress, setCityAddress] = useState({
    longitude: 3.808118661673009,
     latitude: 11.519562005996704,
     value: "Yaounde", id: 1})

const cityOption = [
  {longitude: 2323, latitude: 2.45759, value: "Yaounde", id: "1"},
  {longitude: 2323, latitude: 2.45759, value: "Douala", id: "2"},
  {longitude: 2323, latitude: 2.45759, value: "Buea", id: "3"},
  {longitude: 2.808118661673009, latitude: 10.519562005996704, value: "Bamenda", id: "4"},
  {longitude: 2323, latitude: 2.45759, value: "Limbe", id: "5"},
  {longitude: 2323, latitude: 2.45759, value: "Kumba", id: "6"},
  {longitude: 2323, latitude: 2.45759, value: "Kribi", id: "7"},
  {longitude: 2323, latitude: 2.45759, value: "Bafoussam", id: "8"},
  {longitude: 2323, latitude: 2.45759, value: "Bertoua", id: "9"},
  {longitude: 2323, latitude: 2.45759, value: "Ebolowa", id: "10"},
  {longitude: 2323, latitude: 2.45759, value: "Garoua", id: "11"},
  {longitude: 2323, latitude: 2.45759, value: "Maroua", id: "12"},
  {longitude: 2323, latitude: 2.45759, value: "Ngaoundere", id: "13"},
  {longitude: 2323, latitude: 2.45759, value: "Nkongsamba", id: "14"},

]
console.log(cityAddress);
//Handle map click/ location and address
const address = {
  latitude: cityAddress.latitude, longitude: cityAddress.longitude,
};
const handleMapClick = (lat, lng) => {
  setClickedLocation({ latitude: lat, longitude: lng });
}

  const onSubmit = (data) => {
    if (!data.title) {
      const titleError = document.getElementById('titleError');
      titleError.style.display = 'block';
      return;
    } else if (!data.category) {
      const categoryError = document.getElementById('categoryError');
      categoryError.style.display = 'block';

      return;
    } else if (!data.price) {
      const priceError = document.getElementById('priceError');
      priceError.style.display = 'block';
      return;
    } else if (!data.houseDescription) {
      const descriptionError = document.getElementById('descriptionError');
      descriptionError.style.display = 'block';
      return;
    } else if (!clickedLocation) {
      const locationError = document.getElementById('locationError');
      locationError.style.display = 'block';
      return;
    } else if (!data.near_by_places_attributes[0]) {
      const nearbyError = document.getElementById('nearbyError');
      nearbyError.style.display = 'block';
      return;
    }
    else if (data.images.length < 4) {
      const imageError = document.getElementById('imageError');
      imageError.style.display = 'block';
      return;
    }
    else if (!data.video[0]) {
      const videoError = document.getElementById('videoError');
      videoError.style.display = 'block';
      return;
    }
    else if (!data.bedroom) {
      const bedroomError = document.getElementById('bedroomError');
      bedroomError.style.display = 'block';
      return;
    }
    else if (!data.bathroom) {
      const bathroomError = document.getElementById('bathroomError');
      bathroomError.style.display = 'block';
      return;
    }
    else if (!data.kitchen) {
      const kitchenError = document.getElementById('kitchenError');
      kitchenError.style.display = 'block';
      return;
    }
    else if (!data.waterSource) {
      const waterError = document.getElementById('waterError');
      waterError.style.display = 'block';
      return;
    }
    else if (!data.metalType) {
      const metalError = document.getElementById('metalError');
      metalError.style.display = 'block';
      return;
    }
    else if (!data.city) {
      const cityError = document.getElementById('cityError');
      cityError.style.display = 'block';
      return;
    }
    else if (!data.quatar) {
      const quatarError = document.getElementById('quatarError');
      quatarError.style.display = 'block';
      return;
    }
    


    const  formData = new FormData();

    // Append text data to formData
    formData.append('title', data.title);
    formData.append('category_id', data.category);
    formData.append('number_of_houses', data.numberOfProperty);
    formData.append('price', data.price);
    formData.append('garage', data.garage);
    formData.append('bedroom', data.bedroom);
    formData.append('bathroom', data.bathroom);
    formData.append('kitchen', data.kitchen);
    formData.append('water_source', data.waterSource);
    formData.append('metal_type', data.metalType);
    formData.append('description', data.houseDescription);


     // Append location data
    formData.append('location_attributes[city]', cityAddress.value);
    formData.append('location_attributes[quater]', data.quatar);
    formData.append('location_attributes[latitude]', clickedLocation.latitude);
    formData.append('location_attributes[longitude]', clickedLocation.longitude);

     //Append security data
     formData.append('security_attributes[gate]', data.gate);
     formData.append('security_attributes[securityMan]', data.securityMan);


    // Append images to formData
    for (let i = 0; i < data.images.length; i++) {
      formData.append('images[]', data.images[i]);
    }
    formData.append('video', data.video[0]);


    // Append near by places to formData
    data.near_by_places_attributes.forEach((place) => {
      formData.append(`near_by_places_attributes[][name]`, place.name);
      formData.append(`near_by_places_attributes[][distance]`, place.distance);
      formData.append(`near_by_places_attributes[][place_id]`, place.place_id);
    });
     
    setIsSubmitting(true);
    setTimeout( async () => {
    try {
      await dispatch(addHouse(formData));
      setIsSubmitting(false)
    } catch (error) {
      setIsSubmitting(false);
    }
  }, 1500)
  };

  useEffect(() => {
    if (error) {
      notify();
    } else if (house && !error) {
      success();
      setTimeout(() => {
      window.location.reload(navigate('/'));
    }, 1500);
    }
  }, [error, house]);



  return (
    <section className='fromSection'>

      <div className='formCOntainer'>

        <h1 className='form-header'>Submit Property</h1>

    <form className='formClass' onSubmit={handleSubmit(onSubmit)}>
        <h2>Basic Information</h2>
        <hr />
      <div className='titleSection'>
        <p>Property title</p>
        <span id='titleError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty title is required!</span>
      <input {...register('title')} />
      </div>


      <div className='NumberType'>

      <div className='titleSection'>
        <p> 
          Property Type
        </p>
        <span id='categoryError' style={{color: 'red', fontSize: 13, display: 'none'}}> Proprty category is required!</span>
        <select {...register("category")}>
        <option value="1">--Choose--</option>
        <option value="1">Studio</option>
        <option value="2">Single Room</option>
        <option value="3">Appartment</option>
      </select>
      </div>
     
      <div className='titleSection'>
        <p>
          Number of Property
        </p>

      <input type="number" {...register('numberOfProperty')} />
      </div>

      </div>



      <div className='NumberType text-type'>

       <div className='titleSection'>
       <p> 
        Price
        </p>
        <span id='priceError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty price is required!</span>
       <input type="number" {...register('price')} />
      </div>

      <div className='titleSection'>
  <p>
    Bedroom
  </p>
  <span id='bedroomError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty bedroom is required!</span>
<input type="number" {...register('bedroom')} />
      </div>

      <div className='titleSection'>
       <p>
         Bathroom
       </p>
        <span id='bathroomError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty bathroom is required!</span>
       <input type="number" {...register('bathroom')}  />
      </div>

      </div>

      <div className='NumberType text-type'>

       <div className='titleSection'>
       <p> 
        Kitchen
        </p>
        <span id='kitchenError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty kitchen is required!</span>
       <input type="number" {...register('kitchen')} />
      </div>

      <div className='titleSection'>
  <p>
    water source
  </p>
  <span id='waterError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty water source is required!</span>
  <select {...register("waterSource")} >
        <option>--Choose--</option>
        <option value="Cam_water">Cam-Water</option>
        <option value="forage">forage</option>
        <option value="well">well</option>
      </select>
      </div>

      <div className='titleSection'>
       <p>
         Electricity metal type
       </p>
        <span id='metalError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty metal type is required!</span>
       <select {...register("metalType")} >
        <option >--Choose--</option>
        <option value="Enoe">Enoe</option>
        <option value="pre-paid">pre-paid metal</option>
      </select>
      </div>

      </div>


      <div className='security'>
        <p>
         Present of a garage?
        </p>
        <div className="flipswitch">
      <input type="checkbox" className="flipswitch-cb"  id='fsss' {...register('garage')}/>
       
      <label className="flipswitch-label" htmlFor="fsss">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
    </label>

       </div>
      </div>
   

      <div className='textAreaField'>

      <h2>Property Description</h2>

       <hr />
       <p>
         Description
       </p>
        <span id='descriptionError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty description is required!</span>
      <textarea type='textarea' {...register('houseDescription')} placeholder='Write details' />

     </div>

 {//  property location
 }
     <section className='locationSection'>
      <div className='locationHead'>
        <h2> Property Location </h2>

        <hr />
      </div>


    <div className='NumberType'>

      <div className='titleSection'>
        <p> 
          City
        </p>
      <span id='cityError' style={{color: 'red', fontSize: 13, display: 'none'}}>Proprty city is required!</span>
      <select {...register("city")} onChange={(e) => setCityAddress(e.target.value)}>
         {
            cityOption.map((city) => (
              <option key={city.id} value={city}>{city.value}</option>
            ))
         }
      </select>
      </div>
     
      <div className='titleSection'>
        <p>
          Quatar
        </p>
         <span id='quatarError' style={{color: 'red', fontSize: 13, display: 'none'}}>Property quatar required</span>
      <input type="number" {...register('quatar')} />
      </div>
    </div>

    <div className='mapSection'>
      <p>Please shot your property on the map below.</p>
      <LocationN address={address} onMapClick={handleMapClick} />
      <span id='locationError' style={{color: 'red', fontSize: 13, display: 'none'}}> Location needed!</span>
    </div>
    </section>

{//  property Security
 }
    <section className='securtySection'>
      <div className='locationHead'>
        <h2> Property Security </h2>
        <hr />
      </div>



      <div className='security'>
        <p> 
         The present of a Gate in the property
        </p>
        <div className="flipswitch">
      <input type="checkbox" className="flipswitch-cb"  id='fss' {...register('gate')} />
       
      <label className="flipswitch-label" htmlFor="fss">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
    </label>

       </div>
      
      </div>
     
      <div className='security'>
        <p>
         Security man
        </p>
        <div className="flipswitch">
      <input type="checkbox" className="flipswitch-cb" {...register('securityMan')} id='fs' />
       
      <label className="flipswitch-label" htmlFor="fs">
        <div className="flipswitch-inner"></div>
        <div className="flipswitch-switch"></div>
    </label>

       </div>

      </div>
    </section>

 {//  property Images and video
 }

<section className='photos-video' >
  <h2>Add Photos and Videos</h2>
  <hr />
<p>Add more than 4 images of the property</p>
  <Controller
  name="images" 
  control={control}
  render={({ field }) => (
    <div className="container">
      <input
        className="custom-file-input"
        type="file"
        onChange={(e) => {
          field.onChange(e.target.files); // Update the images field value with the FileList object
          handleImageChange(e); 
        }}
        multiple
        
      />
      <span id='imageError' style={{color: 'red', fontSize: 13, display: 'none'}}>Images needed!</span>
    </div>
  )}
/>

<ToastContainer 
          autoClose={1500}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          limit={1}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />

  <div className="preview-container">
    {selectedImages?.map((image, index) => (
      <div key={index} className="image-preview">
        <img src={image} className='imageFile' alt={`Preview ${index + 1}`} />
        <button className='preview-remove' onClick={() => handleRemoveImage(index)}>
          <CloseOutlinedIcon style={{ fontSize: '15' }}/>
        </button>
      </div>
    ))}
  </div>

     <div>
      <p>Video</p>
      <p>Include a video of the propety</p>
      <input type='file' {...register('video')} multiple />
      <span id='videoError' style={{color: 'red', fontSize: 13, display: 'none'}}>Video needed!</span>
     </div>

    </section>

    <ToastContainer 
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          limit={1}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />

<div className='nearbySection' >
 <h2>Add Nearby Places</h2>
 
 <hr />
 <span id='nearbyError' style={{color: 'red', fontSize: 13, display: 'none'}}>Nearby places needed!</span>
 {fields.map((item, index) => (
    <div className='nearbyPlace' key={item.id}>
      <div className='titleSection place-name'>
        <p>Place Name</p>
        <input {...register(`near_by_places_attributes[${index}].name`)} placeholder='e.g School name' />
      </div>

      <div className='titleSection place-name'>
        <p>Distances</p>
        <input type='number' {...register(`near_by_places_attributes[${index}].distance`)} placeholder='e.g 100m to the school'/>
      </div>

      <div className='titleSection'>
        <p>Place Category</p>
        <input type='number' {...register(`near_by_places_attributes[${index}].place_id`)} />
      </div>

      <button className='remove' type="button" onClick={() => remove(index)}>
        <CloseOutlinedIcon />
      </button>
    </div>
  ))}
      <button className='add' type="button" onClick={() => append({})}>
        <AddOutlinedIcon />
      </button>

     </div>
      <div className='buttonSection'>
     <button className='button-submit-1' disabled={isSubmitting}>
      {
       isSubmitting ? <Spin color="#FFFFFF"  /> : 'Submit Property'
      }
     </button>
     </div>
    </form>
    </div>
    </section>
  );
};

export default AddHouse;
