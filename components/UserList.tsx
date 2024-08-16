import React from "react";
import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

const UserList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h3 key={user.id} className="flex justify-between items-center">
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
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
