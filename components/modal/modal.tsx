import React, { useEffect, useRef } from 'react';
import Typography from '../typography/typography';
import Button from '../button/button';

interface ModalProps {
  openModal: boolean;
  modalTitle: string;
  modalContent: string;
  submitText?: string;
  cancelText?: string;
  handleCancel: () => void;
  handleSubmit?: (actionID?: number) => void;
  actionID?: number;
}

const Modal: React.FC<ModalProps> = ({
  openModal,
  modalTitle,
  modalContent,
  submitText,
  handleSubmit,
  actionID,
  cancelText = 'Cancel',
  handleCancel,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCancel();
      }
    };

    if (openModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModal, handleCancel]);

  return (
    <div>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            ref={modalRef}
            className="max-w-[460px] md:min-w-[460px] dark:bg-slate-950 bg-gray-200 shadow-lg py-2 rounded-lg border-blue-900 border-2"
          >
            <div className="py-3 px-4 mb-2">
              <Typography variant="h3">{modalTitle}</Typography>
            </div>
            <div className="px-4 pb-4">
              <Typography variant="p">{modalContent}</Typography>
            </div>
            <div className="flex justify-center items-center px-4 pt-2">
              {submitText && (
                <div className="mr-4">
                  <Button
                    type="button"
                    onClick={() => handleSubmit && handleSubmit(actionID)}
                    text={submitText}
                  />
                </div>
              )}
              {cancelText && (
                <Button
                  type="button"
                  onClick={handleCancel}
                  text={cancelText}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
