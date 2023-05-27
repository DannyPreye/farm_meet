import { useState } from "react";
import { RiChat3Line } from "react-icons/ri";

function CommentButton({
    comments,
    setShowComments,
}: {
    comments: number;
    setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [comment, setComment] = useState(comments);

    const commentHandler = () => {};

    return (
        <div className="flex items-center gap-2 ">
            <div
                onClick={() => setShowComments((prev) => !prev)}
                className="text-primary cursor-pointer text-[20px]"
            >
                <RiChat3Line />
            </div>
            <span className="px-[8px] rounded-[36px] bg-primary text-secondary-white font-[500]  text-[12px]">
                {comment}
            </span>
        </div>
    );
}

export default CommentButton;
