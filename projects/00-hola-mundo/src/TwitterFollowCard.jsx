import { useState } from "react";
export function TwitterFollowCard({ children, userName , initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  function HandleClick() {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="el avatar de midudev " />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={HandleClick}>
          <span className="tw-follow-card-button-text">{text}</span>
          <span className="tw-follow-card-stopfollowing"> Deja de seguir</span>
        </button>
      </aside>
    </article>
  );
}
// export default TwitterFollowCard;