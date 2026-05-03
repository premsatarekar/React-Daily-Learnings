function UserCard({ name, isLoggedIn }) {
  return (
    <div>
      {name}
      {isLoggedIn ? <h1> welcome back</h1> : <h1>Plx login</h1>}
    </div>
  );
}

export default UserCard;
