import { Typography, Box, useTheme } from "@mui/material"
import Friend from "components/Friend"
import WidgetWrapper from "components/WidgetWrapper"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "state"

const FriendListWidget = ({userId}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    
  }

  return (
    <div>FriendListWidget</div>
  )
}

export default FriendListWidget