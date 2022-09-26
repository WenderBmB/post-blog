interface IPost {
    userId: number
    id: number
    title: string
    body: string
    seeComments?: () =>void
}

export default IPost;