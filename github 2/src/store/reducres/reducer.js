import { CommentActions } from "semantic-ui-react";

const initState ={
    usernames : [],
    repos : [],
    id: [],
    followers: [],
    users_avatar : [],
    userName:"",
    userLogin:"",
    userRepos_url:"",
    userAvatar:"",
    userFollowers:"",
    FavoriteUsers:  sessionStorage.getItem("favorite users") ?JSON.parse(sessionStorage.getItem("favorite users")) : {},
    FavoriteRepos: sessionStorage.getItem("favorite repos") ? JSON.parse(sessionStorage.getItem("favorite repos")) : {},
    searchResult: {},
    userGithub : "",
    userRepos : [],
    userBlog : "",
    userBio:"",
    userFollowing:"",
    grabbedUserData: false,
    message : "",
    grabbedData : false,
    payload : "",
    
}
console.log(initState)
const reducer = (state=initState,action) =>{
    switch(action.type){
        case "CHANGE":
             let currentUsername=action.e.target.value;
             console.log(action.e.target.value)
             return{
                 ...state,
                usernames :currentUsername
             } 
        case "SUBMIT":
            // if(action.data.items == localStorage.getItem("userData"))
            //     {
            //         console.log("hi guys")
            //     }
            //     else{
                const usersLogin=action.data.items.map((items)=>items.login)
                const usersRepos=action.data.items.map((items)=>items.repos_url)
                const usersAvatar=action.data.items.map((items)=>items.avatar_url)
                const usersFollowers=action.data.items.map((items)=>items.followers_url)
                const usersId=action.data.items.map((items)=>items.id)
                
                if(action.data.total_count !== 0){
                    return{
                    ...state,
                    payload : "",
                    usernames : usersLogin,
                    repos : usersRepos,
                    id : usersId,
                    followers : usersFollowers,
                    users_avatar : usersAvatar,
                    grabbedData : true

                    }
                }else{
                        return {
                            ...state,
                            message : "user not found",
                            usernames : [],
                            repos : [],
                            id : [],
                            followers : [],
                            users_avatar : [],
                            grabbedData : false
                        }

                    }
                   
            case "SEARCH_DATA":
                console.log(action.userData,'data')
                if(action.userData.total_count !== 0){
                    return{
                        ...state,
                        searchResult : action.userData.items
                    }
                }else{
                        return {
                            ...state,
                            message : "user not found",
                            usernames : [],
                            repos : [],
                            id : [],
                            followers : [],
                            users_avatar : [],
                            grabbedData : false
                        }

                    }
            case "FETCH_USER":
                console.log(action.userData)
                return{
                    ...state,
                    payload : "",
                    userName       :    action.userData.name,
                    userLogin      :    action.userData.login,
                    userRepos_url  :    action.userData.public_repos,
                    userAvatar     :    action.userData.avatar_url,
                    userFollowers  :    action.userData.followers,
                    userFollowing  :    action.userData.following,
                    userGithub     :    action.userData.html_url,
                    userBlog       :    action.userData.blog,
                    userBio        :    action.userData.bio,
                    grabbedUserData:    true

                }
            case "FETCH_USER_REPOS":
                //console.log("show repos",action.Repos)
                return {
                    ...state,
                    userRepos : action.Repos,
                    payload : ""

                };
            case "FETCHING_DATA":
                console.log(action.payload)
                return{
                    ...state,payload:action.payload,
                    message : ""
                }
            case "ADD_FAVORITE_USER" :
                
                var favoriteUsers = state.FavoriteUsers
                console.log('prev_list',favoriteUsers)
                favoriteUsers[action.username] = action.user
                sessionStorage.setItem("favorite users",JSON.stringify(favoriteUsers))
                return{
                    ...state,
                    FavoriteUsers : favoriteUsers
                }
                break
            case "REMOVE_FAVORITE_USER" :
                    
                favoriteUsers = state.FavoriteUsers
                delete favoriteUsers[action.username]
                sessionStorage.setItem("favorite repos",JSON.stringify(favoriteRepos))
                return{
                    ...state,
                    FavoriteUsers : favoriteUsers
                }
                break;
            case "ADD_FAVORITE_REPO" :
                var favoriteRepos = state.FavoriteRepos
                favoriteRepos[action.id] = action.data
                sessionStorage.setItem("favorite repos",JSON.stringify(favoriteRepos))
                return{
                    ...state,
                    FavoriteRepos : favoriteRepos
                }
            case "REMOVE_FAVORITE_REPO" :
                favoriteRepos = state.FavoriteRepos
                delete favoriteRepos[action.id]
                return{
                    ...state,
                    FavoriteRepos : favoriteRepos
                }
        default:
            return state;
    }
    
}



export default reducer