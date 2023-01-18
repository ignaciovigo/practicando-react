import { useState } from "react";
function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
  
  const handleClick = () => setIsFollowing(!isFollowing);
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img src={`https://unavatar.io/${userName}`} alt="avatar de midudev" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoName">{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
