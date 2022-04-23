import React from "react"
import { Card, Heading } from "theme-ui"
import "./style.css";

const Home = () => {
    return (
        <div id="home">
            <Card>
                <Heading>Find a repository</Heading>
                <div class="form-input">
                    <h3>Author</h3>
                    <input />
                </div>
                <div class="form-input">
                    <h3>Repository</h3>
                    <input />
                </div>
                <button>Find</button>
            </Card>  
        </div>
    )
};

export default Home;