import React from "react";

const MessageSkeleton = () => {
  // Predefined skeleton IDs for stable keys
  const skeletonMessages = [
    "skeleton-msg-1",
    "skeleton-msg-2",
    "skeleton-msg-3",
    "skeleton-msg-4",
    "skeleton-msg-5",
    "skeleton-msg-6",
  ];

  // Helper function for alternating chat positions
  const getChatPosition = (index) => (index % 2 === 0 ? "chat-start" : "chat-end");

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((id, idx) => (
        <div key={id} className={`chat ${getChatPosition(idx)}`}>
          {/* Avatar Skeleton */}
          <div className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

          {/* Header Skeleton */}
          <div className="chat-header mb-1">
            <div className="skeleton h-4 w-16" />
          </div>

          {/* Message Bubble Skeleton */}
          <div className="chat-bubble bg-transparent p-0">
            <div className="skeleton h-16 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
