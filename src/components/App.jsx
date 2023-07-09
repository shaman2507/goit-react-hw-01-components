import Profile from './profile/Profile';
import userInfo from 'user/user.json';
import Statistics from './statistics/Statistics';
import data from 'data/data.json';
import FriendList from "./friendList/FriendList";
import friends from "friendList/friendList.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "transactions/transactions.json";

export const App = () => {
  return (
    <>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};