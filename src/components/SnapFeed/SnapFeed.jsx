import React, { useMemo } from "react";
import PostStatus from "./PostStatus";
import Sidebar from "../Sidebar";

import { getCurrentUserData } from "../../api/FirestoreAPI";
import NewsList from "../NewsFeed/NewsList";
import Users from "../ReactQuery/Users";

function SnapFeed() {
  useMemo(() => {
    getCurrentUserData();
  }, []);
  return (
    <div>
      <Sidebar />

      <PostStatus />

      <NewsList />
      <Users />
    </div>
  );
}

export default SnapFeed;
