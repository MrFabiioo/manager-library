import { XCircleIcon } from '@heroicons/react/24/solid';

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 8000);
  }

  return (
    <>
        {alert?.active && (
            <div x-data="true"  className="bg-indigo-100 p-5 w-full rounded mb-8">
            <div className="flex space-x-3">
                <div className="flex-1 leading-tight text-bold text-black font-medium">
                {alert.message}<strong>{alert.book}</strong>
                  </div>
                <button type="button">
                <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
                </button>
            </div>
            </div>
        )}
    </>
  );
};

export default Alert;

