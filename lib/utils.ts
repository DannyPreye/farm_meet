import
{
    inactiveShop,
    activeDiscover,
    inactiveDiscover,
    activeMessages,
    inactiveMessages,
    inactiveProducts,
    inactiveNotifications,
    inactiveMeet,
    inactiveProfile,
} from "@/public/shared";
import { Post } from "./types";

export const dashboardMenus = [
    {
        name: "Discover",
        activeIcon: activeDiscover,
        inactiveIcon: inactiveDiscover,
        image: true,
        link: "/dashboard",
    },
    {
        name: "Messages",
        activeIcon: activeMessages,
        inactiveIcon: inactiveMessages,
        image: true,
        link: "/dashboard/message",
    },
    {
        name: "Products",
        activeIcon: "/shared/products_active.png",
        inactiveIcon: inactiveProducts,
        image: true,
        link: "/dashboard/product",
    },
    {
        name: "Shops",
        activeIcon: "/shared/shops_active.png",
        inactiveIcon: inactiveShop,
        image: true,
        link: "/dashboard/shop",
    },
    {
        name: "Notifications",
        activeIcon: "/shared/notifications_active.png",
        inactiveIcon: inactiveNotifications,
        image: true,
        link: "/dashboard/notification",
    },
    {
        name: "Meet Friends",
        activeIcon: "/shared/meet_active.png",
        inactiveIcon: inactiveMeet,
        image: true,
        link: "/dashboard/meet",
    },
    {
        name: "Profile",
        activeIcon: "/shared/profile_active.png",
        inactiveIcon: inactiveProfile,
        image: true,
        link: "/dashboard/profile",
    },
];

export const dummyPosts: Post[] = [
    {
        user: {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        content:
            "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!",
        media: [ "https://dummyimage.com/500x500/111/fff" ],

        likes: [ {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        }
        ],
        comments: [
            {
                user: {
                    first_name: "Jane",
                    last_name: "Doe",
                    profile_image: "https://dummyimage.com/100x100/000/fff",
                },
                content:
                    "Looks like an incredible hike! I'll have to check it out sometime.",
            },
            {
                user: {
                    first_name: "Jane",
                    last_name: "Doe",
                    profile_image: "https://dummyimage.com/100x100/000/fff",
                },
                content:
                    "Wow, those photos are stunning! I wish I could have been there with you.",
            },
        ],
    },
    {
        user: {
            first_name: "John",
            last_name: "Smith",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        content:
            "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!",
        media: [
            "https://dummyimage.com/500x500/000/fff",
            "https://dummyimage.com/500x500/111/fff",
        ],
        comments: [
            {
                user: {
                    first_name: "John",
                    last_name: "Smith",
                    profile_image: "https://dummyimage.com/100x100/000/fff",
                },
                comment:
                    "Looks like an incredible hike! I'll have to check it out sometime.",
            },
        ],
        likes: [ {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        }
        ],
    },
    {
        user: {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        content:
            "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!",
        media: [
            "https://dummyimage.com/500x500/000/fff",
            "https://dummyimage.com/400x400/111/fff",
            "https://dummyimage.com/600x600/111/fff",
            "https://dummyimage.com/700x700/111/fff",
            "https://dummyimage.com/800x800/111/fff",
            "https://dummyimage.com/500x500/111/fff",
        ],
        comments: [
            {
                user: {
                    first_name: "Jane",
                    last_name: "Doe",
                    profile_image: "https://dummyimage.com/100x100/000/fff",
                },
                comment:
                    "Looks like an incredible hike! I'll have to check it out sometime.",
            },
        ],
        likes: [ {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        },
        {
            first_name: "Jane",
            last_name: "Doe",
            profile_image: "https://dummyimage.com/100x100/000/fff",
        }
        ],
    },
];

export const dummyFriendSuggestion = [
    {
        first_name: "Jane",
        last_name: "Doe",
        profile_image: "https://dummyimage.com/100x100/000/fff",
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        profile_image: "https://dummyimage.com/100x100/000/fff",
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        profile_image: "https://dummyimage.com/100x100/000/fff",
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        profile_image: "https://dummyimage.com/100x100/000/fff",
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        profile_image: "https://dummyimage.com/100x100/000/fff",
    }
];
