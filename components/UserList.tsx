import React from "react";
import { fetchUsers } from "@/utils/actions";

const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h3 key={user.id}>
                {user.firstName} {user.lastName}
              </h3>
            );
          })}
        </div>
      ) : (
        <p>No Users Found</p>
      )}
    </div>
  );
};

export default UserList;
