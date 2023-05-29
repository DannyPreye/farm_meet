import React, { FC, useState } from "react";
import { Comment } from "@/lib/types";
interface Props {
    comments: Comment[];
}
const Comments: FC<Props> = ({ comments }) => {
    const [isLike, setIsLike] = useState(false);

    return (
        <div className="w-full lg:px-5 py-6 flex flex-col gap-7">
            {comments.map((comment) => (
                <div className="flex gap-2">
                    <div className="h-9 w-9 rounded-full bg-primary"></div>
                    <div className="flex-1 gap-1 bg-gray-300 rounded-md px-4 py-8 flex flex-col ">
                        <span className="font-bold text-[16px] text-primary-grey">
                            {comment.user.first_name} {comment.user.first_name}
                        </span>

                        <p className="text-gray-700">{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
