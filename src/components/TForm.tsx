import React, {useState, useRef} from 'react';

interface ITodoFormProps {
    onAdd(title: string): void
}

const TForm:React.FC<ITodoFormProps> = props => {
    // const [title, setTitle] = useState<string>('')
    //
    // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value)
    // }

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                onKeyPress={keyPressHandler}
                ref={ref}
                // onChange={changeHandler}
                // value={title}
                type="text"
                id='title'
                placeholder='Example: Learn JavaScript' />
            <label htmlFor="title" className='active'>Input your todo</label>
        </div>
    );
};

export default TForm;
