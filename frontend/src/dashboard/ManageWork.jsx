import React, { useEffect, useState } from 'react'
import { Table,  } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageWork = () => {

  const [allWorks, setAllWorks] = useState([]);
   useEffect(() => {
     fetch("http://localhost:5000/all-works").then(res => res.json()).then(data => setAllWorks(data));
   },[])

   // Delete a data's

   const handleDelete = (id) => {
     console.log(id);
     fetch(`http://localhost:5000/work/${id}`,
      {
        method: "DELETE",
      },
     ).then(res => res.json()).then(data => {
      alert("Deleted Successfully")
      // setAllWorks(data);
    })
     
   }
  return (
    <div className='px-4 my-12'> 
       <h2 className='mb-8 text-3xl font-bold'> Upload Works</h2>

       {/* Tables for data's */}
       <Table className='lg:w-[1180px]' > 
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>location</Table.HeadCell>
          {/* <Table.HeadCell></Table.HeadCell> */}
          <Table.HeadCell>
            <span >Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allWorks.map((work, index) =><Table.Body className="divide-y" key={work._id}> 
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            { index + 1 }
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {work.Name}
            </Table.Cell>
            <Table.Cell>{work.category}</Table.Cell>
            <Table.Cell>{work.location}</Table.Cell>
            {/* <Table.Cell>$2999</Table.Cell> */}
            <Table.Cell>
              <Link  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-works/${work._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(work._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>) 
        }
      </Table>

    </div>
  )
}

export default ManageWork
