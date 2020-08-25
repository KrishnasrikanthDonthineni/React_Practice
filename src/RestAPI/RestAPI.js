import React, {Component} from "react";

class RestAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments : []
        }
            this.headers = [
                {key : "postId" ,label : "Post ID" },
                {key : "id" ,label : "ID" },
                {key : "name" ,label : "Name" },
                {key : "email" ,label : "Email" },
                {key : "body" ,label : "Body" },

            ]
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            return response.json()
        }).then(result =>{
            this.setState({
                comments : result
            })
        })
    }

    render(){
        return(
            <table className="table table-bodered">
                <thead>
                    <tr>
                        {
                            this.headers.map(function(hd){
                                return(<th key={hd.key}>{hd.label}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.comments.map(function(item,key){
                            return(
                                <tr key={key}>
                                    <td>{item.postId}</td>
                                    <td>{item.Id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

}

export default RestAPI;