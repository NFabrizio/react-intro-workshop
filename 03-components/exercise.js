/**
 * There is a lot going on in this component. Let's simplify it by splitting it
 * out into smaller components and composing them to make this one.
 **/
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}











// Possibly add some errors to the component and ask participants to fix them (multiple nodes, undefined props, etc)
