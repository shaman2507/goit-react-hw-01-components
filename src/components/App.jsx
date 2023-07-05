import Profile from './profile/Profile';
import userInfo from 'user/user.json';
import Statistics from './statistics/Statistics';
import data from 'data/data.json';

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
      <Statistics
        title={data.title}
        stats={data.stats}
        key={data.id}
      />
    </>
  );
};