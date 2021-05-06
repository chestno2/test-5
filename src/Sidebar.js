import React from 'react'
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className=" " style={{flex:"0.2"}}>
            <Sidebarrow Icon={HomeIcon}  title="Home"  />
            <Sidebarrow Icon={WhatshotIcon} title="Trending" />
            <Sidebarrow Icon={SubscriptionsIcon} title="Subscription" />
            <hr/>
            <Sidebarrow Icon={LibraryAddIcon} title=" Watchlist " />
            <Sidebarrow Icon={HistoryIcon} title="History "/>
            <Sidebarrow Icon={WatchLaterIcon} title="Watch later "/>
            <Sidebarrow Icon={ThumbUpOutlinedIcon} title=" Liked Videos"/>
            <Sidebarrow Icon={OndemandVideoOutlinedIcon} title="Your Videos"/>
            <Sidebarrow Icon={ExpandMoreOutlinedIcon} title="Show More " />
           <hr/>
        </div>
    )
}

export default Sidebar
