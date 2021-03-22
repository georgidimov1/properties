const Demo = ()=> {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <div>
            <h1>Demo Form</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username"></input>
                <input type="number" name="age"></input>
                <input type="submit" value="Send"></input>
            </form>
        </div>
    )
}

export default Demo;