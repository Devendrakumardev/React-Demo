import React from 'react'

function TodoList(props) {
    return (
        <div>
            <li className='list-item'>
                {props.item}
                <span className='icon'>
                    <li className='fa-solid fa-trash-can icon-delete'
                        onClick={e => {
                            props.deleteItem(props.index)

                        }}> </li>

                </span>
            </li>

        </div>
    )
}

export default TodoList
