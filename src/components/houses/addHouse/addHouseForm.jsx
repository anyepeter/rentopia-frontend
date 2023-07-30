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
 

  const handleAddPlace = () => {
    if (fields.length === 0) {
      append({ name: '', distance: '', place_id: '' });
    }
  };

  const [clickedLocation, setClickedLocation] = useState(null);


  const handlePlaceChange = (value) => {
    console.log(value)
    SetselectsPlace(value)
return value;
  }

  const onSubmit = (data) => {
    dispatch(addHouse(data));
  };

  const address = {
    latitude: 3.714528,
    longitude: 11.034560,
  };

  const handleMapClick = (lat, lng) => {
    setClickedLocation({ latitude: lat, longitude: lng });
  };

  console.log(clickedLocation)




//Handle image input files preview 

  const [selectedImages, setSelectedImages] = useState([]);
console.log(selectedImages)
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
      <input type="number" {...register('category_id')} />
      </div>

      </div>



      <div className='NumberType text-type'>

       <div className='titleSection'>
       <p> 
        Price
        </p>
       <input type="number" {...register('user_id')} />
      </div>

      <div className='titleSection'>
  <p>
    Bedroom
  </p>
<input type="number" {...register('category_id')} />
      </div>

      <div className='titleSection'>
       <p>
         Bathroom
       </p>
       <input type="number" {...register('category_id')} />
      </div>

      </div>

      <div className='NumberType text-type'>

       <div className='titleSection'>
       <p> 
        Ketchen
        </p>
       <input type="number" {...register('user_id')} />
      </div>

      <div className='titleSection'>
  <p>
    water source
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
         Electricity type
       </p>
       <select {...register("category")}>
        <option value="1">--Choose--</option>
        <option value="1">Studio</option>
        <option value="2">Single Room</option>
      </select>
      </div>

      </div>


      <div className='security'>
        <p>
         Present of a garage?
        </p>
        <div className="flipswitch">
      <input type="checkbox" name="flipswitch" className="flipswitch-cb" {...register('catory_id')} id='fs' checked/>
       
      <label class="flipswitch-label" htmlFor="fs">
        <div class="flipswitch-inner"></div>
        <div class="flipswitch-switch"></div>
    </label>

       </div>
      </div>
   

      <div className='textAreaField'>

      <h2>Property Description</h2>

       <hr />
       <p>
         Description
       </p>

      <textarea type='textarea' {...register('location_attributes.city')} placeholder='Write details' />

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
      <input type="number" {...register('user_id')} />
      </div>
     
      <div className='titleSection'>
        <p>
          Quater
        </p>
      <input type="number" {...register('category_id')} />
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
      <input type="checkbox" name="flipswitch" className="flipswitch-cb" {...register('category_id')} id='fs' />
       
      <label class="flipswitch-label" htmlFor="fs">
        <div class="flipswitch-inner"></div>
        <div class="flipswitch-switch"></div>
    </label>

       </div>
      
      </div>
     
      <div className='security'>
        <p>
         Security man
        </p>
        <div className="flipswitch">
      <input type="checkbox" name="flipswitch" className="flipswitch-cb" {...register('category_id')} id='fs' />
       
      <label class="flipswitch-label" htmlFor="fs">
        <div class="flipswitch-inner"></div>
        <div class="flipswitch-switch"></div>
    </label>

       </div>

      </div>
   
      <div className='textAreaFieldSection'>

       <p>
        Security Description
       </p>

      <textarea type='textarea' {...register('location_attributes.city')} placeholder='Write details' />

     </div>
    </section>

 {//  property Images and video
 }

    <section className='photos-video' >
      <h2>Add Photos and Videos</h2>
      <hr />

      <div>
      <div className="container">
        <input
          className="custom-file-input"
          type="file"
          onChange={handleImageChange}
          multiple
          
        />
      </div>

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
    </div>

     <div>
      <p>Vidoe</p>
      <input type='file' {...register('images[]')} multiple />
     </div>

    </section>



<div className='nearbySection' >
 <h2>Add Nearby Places</h2>

 <hr />
      {fields.length === 0 && (
<div className='nearbyPlace' key={0}>
          <div className='titleSection place-name'>
            <p>Place Name</p>
          <input {...register(`near_by_places_attributes[0].name`)} />
          </div>

          <div className='titleSection place-name'>
            <p>Distances</p>
          <input type='number' {...register(`near_by_places_attributes[0].distance`)} />
          </div>

          <div className='titleSection'>
            <p>Place Category</p>
         <input {...register(`near_by_places_attributes[0].place_id`)} />
         </div>
        </div>
      )}

{fields.slice(1).map((item, index) => (
        <div className='nearbyPlace' key={item.id}>
            <div className='titleSection place-name'>
            <p>Place Name</p>
          <input {...register(`near_by_places_attributes[${index + 1}].name`)} />
          </div>

          <div className='titleSection place-name'>
            <p>Distances</p>
          <input type='number' {...register(`near_by_places_attributes[${index + 1}].distance`)} />
          </div>

          <div className='titleSection'>
            <p>Place Category</p>
         <input {...register(`near_by_places_attributes[${index + 1}].place_id`)} />
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
