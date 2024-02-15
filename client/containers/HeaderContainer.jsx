import React from 'react'

export default function HeaderContainer(props) {
  const greeting = capitalize(props.username);
  function capitalize(string) {
    if (!string) return '';
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="headerContainer">
        <span><h1>Hello {greeting},</h1></span>
        <span></span>
        <span></span>
        <span>
            <button className="btnAccount">
                Account
            </button>
        </span>
        
    </div>
  );
}
