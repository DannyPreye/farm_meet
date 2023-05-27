import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({ likes }: { likes: number }) => {
    const [like, setLike] = useState(likes);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {};

    return (
        <div className="flex items-center gap-2 ">
            <div
                onClick={() => setIsLiked((prev) => !prev)}
                className="text-primary cursor-pointer text-[20px]"
            >
                {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
            <span className="px-[8px] pointer-events-none rounded-[36px]  bg-primary text-secondary-white font-[500]  text-[12px]">
                {like}
            </span>
        </div>
    );
};

export default LikeButton;
