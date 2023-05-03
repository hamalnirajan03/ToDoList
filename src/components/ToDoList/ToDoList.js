import React from 'react';
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import ItemList from '../ItemList';

const ToDoList = () => {

    const [input, setInput] = useState(" ");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const addListItem = () => {
        console.log("Button is clicked");

        setItems((oldItems) => {
            return [...oldItems, input];

        });
        setInput("");
    };

    const deleteItems = () => {
        console.log("Item is deleted");
    }

    return (
        <>
            <div className=" w-80 h-80 bg-slate-400 absolute top-1/4 left-1/3">
                <h1 className=" text-2xl">ToDO Lists</h1>
                <div className="divide-y divide-solid border-2">
                </div>

                <div className=" flex m-2">
                    <div className="input-lists py-2 mx-6">
                        <input className=" block bg-white border border-white outline-none  focus-within:outline-none rounded-md"
                            placeholder="Add Items" type="text"
                            onChange={handleChange}
                        />

                    </div>


                    <button
                        className="p-3 mx-3 
                                    bg-gray-200 
                                    inline-block 
                                    rounded-full 
                                    bg-opacity-3 
                                    hover:bg-gray-300"
                        onClick={addListItem}
                    >
                        <PlusIcon className="h-4 w-4 text-black" />
                    </button>





                </div>

                <ol>


                    {items.map((itemval, index) => {
                        return <ItemList
                            key={index}
                            id={index}
                            text={itemval}
                            onSelect ={deleteItems}

                        />
                    })}


                </ol>

            </div >
        </>

    )
}

export default ToDoList;