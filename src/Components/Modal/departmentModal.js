import React from 'react';

const departmentModal = ({handleDelete}) => {

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleCreateDepartment} className='space-y-4'>
                        <div className='form-control'>
                            <label>Name</label>
                            <input type="text" name='name' className='input input-bordered' />
                        </div>
                        <div className='form-control'>
                            <label>Department Head</label>
                            <select name="head" id="" className='input input-bordered'>
                                {
                                    employee?.map(name => <option key={name?._id}>{name?.FullName}</option>)
                                }
                            </select>
                        </div>
                        <div className='form-control'>
                                <label>Employee Number</label>
                                <input type="number" className='input input-bordered' name='number' />
                        </div>
                        <div>
                            <button className='btn bg-emerald-400 hover:bg-emerald-500'>Create</button>
                        </div>
                    </form>
                </div>
            </dialog>
            
        </div>
    );
};

{handleDelete}
export default departmentModal;<dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleCreateDepartment} className='space-y-4'>
                        <div className='form-control'>
                            <label>Name</label>
                            <input type="text" name='name' className='input input-bordered' />
                        </div>
                        <div className='form-control'>
                            <label>Department Head</label>
                            <select name="head" id="" className='input input-bordered'>
                                {
                                    employee?.map(name => <option key={name?._id}>{name?.FullName}</option>)
                                }
                            </select>
                        </div>
                        <div className='form-control'>
                                <label>Employee Number</label>
                                <input type="number" className='input input-bordered' name='number' />
                        </div>
                        <div>
                            <button className='btn bg-emerald-400 hover:bg-emerald-500'>Create</button>
                        </div>
                    </form>
                </div>
            </dialog
            >