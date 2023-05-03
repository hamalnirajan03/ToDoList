import React from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";

const ItemList = (props) => {

   
    return <>
        <div className="flex m-1">
            <TrashIcon className="h-5 w-5 m-2 " onClick={()=>{
                props.onSelect(props.id);
            }} />
            <li className="text-xl px-2">{props.text}</li>

        </div>

    </>

}

export default ItemList;