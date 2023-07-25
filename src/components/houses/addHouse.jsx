import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, useFieldArray, Controller  } from 'react-hook-form';
import { addHouse } from '../../Redux/houses/houseSlice';
import LocationN from './formSearch'
// import AddressToLatLng from './formsd';
import '../../Styles/houseListing/houseForm.css'


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



      <div className='textAreaField'>

      <h2>Property Description</h2>

       <hr />
       <p>
         Description
       </p>

      <textarea type='textarea' {...register('location_attributes.city')} />

     </div>


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


      {fields.length === 0 && (
        <div key={0}>
          <div>
            <p>Place Name</p>
          <input {...register(`near_by_places_attributes[0].name`)} />
          </div>

          <div>
            <p>Distance from the property</p>
          <input type='number' {...register(`near_by_places_attributes[0].distance`)} />
          </div>

          <div>
            <p>Place Category</p>
         <input {...register(`near_by_places_attributes[0].place_id`)} />
         </div>
        </div>
      )}

{fields.slice(1).map((item, index) => (
        <div key={item.id}>
          <input {...register(`near_by_places_attributes[${index + 1}].name`)} />
          <input type='number' {...register(`near_by_places_attributes[${index + 1}].distance`)} />
          <input type='number' {...register(`near_by_places_attributes[${index + 1}].place_id`)} />
          <button type="button" onClick={() => remove(index + 1)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={() => append({})}>
        Add Place
      </button>


    </form>
    </div>
    </section>
  );
};

export default AddHouse;
