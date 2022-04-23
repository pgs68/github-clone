import React from "react"
import { 
    Card, 
    Heading,
    Label,
    Input,
    Box,
    Button
} from "theme-ui"
import "./style.css";

const Home = () => {

    const getRepository = () => {
        const author = document.getElementById('author').value
        const repository = document.getElementById('repository').value
        if(author && repository){
            window.location.href = '/repository?author=' + author + '&repo=' + repository
        } else {
            alert('Fill Author and Repository before searching for a respository')
        }
    }

    return (
        <div id="home">
            <Card id="homeFormBox">
                <Heading>Find a repository</Heading>
                <Box>
                    <div class="inputRow">
                        <Label htmlFor="author">Author</Label>
                        <Input name="author" id="author" />
                    </div>
                    <div class="inputRow">
                        <Label htmlFor="repository">Repository</Label>
                        <Input name="repository" id="repository" />
                    </div>
                    <div class="buttonRow">
                        <Button onClick={() => getRepository()}>Find</Button>
                    </div>
                </Box>
            </Card>  
        </div>
    )
};

export default Home;