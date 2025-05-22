import {useContext}  from "react";
import {UserContext} from "../context/UserContext.jsx";
import {ChannelContext} from "../context/ChannelContext.jsx";

export default function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    console.log(user, channel);

    return (
        <div>
            Component F - {user} {channel}
        </div>
    )
}