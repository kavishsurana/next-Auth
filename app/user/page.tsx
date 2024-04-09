
import { AppBar } from "@/componets/AppBar";

import { getServerSession } from "next-auth";

export default async function User(){
    const session = await getServerSession();
    return (
        <div>
            <AppBar />
            User Components
            {JSON.stringify(session)}
        </div>
    )
}