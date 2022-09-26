import IComment from "../../Molecules/Comment/types";
import IPost from "../../Molecules/Post/types";
import IUser from "../../Molecules/User/types";

interface NormalizedPost {
    post: IPost
    comments: IComment[]
    user: IUser
}

export default NormalizedPost