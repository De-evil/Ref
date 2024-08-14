import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput, Select } from "flowbite-react";

const UploadWork = () => {
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
 const handleWorkSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const Name = form.Name.value;
  const imageURL = form.imageURL.value;
  const description = form.description.value;
  const category = form.category.value;
  const location = form.location.value

  const WorkObj = {
    Name, imageURL, description, category, location
  }
   console.log(WorkObj);
   // Sending data's to DB

  fetch('http://localhost:5000/upload-work', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(WorkObj)
  }).then(res => res.json()).then(data => {
    alert("Uploaded Successfully!!!")
    form.reset();
  })
 }



//  "Name": 
// "imageURL":
// "category":
// "description": 
// "location": 

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Upload Works</h2>

      <form onSubmit={handleWorkSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gsp-8'>
        {/* first row */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="Name" value="Name" />
        </div>
        <TextInput id="Name" name='Name' type="Name" placeholder="Name" required type='text' />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="location" value="location" />
        </div>
        <TextInput id="location" name='location' type="location" placeholder="Eg: Coimbatore, Tamil Nadu" required type='text' />
      </div>
      </div>
      {/* second row */}
      <div className='flex gsp-8'>
        {/* first row */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value=" Work imageURL" />
        </div>
        <TextInput id="imageURL" imageURL='Name'  placeholder="Image URL" required type='text' />
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
        <Textarea id="description" type="description" placeholder="Memories....!!" className='w-full' required rows={5} />
        </div>
      
      <Button type='submit' className='mt-5 bg-blue-600'>
        Upload 
      </Button>  
    </form>
    </div>
  )
}

export default UploadWork