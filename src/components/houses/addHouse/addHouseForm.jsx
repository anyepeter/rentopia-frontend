import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useFieldArray, Controller  } from 'react-hook-form';
import { addHouse } from '../../../Redux/houses/houseSlice';
import LocationN from '../formSearch'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../../../Styles/houseListing/houseForm.css'


const AddHouse = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'near_by_places_attributes',
  });
  const dispatch = useDispatch();

  const [clickedLocation, setClickedLocation] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  console.log(selectedImages)

//Handle map click/ location and address
  const address = {
    latitude: 3.808118661673009, longitude: 11.519562005996704,
  };
  const handleMapClick = (lat, lng) => {
    setClickedLocation({ latitude: lat, longitude: lng });
  };

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


  const onSubmit = (data) => {
    console.log(data)

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
    formData.append('location_attributes[city]', data.city);
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

     dispatch(addHouse(formData));
  };

  return (
    <section className='fromSection'>

      <div className='formCOntainer'>

        <h1 className='form-header'>Submit Property</h1>

    <form className='formClass' onSubmit={handleSubmit(onSubmit)}>
        <h2>Basic Information</h2>
        <hr />
      <div className='titleSection'>
        <p>Property title</p>
      <input {...register('title')} />
      </div>


      <div className='NumberType'>

      <div className='titleSection'>
        <p> 
          Property Type
        </p>
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
       <input type="number" {...register('price')} />
      </div>

      <div className='titleSection'>
  <p>
    Bedroom
  </p>
<input type="number" {...register('bedroom')} />
      </div>

      <div className='titleSection'>
       <p>
         Bathroom
       </p>
       <input type="number" {...register('bathroom')} />
      </div>

      </div>

      <div className='NumberType text-type'>

       <div className='titleSection'>
       <p> 
        Kitchen
        </p>
       <input type="number" {...register('kitchen')} />
      </div>

      <div className='titleSection'>
  <p>
    water source
  </p>
  <select {...register("waterSource")}>
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
       <select {...register("metalType")}>
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
      <input type="number" {...register('city')} />
      </div>
     
      <div className='titleSection'>
        <p>
          Quatar
        </p>
      <input type="number" {...register('quatar')} />
      </div>
    </div>

    <div className='mapSection'>
      <LocationN  address={address} onMapClick={handleMapClick} />
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
    </div>
  )}
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
      <input type='file' {...register('video')} multiple />
     </div>

    </section>



<div className='nearbySection' >
 <h2>Add Nearby Places</h2>

 <hr />
 {fields.map((item, index) => (
    <div className='nearbyPlace' key={item.id}>
      <div className='titleSection place-name'>
        <p>Place Name</p>
        <input {...register(`near_by_places_attributes[${index}].name`)} />
      </div>

      <div className='titleSection place-name'>
        <p>Distances</p>
        <input type='number' {...register(`near_by_places_attributes[${index}].distance`)} />
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
      <input type='Submit' />
     </div>
    </form>
    </div>
    </section>
  );
};

export default AddHouse;
