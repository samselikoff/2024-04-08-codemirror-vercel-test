"use client";

import { EditorView, basicSetup } from "codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { markdown } from "@codemirror/lang-markdown";

export default function MarkdownEditor({
  initialValue,
  onSave = () => {},
}: {
  initialValue: string;
  onSave?: (value: string) => void;
}) {
  let ref = useRef<HTMLDivElement>(null);
  // let [viewState, setViewState] = useState<EditorView>();
  let [count, setCount] = useState(0);

  // console.log({ viewState });
  useEffect(() => {
    // console.log("effect");
    let isCurrent = true;
    let view: EditorView | undefined;
    // console.log({ isCurrent });

    if (ref.current && isCurrent) {
      console.log("here...");
      // view = new EditorView({
      //   extensions: [basicSetup, javascript()],
      //   parent: ref.current,
      // });

      let startState = EditorState.create({
        doc: initialValue,
        // extensions: [keymap.of(defaultKeymap)]
        // extensions: [basicSetup, javascript()],
        extensions: [basicSetup, markdown()],
      });

      view = new EditorView({
        parent: ref.current,
        state: startState,
      });
      // setViewState(view);
    }

    //   let view = new EditorView({
    //     extensions: [basicSetup, javascript()],
    //     parent: ref.current,
    //   });

    //   setViewState(view);
    // }

    return () => {
      isCurrent = false;
      if (view) {
        view.destroy();
      }
      // if (!isCurrent) {

      // view.destroy();
      // setViewState(undefined);
      // }
      console.log("cleanup");
      // console.log("destroy...");
      // if (viewState) {
      //   viewState.destroy();
      // }
    };
  }, [initialValue]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Inc</button>
      <div ref={ref} />
    </div>
  );
}
