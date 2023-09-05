import React, { useImperativeHandle } from "react";

interface UserListMethods {
  scrollToBottom: () => void;
  focusInput: () => void;
}

const UserList = React.forwardRef<UserListMethods>((props, ref) => {
  const listRef = React.useRef<HTMLUListElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottom: () => {
          if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
          }
        },
        focusInput: () => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        },
      };
    },
    []
  );

  return (
    <ul
      id="userList"
      ref={listRef}
    >
      <li>
        <input
          ref={inputRef}
          type="text"
        />
      </li>
      <li>User 2</li>
    </ul>
  );
});

const UserContainer: React.FC = () => {
  const userListRef = React.useRef<UserListMethods>(null);

  const onAddNewUser = () => {
    if (userListRef.current) {
      userListRef.current.scrollToBottom();
      userListRef.current.focusInput();
    }
  };

  return (
    <div>
      <button onClick={onAddNewUser}>Add User</button>
      <UserList ref={userListRef} />
    </div>
  );
};

export default UserContainer;
