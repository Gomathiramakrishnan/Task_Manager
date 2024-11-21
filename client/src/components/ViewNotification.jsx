import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({ open, setOpen, e1 }) => {
    return(
      <>
        <ModalWrapper open={open} setOpen={setOpen}>
            <div className= 'py-4 w-full flex flex-col gap-4 items-center justify-center'>
                <Dialog.Title as='h3' className='font-semibold text-1g'>
                    {e1?.task?.Title}
                </Dialog.Title>
                <p className='text-start text-gray-500'>{e1?.text}</p>


                <Button
                  type='button'
                  className = 'bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto border'
                  onClick={() => setOpen(false)}
                  label='ok'
                />
            </div>
        </ModalWrapper>
      </>
    );
};

export default ViewNotification;