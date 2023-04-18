function New() {
    return(
        <div>
            <h1>New log Page</h1>

            <form action='/logs' method='POST'>

                title: <input type="text" name="title"/>
                <br/>

                entry: <input type='textarea' name="entry"/>
                <br/>

                shipIsBroken: <input type='checkbox'
                name="shipIsBroken"
                />
                <br/>

                <input type="submit" />

            </form>
        </div>
    )
}

module.exports = New;