export interface User
{
    location: Record<string, unknown>,
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    account_type: string,
    profile_image: string,
    isVerified: string,
    slug: string;

}

export interface Like
{
    user: User;
}

export interface Comment
{
    user: User,
    content: string,
    likes: Like[],
    replies: Comment[],
    created_at: string;

}

export interface Post
{
    user: User,
    content: string,
    media: string[],
    comments: Comment[],
    created_at: string;
    likes: Like[];
}



