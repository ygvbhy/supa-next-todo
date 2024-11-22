"use client";
import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import { IoSearchOutline } from "react-icons/io5";
import TodoListItem from "./TodoLIstItem";

const TodoList = ({
  sharedUserFullName = "",
  owerUserId = "",
  loading = false,
  todoListData,
  isReadOnly = false,
  onUpdate = (id, updatedContent) => {},
  onCreate = () => {},
  onDelete = (id) => {},
  onSearch = (terms) => {},
}) => {
  const [userSearchInput, setUserSearchInput] = useState();
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = () => {
    const shareLink = `${"todoList공유할 링크"}/share/${owerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`공유 링크 복사 완료! \n ${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  const handleSearchEnd = () => {
    onSearch(userSearchInput)
    setUserSearchInput("")
  }

  return (
    <section className=" min-h-[70vh] bg-[#69cfcf]">
      <div className="w-full max-w-[800px] p-[20px] mx-auto">
        {isReadOnly && (
          <div>
            <article className="flex flex-row justify-between items-center">
              <div className="font-bold text-[32px]">
                {sharedUserFullName && <div>{sharedUserFullName}</div>}
                Things to do:
              </div>
              {owerUserId && (
                <div
                  onClick={handleCopy}
                  className=" font-bold text-[20px] flex flex-row items-center cursor-pointer"
                >
                  Share
                  <IoShareSocialOutline />
                </div>
              )}
            </article>
            <article className="flex flex-col sm:flex-row gat-4 mt-8">
              <div className="flex flex-1 h-[60px] mr-3">
                <input
                  type="text"
                  className="p-4 flex-1 bg-[#f7cb66] border border-black rounded-l-2xl font-bold"
                  value={userSearchInput}
                  onChange={(e) => setUserSearchInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearchEnd();
                  }}
                />
                <div className="w-[60px] flex justify-center items-center bg-black rounded-r-2xl cursor-pointer" onClick={() => handleSearchEnd()}>
                  <IoSearchOutline size={40} color="#fff" />
                </div>
              </div>
              <div
                onClick={onCreate}
                className="h-[60px] w-[200px] flex justify-center items-center bg-[#7EBB95] border border-black rounded-2xl font-bold cursor-pointer text-[20px]"
              >
                New Task
              </div>
            </article>
          </div>
        )}
        <div className="h-[2px] my-10 bg-black"></div>
        {todoListData?.length >= 1 ? (
          <ul className="flex flex-col gap-6">
            {todoListData.map((todo) => {
              return (
                <TodoListItem
                  key={todo?.id}
                  todo={todo}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              );
            })}
          </ul>
        ) : (
          <div>{loading ? "Loading..." : "Empty"}</div>
        )}
      </div>
    </section>
  );
};

export default TodoList;
