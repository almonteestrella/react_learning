import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

/* eslint-disable react/prop-types */
function AddEmployee(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');

    return (
        <>
            <button
                className='block mx-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all m-4'
                onClick={handleShow}
            >
                + Add Employee
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        className='w-full max-w-sm'
                        id='form'
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.newEmployee(name, role, img);
                            handleClose();
                            setImg('');
                            setName('');
                            setRole('');
                        }}
                    >
                        <div className='md:flex md:items-center mb-6'>
                            <div className='md:w-1/3'>
                                <label
                                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                                    htmlFor='name'
                                >
                                    Full Name
                                </label>
                            </div>
                            <div className='md:w-2/3'>
                                <input
                                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    id='name'
                                    placeholder='full name'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:flex md:items-center mb-6'>
                            <div className='md:w-1/3'>
                                <label
                                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                                    htmlFor='role'
                                >
                                    Role
                                </label>
                            </div>
                            <div className='md:w-2/3'>
                                <input
                                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    id='role'
                                    placeholder='Role'
                                    type='text'
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:flex md:items-center mb-6'>
                            <div className='md:w-1/3'>
                                <label
                                    className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                                    htmlFor='role'
                                >
                                    Image URL
                                </label>
                            </div>
                            <div className='md:w-2/3'>
                                <input
                                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    id='img'
                                    type='text'
                                    placeholder='https://www.google.com'
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full'
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        form='form'
                        className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;
