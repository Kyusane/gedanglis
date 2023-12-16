import React from 'react'

const ConfirmModal = ({ onClose, children ,onConfirm ,option}) => {
     const handleCloseClick = (e) => {
          e.preventDefault();
          onClose();
     };

     const handleConfirm = (e) =>{
          e.preventDefault()
          onConfirm()
          onClose()
     }
     return (
          <div className='w-screen h-screen bg-opacity-70 flex fixed top-0 left-0 bg-main justify-center block items-center'>
               <div className='z-[99999] bg-secondary w-max h-auto p-5 flex flex-col gap-5 rounded-xl justify-center  items-center'>
                    <h2 className='text-main'>{children}</h2>
                    <div className='flex gap-5'>
                         <button className='px-10 py-3 hover:scale-105 transition-all bg-green-500 rounded-lg'
                              onClick={handleCloseClick}
                         >Batal</button>
                         <button onClick={handleConfirm} className='px-10 py-3 hover:scale-105 transition-all bg-red-500 rounded-lg'>{option}</button>
                    </div>
               </div>
          </div>
     )
}

export default ConfirmModal