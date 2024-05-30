import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 24.960938 2.1015625 A 1.0001 1.0001 0 0 0 24.386719 2.3105469 L 1.3867188 20.210938 A 1.0001 1.0001 0 1 0 2.6132812 21.789062 L 4 20.708984 L 4 48 A 1.0001 1.0001 0 0 0 5 49 L 18.832031 49 A 1.0001 1.0001 0 0 0 19.158203 49 L 30.832031 49 A 1.0001 1.0001 0 0 0 31.158203 49 L 45 49 A 1.0001 1.0001 0 0 0 46 48 L 46 20.708984 L 47.386719 21.789062 A 1.0001 1.0001 0 1 0 48.613281 20.210938 L 25.613281 2.3105469 A 1.0001 1.0001 0 0 0 24.960938 2.1015625 z M 25 4.3671875 L 44 19.154297 L 44 47 L 32 47 L 32 29 A 1.0001 1.0001 0 0 0 31 28 L 19 28 A 1.0001 1.0001 0 0 0 18 29 L 18 47 L 6 47 L 6 19.154297 L 25 4.3671875 z M 20 30 L 30 30 L 30 47 L 20 47 L 20 30 z"></path>
          </svg>
          <p className="m-2">Home</p>
        </li>
        <li className="flex">
          <svg
            width="30"
            height="30"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M40 2L17 36h15l-4 26L47 28H30z" fill="#000000"></path>
            </g>
          </svg>
          <p className="m-2">Shorts</p>
        </li>
        <li className="flex">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6H2V4H22V6ZM22 10H2V8H22V10ZM2 14H16V12H2V14ZM2 18H14V16H2V18Z"
              fill="black"
            />
            <path d="M18 14.5L24 18L18 21.5V14.5Z" fill="black" />
          </svg>
          <p className="m-2">Vidoes</p>
        </li>
        <li className="flex">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M14.828 7.757A6.97 6.97 0 0 0 12 7c-1.017 0-1.984.209-2.828.586l1.414 1.415A4.978 4.978 0 0 1 12 9c1.1 0 2.128.358 2.957.957l1.871-1.872zm4.242-4.243a11.949 11.949 0 0 0-3.838-2.646l-1.415 1.415A10.026 10.026 0 0 1 19.243 7.1L20.657 5.686a11.949 11.949 0 0 0-1.586-2.172zm-12.485 0a11.953 11.953 0 0 0-2.646 3.838L5.686 7.1A10.026 10.026 0 0 1 7.1 5.686l-1.415-1.415zm7.071 7.071a3 3 0 1 0-4.242 4.242 3 3 0 0 0 4.242-4.242zm-3.54 1.712l1.414 1.415a1 1 0 0 1-1.415 1.414L9.116 13.9a1 1 0 0 1 1.414-1.414zm7.07-7.07L18.364 6.9a10.024 10.024 0 0 1 1.415 2.121l1.414-1.414A11.951 11.951 0 0 0 16.343 2.8zm-12.485 0a11.953 11.953 0 0 0-1.586 2.172l1.414 1.415A10.026 10.026 0 0 1 7.1 5.686l-1.415-1.415zM12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0-2C5.925 2 1 6.925 1 12s4.925 10 10 10 10-4.925 10-10S18.075 2 12 2z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          <p className="m-2">Live</p>
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
