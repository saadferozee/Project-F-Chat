const Messaging = () => {
    const handleKeyDown = () => {
        console.log('clicked');
    }
    return (
        <div>
            <div className='w-full grid grid-cols-12 grid-rows-18 '>

            </div>
            <h1>this is messaging view.</h1>
            <form className='border-2'>
                <input name="message" id="message" inputMode='text' enterKeyHint='send' onKeyDown={handleKeyDown} className='w-full'></input>
            </form>
        </div>
    );
};

export default Messaging;