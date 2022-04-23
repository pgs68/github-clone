import React, { useState, useEffect } from "react"
import axios from 'axios'
import { 
    Card,
    Spinner,
    Avatar,
    Heading,
    Link,
    Button
} from "theme-ui"
import "./style.css";

import Issue from "../Issue/Issue"


function Repository(){

    const [author, setAuthor] = useState(null);
    const [repository, setRepository] = useState(null);
    const [repoInfo, setRepoInfo] = useState(null);
    const [selectedTab, setSelectedTab] = useState('issues');
    const [issuesList, setIssuesList] = useState([]);
    const [pullsList, setPullsList] = useState([]);
    const [expandedIssue, setExpandedIssue] = useState(null);
    const [errorNotFound, setErrorNotFound] = useState(false);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setAuthor(urlParams.get('author'));
        setRepository(urlParams.get('repo'));
    }, [])

    useEffect(() => {
        if(author && repository){
            axios.get(`https://api.github.com/repos/${author}/${repository}`)
                .then(res => {
                    setRepoInfo(res.data)
                })
            axios.get(`https://api.github.com/repos/${author}/${repository}/issues`)
                .then(res => {
                    var issues = [];
                    var pulls = [];
                    res.data.map(issue => {
                        if(issue.pull_request){
                            pulls.push(issue)
                        } else {
                            issues.push(issue)
                        }
                    })
                    setPullsList(pulls);
                    setIssuesList(issues);
                })
                .catch(error => {
                    setErrorNotFound(true)
                })
        }
    }, [author, repository])

    return (
        <div id="repositoryInfoPage">
            <Card id="repositoryInfoBox">
                {
                    repoInfo && !errorNotFound && (
                        <div id="repositoryTitleRow">
                            <div id="infoRow">
                                <Avatar src={repoInfo.owner.avatar_url}/>
                                <Heading>{author}/{repository}</Heading>
                            </div>
                            <Link id="goBackButton" href="/">Go Back</Link>
                        </div>
                    )
                }
                {
                    !repoInfo && !errorNotFound && (
                        <div id="spinnerContainer">
                            <Spinner variant='styles.spinner'/>
                        </div>
                    )
                }
                {
                    errorNotFound && (
                        <div class="errorMessage">
                            Ups! The repository you are looking for does not seem to exist
                            <Button variant="primary" onClick={() => window.location.href = '/'}>Search another repository</Button>
                        </div>
                    )
                }
                {
                    repoInfo && !errorNotFound && (
                        <div id="issuesContainer">
                            <Card id="issuesAndPullCard">
                                <div id="tabsRow">
                                    <div id="issuesTab" onClick={() => setSelectedTab('issues')} className={`tab ${selectedTab === 'issues' ? 'selected' : 'not-selected'}`}>
                                        ISSUES
                                    </div>
                                    <div id="pullTab" onClick={() => setSelectedTab('pull')} className={`tab ${selectedTab === 'pull' ? 'selected' : 'not-selected'}`}>
                                        PULL REQUEST
                                    </div>
                                </div>
                                {
                                    selectedTab === 'issues' ? 
                                    (
                                        <div id="issuesListContainer">
                                            {
                                                issuesList.map(issue => 
                                                    (<Issue  
                                                        issueInfo={issue}
                                                        expanded={expandedIssue == issue.id}
                                                        setExpandedIssue={setExpandedIssue}
                                                    />)
                                                )
                                            }
                                        </div>
                                    ) : 
                                    (
                                        <div id="issuesListContainer">
                                            {
                                                pullsList.map(issue => 
                                                    (<Issue  
                                                        issueInfo={issue}
                                                        expanded={expandedIssue == issue.id}
                                                        setExpandedIssue={setExpandedIssue}
                                                    />)
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </Card>
                        </div>
                    )
                }
            </Card>     
        </div>   
    )
}

export default Repository;