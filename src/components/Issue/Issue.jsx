import React, { useEffect, useState } from "react"
import axios from 'axios'
import { 
    Card,
    Spinner,
    Message
} from "theme-ui"
import "./style.css";

const formatDate = (originalDate) => {
    //Formato original:
    // 2022-04-08T15:32:41Z
    //Formato final:
    // 08/04/2022 15:32

    var date = originalDate.split('T')[0]
    date = date.split('-')
    const time = originalDate.split('T')[1].slice(0, 5)
    return `${date[2]}/${date[1]}/${date[0]} ${time}`
}

const Issue = ({
    issueInfo,
    expanded,
    setExpandedIssue
}) => {

    const [moreInfoIssue, setMoreInfoIssue] = useState(null)

    useEffect(() => {
        if(expanded){
            axios.get(issueInfo.comments_url)
                .then(res => {
                    setMoreInfoIssue(res.data)
                    console.log(res.data)
                })
        }
    }, [expanded])

    return (
        <Card style={{margin: '5px'}} className="infoIssueCard" onClick={() => setExpandedIssue(issueInfo.id)}>
            <div id="infoIssueRow">
                <div id="issueTitle" className="issueInfo">
                    {issueInfo.title}
                </div>
                <div className="issueInfo">
                    {issueInfo.user.login}
                </div>
                <div className="issueInfo">
                    {formatDate(issueInfo.created_at)}
                </div>
                <div className="issueInfo">
                    <svg style={{marginRight: '3px'}} width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 3.75C4.20924 3.75 4.05027 3.81585 3.93306 3.93306C3.81585 4.05027 3.75 4.20924 3.75 4.375V23.125C3.75 23.47 4.03 23.75 4.375 23.75H9.375C9.87228 23.75 10.3492 23.9475 10.7008 24.2992C11.0525 24.6508 11.25 25.1277 11.25 25.625V31.1L18.05 24.3C18.4013 23.9483 18.8779 23.7504 19.375 23.75H30.625C30.7908 23.75 30.9497 23.6842 31.0669 23.5669C31.1842 23.4497 31.25 23.2908 31.25 23.125V4.375C31.25 4.20924 31.1842 4.05027 31.0669 3.93306C30.9497 3.81585 30.7908 3.75 30.625 3.75H4.375ZM0 4.375C0 1.96 1.96 0 4.375 0H30.625C33.04 0 35 1.96 35 4.375V23.125C35 24.2853 34.5391 25.3981 33.7186 26.2186C32.8981 27.0391 31.7853 27.5 30.625 27.5H20.15L13.7175 33.9325C13.2081 34.4417 12.5592 34.7884 11.8528 34.9288C11.1464 35.0692 10.4142 34.9971 9.74875 34.7215C9.08332 34.4459 8.51454 33.9793 8.11428 33.3805C7.71402 32.7817 7.50025 32.0777 7.5 31.3575V27.5H4.375C3.21468 27.5 2.10188 27.0391 1.28141 26.2186C0.460936 25.3981 0 24.2853 0 23.125V4.375Z" fill="white"/>
                    </svg>
                    {issueInfo.comments}
                </div>
            </div>
            {
                issueInfo.labels.length > 0 &&
                (
                    <div class="labelsRow">
                        {
                            issueInfo.labels.map(label => (
                                <div className="label" style={{backgroundColor: `#${label.color}`}}>
                                    {label.name}
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                expanded && moreInfoIssue?.length > 0 &&
                (
                    <div class="commentsList">
                        {
                            moreInfoIssue.map(comment => (
                                <Message className="comment">
                                    <div class="commentInfo">
                                        {`${comment.user.login} at ${formatDate(comment.created_at)}`}
                                    </div>
                                    {comment.body}
                                </Message>
                            ))
                        }
                    </div>
                )
            }
            {
                expanded && moreInfoIssue == null &&
                (
                    <div id="spinnerContainer">
                        <Spinner variant='styles.spinner'/>
                    </div>
                )
            }
            {
                expanded && moreInfoIssue?.length == 0 &&
                (
                    <div class="commentsList">
                        No comments yet
                    </div>
                )
            }
        </Card>
    )
};

export default Issue;