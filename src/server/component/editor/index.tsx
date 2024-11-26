import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";
import styles from "./editor.module.css";
import { useHeight } from "../../../common/hook/response/use_height";
import "./index.css";

export default function RivEditor({ content = "" }: RivEditorProps) {
  const editorRef = useRef<Editor>(null);
  const height = useHeight();
  const toastHeight = height.width - 175;

  return (
    <div className={styles.customEditor}>
      <Editor
        ref={editorRef}
        initialValue={content}
        previewStyle="vertical"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        hideModeSwitch={true}
        toolbarItems={[]}
        height={`${toastHeight}px`}
      />
    </div>
  );
}

interface RivEditorProps {
  content?: string;
}
