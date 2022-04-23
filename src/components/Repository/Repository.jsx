import React, { useState, useEffect } from "react"


function Repository(){

    const [author, setAuthor] = useState(null);
    const [repository, setRepository] = useState(null);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setAuthor(urlParams.get('author'));
        setRepository(urlParams.get('repo'));
    }, [])

    useEffect(() => {
        if(author && repository){
            console.log(author, repository)
        }
    }, [author, repository])

    return (
        <div>
            Aquí va la info de un repositorio
        </div>
    )
}

export default Repository;