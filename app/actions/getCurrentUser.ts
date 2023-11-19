import db from "../libs/prismadb";

import getSession from "./getSession";

const getCurrentUser = async() => {

    try {

        const session = await getSession();

        if(!session?.user?.email) {
            return null
        }

        const currentUser = await db.user.findMany({
            where : {
                email : session.user.email
            }
        })

    } catch (error) {
        return null
    }
}