import React from 'react'
const page = ({ params }) => {
     return (
          <div className="w-full h-screen bg-secondary p-10">
               <div className="py-5">
                    <table className="w-1/2">
                         <tr>
                              <th>Device_ID</th>
                              <th>{decodeURIComponent(params.device_Id)}</th>
                         </tr>
                         <tr>
                              <th>Type</th>
                              <th>Monitoring</th>
                         </tr>
                    </table>
               </div>
               <table className=' w-full h-max overflow-x-scroll  block sm:table'>
                    <tr>  
                         <th>Timestamp</th>
                         <th>Daya</th>
                         <th>Tegangan</th>
                         <th>Arus</th>
                         <th>Baterai</th>
                    </tr>
                    <tr>
                         <td>Alfreds Futterkiste</td>
                         <td>Maria Anders</td>
                         <td>Germany</td>
                         <td>Germany</td>
                         <td>Germany</td>
                    </tr>
                    <tr>
                         <td>Centro comercial Moctezuma</td>
                         <td>Francisco Chang</td>
                         <td>Mexico</td>
                         <td>Mexico</td>
                         <td>Mexico</td>
                    </tr>
               </table>
          </div>
     )
}

export default page