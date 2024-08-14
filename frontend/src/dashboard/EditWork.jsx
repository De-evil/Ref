import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput, Select } from "flowbite-react";
import {useParams, useLoaderData } from 'react-router-dom'

const EditWork = () => {
  const {id} = useParams ();
  const {Name, imageURL, category, description, location} = useLoaderData()

  const WorkCategories = [
    'Marriage',
    'Enagement',
    'Couple Photoshoot',
    'Outdoor Photoshoot',
    'Baby shower',
    'Baby Photoshoot',
    'Maternity photoshoot',
    'Birthday party',
    'Bachelor Party'
   ]
  
   const [selectedWorkCategory, setSeletedWorkCategory] = useState(WorkCategories[0]);
  
   const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSeletedWorkCategory(event.target.value);
    
   }
  
   //handle work submission
   const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.Name.value;
    const imageURL = form.imageURL.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value
  
    const UpdateWorkObj = {
      Name, imageURL, description, category, location
    }
    //  console.log(WorkObj);
    // update the data
    fetch(`http://localhost:5000/work/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UpdateWorkObj)
    }).then(res => res.json()).then(data => {
      alert("Updated Successfully!!!")
      
    })
  
    
   }
  
  
  
  //  "Name": 
  // "imageURL":
  // "category":
  // "description": 
  // "location": 
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'> Update the work data</h2>
  
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* first row */}
        <div className='flex gsp-8'>
          {/* first row */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="Name" value="Name" />
          </div>
          <TextInput id="Name" name='Name' type="Name" placeholder="Name" required type="text" defaultValue={Name} />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="location" value="location" />
          </div>
          <TextInput id="location" name='location' type="location" placeholder="Eg: Coimbatore, Tamil Nadu" required type='text'defaultValue={location} />
        </div>
        </div>
        {/* second row */}
        <div className='flex gsp-8'>
          {/* first row */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value=" Work imageURL" />
          </div>
          <TextInput id="imageURL" imageURL='Name'  placeholder="Image URL" required type='text' defaultValue={imageURL} />
        </div>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Category" />
          </div>
  
          <Select id='inputState' name='category' className='w-full rounded' value={selectedWorkCategory}
          onChange={handleChangeSelectedValue}>
                {
                  WorkCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
          </Select>
        </div>
        </div>
  
        {/* Description  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Description" value="Description" />
          </div>
          <Textarea id="description" type="description" placeholder="Memories....!!" className='w-full' required rows={5} defaultValue={description} />
          </div>
        
        <Button type='submit' className='mt-5 bg-blue-600'>
          Update 
        </Button>  
      </form>
      </div>
    )
  
}

export default EditWork