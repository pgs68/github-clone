import React from "react"
import { 
    Card, 
    Heading,
    Label,
    Input,
    Box,
    Button
} from "theme-ui"
import { Link } from "react-router-dom"
import "./style.css";

const Home = () => {

    const getRepository = () => {
        const author = document.getElementById('author').value
        const repository = document.getElementById('repository').value
        window.location.href = '/repository?author=' + author + '&repo=' + repository
    }

    return (
        <div id="home">
            <Card id="homeFormBox">
                <Heading>Find a repository</Heading>
                <Box>
                    <Label htmlFor="author">Author</Label>
                    <Input name="author" id="author" />
                    <Label htmlFor="repository">Repository</Label>
                    <Input name="repository" id="repository" />
                    <Button onClick={() => getRepository()}>Find</Button>
                </Box>
            </Card>  
        </div>
    )
};

export default Home;