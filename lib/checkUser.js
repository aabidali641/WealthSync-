import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    if (error.response?.status === 404) {
      toast.error("Requested data not found!");
    } else {
      toast.error("Failed to fetch data. Please try again!");
    }
  }
};
