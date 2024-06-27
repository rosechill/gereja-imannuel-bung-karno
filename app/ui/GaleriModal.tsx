// components/ModalComponent.js
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface ModalComponentProps {
  imgSrc: StaticImageData
  isOpen: boolean
  onClose: () => void
}
const ModalComponent: React.FC<ModalComponentProps> = ({ imgSrc, isOpen, onClose }) => {
  return (
    <Modal size="4xl" backdrop='opaque' closeButton isOpen={isOpen} onClose={onClose}>
      <ModalContent >
        <ModalHeader>
          <p id="modal-title" className='text-xl font-bold'>Gereja Imannuel Bung Karno</p>
        </ModalHeader>
        <ModalBody>
          <Image src={imgSrc} alt="image" layout="responsive" className="rounded-xl object-cover max-h-[500px]" />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalComponent
