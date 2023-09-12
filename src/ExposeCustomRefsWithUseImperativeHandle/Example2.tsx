import React, { forwardRef, useRef, useImperativeHandle } from "react";

interface PostMethods {
  scrollAndFocusAddComment: () => void;
}
interface CommentsMethods {
  scrollToBottom: () => void;
}

export default function Page() {
  const postRef = useRef<PostMethods>(null);

  function handleClick() {
    if (postRef.current) postRef.current?.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>Escribe un comentario</button>
      <Post ref={postRef} />
    </>
  );
}

const Post = forwardRef<PostMethods>((props, ref) => {
  const commentsRef = useRef<CommentsMethods>(null);
  const addCommentRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollAndFocusAddComment() {
          commentsRef.current?.scrollToBottom();
          addCommentRef.current?.focus();
        },
      };
    },
    []
  );

  return (
    <>
      <article>
        <p>¡Bienvenidos a mi blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
});

const CommentList = forwardRef(function CommentList(props, ref) {
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottom() {
          if (divRef.current) {
            const node = divRef.current;
            node.scrollTop = node?.scrollHeight;
          }
        },
      };
    },
    []
  );

  let comments = [];
  for (let i = 0; i < 5; i++) {
    comments.push(<p key={i}>Comentario #{i}</p>);
  }

  return (
    <div
      className="CommentList"
      ref={divRef}
    >
      {comments}
    </div>
  );
});

const AddComment = forwardRef<HTMLInputElement>(function AddComment(
  props,
  ref
) {
  return (
    <input
      placeholder="Añadir comentario..."
      ref={ref}
    />
  );
});
