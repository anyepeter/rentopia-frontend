import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useFieldArray, Controller  } from 'react-hook-form';
import { addHouse } from '../../../Redux/houses/houseSlice';
import LocationN from '../formSearch'
// import AddressToLatLng from './formsd';
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

  const selectPlace = [{
    name: "school",
    id: 1
  }, 
  {
    name: "market",
    id: 2
  },
  {
    name: "hospital",
    id: 3
  }
]

  const onSubmit = (data) => {
    dispatch(addHouse(data));
  };

  const address = {
    latitude: 4.714528,
    longitude: 13.034560,
  };

  const handleMapClick = (lat, lng) => {
    setClickedLocation({ latitude: lat, longitude: lng });
  };

  console.log(clickedLocation)

  return (
    <section className='fromSection'>

      <div className='formCOntainer'>

        <h1>Submit Property</h1>

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
      <input type="number" {...register('user_id')} />
      </div>
     
      <div className='titleSection'>
        <p>
          Number of Property
        </p>
      <input type="number" {...register('category_id')} />
      </div>

      </div>



      <div className='NumberType'>

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

      <div className='NumberType'>

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
<input type="number" {...register('category_id')} />
      </div>

      <div className='titleSection'>
       <p>
         Electricity type
       </p>
       <input type="number" {...register('category_id')} />
      </div>

      </div>


      <div className='security'>
        <p>
         Present of a garage?
        </p>
        <p>
      <input type="checkbox" {...register('category_id')} />
       </p>
      </div>
   

      <div className='textAreaField'>

      <h2>Property Description</h2>

       <hr />
       <p>
         Description
       </p>

      <textarea type='textarea' {...register('location_attributes.city')} />

     </div>

 {//  property location
 }
     <section className='locationSection'>
      <div className='locationHead'>
        <h2> property Location </h2>

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
      <LocationN />
    </div>
    </section>

{//  property Security
 }
    <section className='securtySection'>
      <div className='locationHead'>
        <h2> property Security </h2>
        <hr />
      </div>



      <div className='security'>
        <p> 
         The present of a Gate in the property
        </p>
        <p>
        <input type="checkbox" {...register('user_id')} />
        </p>
      
      </div>
     
      <div className='security'>
        <p>
         Security man
        </p>
        <p>
      <input type="checkbox" {...register('category_id')} />
       </p>
      </div>
   
      <div className='textAreaFieldSection'>

       <p>
        Security Description
       </p>

      <textarea type='textarea' {...register('location_attributes.city')} />

     </div>
    </section>

 {//  property Images and video
 }

    <section className='titleSection'>
      <h2>Add Photos and Videos</h2>
      <hr />

     <div>
      <p>Images</p>
      <input type='file' {...register('images[]')} multiple />
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
          <div className='titleSection'>
            <p>Place Name</p>
          <input {...register(`near_by_places_attributes[0].name`)} />
          </div>

          <div className='titleSection'>
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
            <div className='titleSection'>
            <p>Place Name</p>
          <input {...register(`near_by_places_attributes[${index + 1}].name`)} />
          </div>

          <div className='titleSection'>
            <p>Distances</p>
          <input type='number' {...register(`near_by_places_attributes[${index + 1}].distance`)} />
          </div>

          <div className='titleSection'>
            <p>Place Category</p>
         <input {...register(`near_by_places_attributes[${index + 1}].place_id`)} />
         </div>
         <button className='remove' type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button className='add' type="button" onClick={() => append({})}>
        Add Place
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
