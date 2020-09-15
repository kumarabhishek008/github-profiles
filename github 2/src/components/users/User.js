import React from 'react'
import { Card, Feed,Button, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './User.scss'
function User(props) {
    return (
        <div className="user">
                {/* <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src={props.image}
                        />
                        <Card.Header>{props.username}</Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                </Card> */}
                <Card>
                <Link to={'/profile?username='+props.username}>
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                            
                            <Feed.Label className="user__image" image={props.image} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <h5  onMouseOver={props.handleUsers}>{props.username}</h5>
                                    <p1> Name        :  {props.name} </p1><br/>
                                    <p1> Public Repos : {props.repos_no} </p1><br/>
                                    <p1> Bio         :  {props.bio} </p1><br/>
                                    <p1> Followers   :  {props.followers} </p1><br/>
                                </Feed.Summary>
                            </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Card.Content>
                    </Link>
                </Card>
            
            
        </div>
    )
}

export default User
